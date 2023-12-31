import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";
import DragDropFile from "../../components/file-upload";
import HpPopup2 from "../../components/HpPopup2";
import React, { useState } from "react";
import axios from "axios";

const HPUpdateEvent1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [eventData, setFormData] = useState({
    name: "",
    date: "",
    days: "",
    places: "",
    description: "",
    eventImage: null,
  });

  const [placesInput, setPlacesInput] = useState("");
  const [places, setPlaceSuggestions] = useState("");
  const fetchPlaceSuggestions = async (query) => {
    try {
      const response = await axiosInstance.get(`https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=LK&format=json`);
      if (response.status === 200) {
        const suggestions = response.data.map((item) => ({
          name: item.display_name,
        }));
        setPlaceSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log("handleSuggestionClick called with suggestion:", suggestion.name);
    setPlacesInput(suggestion.name);
    eventData.places = suggestion.name;
    setPlaceSuggestions([]);
  };

  const handlePlacesInputChange = (e) => {
    const inputvalue = e.target.value;
    setPlacesInput(inputvalue);
    if (inputvalue.length >= 3) {
      fetchPlaceSuggestions(inputvalue);
    } else {
      setPlaceSuggestions([]);
    }
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const inputFormdata = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const handleImageChange = (e) => {
    const selectedFiles = e.target.files; // Get an array of selected image files
    const imageFiles = [];

    // Iterate through the selected files and add them to the imageFiles array
    for (let i = 0; i < selectedFiles.length; i++) {
      imageFiles.push(selectedFiles[i]);
    }

    inputFormdata("eventImage", imageFiles); // Update productDetails state with the selected images
    // console.log(imageFiles)
  };

  const handlePost = async (e) => {
    e.preventDefault();
    console.log("eventData",eventData);

    try {
      const response = await axiosInstance.post("/addEvent", {
        name: eventData.name,
        date: eventData.date,
        days: eventData.days,
        places: eventData.places,
        description: eventData.description,
      });

      if (response.status === 200) {
        console.log(eventData.eventImage.length);
        try {
          for (let i = 0; i < eventData.eventImage.length; i++) {
            const formData = new FormData();
            formData.append("imageFile", eventData.eventImage[i]);
            const imageResponse = await axiosInstance.post(
              `/addEventImage/${response.data.eventId}`,
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
    <div className="d-flex w-100 mt-4 mb-4 justify-content-around ">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 col-10 col-md-6 p-3 col-lg-6"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontSize: "auto",
            fontWeight: "600",
          }}
          className="mx-2 col-12"
        >
          New Event
        </h1>

        <form className="pack" onSubmit={handlePost} method="POST">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column justify-content-center m-2">
                <label>
                  Name
                  <input
                    className="p-2"
                    type="text"
                    placeholder="write the event name"
                    name="name"
                    value={eventData.name}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Date
                  <input
                    className="p-2"
                    type="date"
                    placeholder="Date of the Event"
                    name="date"
                    value={eventData.date}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                  ></input>
                </label>
                <label>
                  Days
                  <input
                    className="p-2"
                    type="number"
                    placeholder="Number of the Days"
                    name="days"
                    value={eventData.days}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                    min={1}
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column justify-content-center m-2 gap-3">
                <label>
                  Places
                  <input
                    className="p-2"
                    type="text"
                    placeholder="Places of the Event"
                    name="places"
                    value={placesInput}
                    onChange={handlePlacesInputChange}
                  ></input>
                </label>
                {places.length > 0 && (
                   <ul className="suggestions">
                   {places.map((suggestion, index) => (
                     <li onClick={() => handleSuggestionClick(suggestion)} key={index}>{suggestion.name}</li>
                   ))}
                 </ul>
                )}
                <label>
                  Description <br />
                  <textarea
                    className="p-2"
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={eventData.description}
                    onChange={(e) => {
                      inputFormdata(e.target.name, e.target.value);
                    }}
                    style={{ minHeight: "50px" }}
                  ></textarea>
                </label>
                <label>
                  Image:
                  <div className="d-flex justify-content-center w-100">
                    {/* <DragDropFile /> */}
                    <input
                      type="file"
                      name="eventImage"
                      multiple // Allow multiple file selection
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-column flex-lg-row gap-3 justify-content-between mx-2">
              <Link to="/holidayPlanner/plannerEvent">
                <button className="btn-cancel" type="submit">
                  Cancel
                </button>
              </Link>
              <button
                className="btn-next"
                type="submit"
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
      <Link to="/holidayPlanner/plannerEvent">
        {showPopup && <HpPopup2 onClose={() => setShowPopup(false)} />}
      </Link>
    </div>
  );
};

export default HPUpdateEvent1;
