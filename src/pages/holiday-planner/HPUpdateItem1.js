import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";
import DragDropFile from "../../components/file-upload";
import axios from "axios";
import HpPopup2 from "../../components/HpPopup2";

const HPUpdateItem1 = () => {
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [fairData, setFormData] = useState({
    name: "", 
    rent: "",
    description: "",
    fairImage: null,
  });

  const inputFormdata = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = e.target.files; // Get an array of selected image files
    const imageFiles = [];

    // Iterate through the selected files and add them to the imageFiles array
    for (let i = 0; i < selectedFiles.length; i++) {
      imageFiles.push(selectedFiles[i]);
    }

    inputFormdata("fairImage", imageFiles); // Update productDetails state with the selected images
    // console.log(imageFiles)
  };

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/addFair", {
        fairname: fairData.name,
        rent: fairData.rent,
        description: fairData.description,
      });

      if (response.status === 200) {
        console.log(fairData.fairImage.length);
        try {
          for (let i = 0; i < fairData.fairImage.length; i++) {
            const formData = new FormData();
            formData.append("imageFile", fairData.fairImage[i]);
            const imageResponse = await axiosInstance.post(
              `/addFairImage/${response.data.fairId}`,
              formData,
              {
                headers: {
                  "Content-Type": `multipart/form-data`,
                },
              }
            );
            if (imageResponse.status === 200) {
              console.log("image uploaded");
              alert("Item added successfully");
            }
          }
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="d-flex gap-3 w-100 align-items-center justify-content-around">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 col-6 p-5 mt-4 mb-4"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontSize: "30px",
            fontWeight: "600",
          }}
          className="mx-3"
        >
          Item Information
        </h1>
        <form className="pack" onSubmit={handlePost} method="POST">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column justify-content-center m-2">
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Name:
                  <input
                    className="p-2"
                    type="text"
                    placeholder="Enter fair name"
                    name="name"
                    value={fairData.name}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                  ></input>
                </label>
                <label>
                  Rent per day :
                  <input
                    className="p-2"
                    type="number"
                    placeholder="Enter Rent"
                    name="rent"
                    value={fairData.rent}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column justify-content-center m-2">
                <label>
                  Description:
                  <textarea
                    className="p-2"
                    placeholder="Description"
                    name="description"
                    value={fairData.description}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                    style={{ minHeight: "50px" }}
                  ></textarea>
                </label>
                <label>
                  Image:
                  <div className="d-flex justify-content-center col-12">
                    {/* <DragDropFile /> */}
                    <input
                      type="file"
                      name="fairImage"
                      multiple // Allow multiple file selection
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-column flex-lg-row gap-3 justify-content-between mx-2">
              <Link to="/holidayPlanner/plannerItem">
              <button className="btn-cancel" type="submit">
                  Cancel
                </button>
              </Link>
              <button
                className="btn-next"
                type="submit"
                onClick={() => setShowPopup(true)}
              >
                Post{" "}
                <Icon.ChevronRight
                  style={{ marginBottom: "5px", fontSize: "17px" }}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Link to="/holidayPlanner/plannerItem">
        {showPopup && <HpPopup2 onClose={() => setShowPopup(false)} />}
      </Link> */}
    </div>
  );
};

export default HPUpdateItem1;
