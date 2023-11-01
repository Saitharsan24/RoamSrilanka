import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/updatepack.css";
import axios from "axios";

function HPViewItem({onBack }) {
  const paraData = useParams();
  console.log("kkkk", paraData.fairId);
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [fairData, setFairData] = useState({});
  const [fairImageData,setFairImageData] = useState({});
  const [filteredData,setFilteredFairImages] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/getParticularFair/" + paraData.fairId)
      .then((res) => {
        setFairData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    axiosInstance
    .get("viewFairImages")
    .then((res)=> {
      setFairImageData(res.data);
      console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    useEffect(() => {
      if (fairImageData !== null && Array.isArray(fairImageData)) {
        const foundImage = fairImageData.find(image => image.fairId == paraData.fairId);
        if (foundImage) {
          setFilteredFairImages([foundImage]);
        } else {
          setFilteredFairImages([]);
        }
      } else {
        setFilteredFairImages([]);
      }
    }, [fairImageData, paraData.fairId]);
    
    console.log("fairImages",fairImageData)
    console.log("filteredData",filteredData)

  const handleDeleteEvent = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmed) {
      axiosInstance
      .delete("/deleteFair/" + paraData.fairId)
      .then((res) => {
        console.log(res.data);
        window.history.back();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const handleCancelButton = () => {
    window.history.back(); // Redirect to the previous page
  };

  return (
    <div className="d-flex gap-3 w-100 m align-items-center justify-content-around">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 mt-4 mb-5  justify-content-around"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontWeight: "700",
            fontSize: "auto",
            color: "#DB163A",
          }}
          className="d-flex m-5"
        >
          Item Name: {fairData.name}
        </h1>
        <div className="d-flex align-items-center justify-content-around flex-column flex-md-row flex-lg-row col-12">
          <div
            className="d-flex flex-column col-md-4 col-lg-4 gap-4"
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "11px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="d-flex flex-column col-12">
              <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              {filteredData[0] ? (
                  <img
                    className="img-fluid"
                    style={{
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      borderRadius: "11px",
                    }}
                    src={require(`../../assets/images/planner/${filteredData[0].fairImage}`)}
                    alt={filteredData.fairImage}
                  ></img>
                ) : (
                  <img
                    className="img-fluid"
                    style={{
                      borderRadius: "10px",
                    }}
                    src={require("./../../assets/images/room-image1.png")}
                    alt="Default Alt Text"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-6 gap-3 flex-column">
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <h2>Item Information</h2>
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Name:
                      <input
                        className="p-2"
                        type="text"
                        value={fairData.fairname}
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Rent:
                      <input
                        className="p-2"
                        type="number"
                        value={fairData.rent}
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Description:
                      <textarea
                        className="p-2"
                        type="text"
                        value={fairData.description}
                        readOnly
                        style={{ minHeight: "50px" }}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mx-5 mb-5">
          <button className="btn-cancel p-2" onClick={handleDeleteEvent}>
            Delete
          </button>
          <button className="btn-next p-2" onClick={handleCancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default HPViewItem;
