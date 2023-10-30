import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import StarRating from "../../components/Rating";
import "../../styles/updatepack.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import HpPopup from "../../components/HpPopup";
import axios from "axios";



const HPUpdatePackage1 = () => {
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleToggleChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggleChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [showPopup, setShowPopup] = useState(false);

  const [placesInput, setPlacesInput] = useState("");
  const [places, setPlaceSuggestions] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
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
  

  const [formData, setFormData] = useState({
          package_name: "",
          price: "",
          days: "",
          trip_guide: false,
          hotel_rating: 0,
          no_of_people: false,
          vehicle:false,
          places: "",
          discription: "",
  });

  const handleSuggestionClick = (suggestion) => {
    console.log("handleSuggestionClick called with suggestion:", suggestion.name);
    setPlacesInput(suggestion.name);
    formData.places = suggestion.name;
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

  const handleHotelRatingChange = (rating) => {
    setFormData((prevData) => ({
      ...prevData,
      hotel_rating: rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axiosInstance.post("/packages", formData);

      if (response.status === 200) {
        // Successful response, do something
        console.log("Data sent successfully:", response.data);
        // Reset the form data if needed
        setFormData({
          package_name: "",
          price: "",
          days: "",
          trip_guide: false,
          hotel_rating: 0,
          no_of_people: false,
          vehicle:false,
          places: "",
          discription: "",

        });
      } else {
        // Handle error
        console.error("Error sending data:", response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12"
    //   >
    //     <Sidebar/>
    <div className="d-flex gap-3 w-100 align-items-center justify-content-around ">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 col-6 p-5 mt-5 mb-5"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontSize: "auto",
            fontWeight: "600",
          }}
          className="mx-2"
        >
          New Package
        </h1>
        {/* <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("../../assets/images/FirstProgressBar.png")}
              ></img>
            </div> */}
        <form className="pack" onSubmit={handleSubmit}>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column justify-content-center m-2">
                <label>
                  Name
                  <input
                    className="p-2"
                    type="text"
                    placeholder="Name of the package"
                    name="package_name"
                    value={formData.package_name}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Amount
                  <input
                    className="p-2"
                    type="number"
                    placeholder="Amount of the Package"
                    min={1}
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  ></input>
                </label>
                <label>
                  Days
                  <input
                    className="p-2"
                    type="number"
                    placeholder="Amount of the Days"
                    min={1}
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2">
                <div className="d-flex flex-row flex-md-row col-md-9  col-lg-5">
                  <p>
                    Tour Guide{" "}
                    <Toggle
                      checked={isChecked1}
                      onChange={(e) => {
                        handleToggleChange1(); // Call your existing toggle handler
                        handleChange(e); // Call the common handleChange function
                      }}
                      value={formData.trip_guide}
                      name="trip_guide"
                    />
                  </p>
                </div>
                <div className="d-flex flex-column flex-md-row flex-lg-row col-md-9 col-lg-6">
                  <p className="col-9">
                        Transportation{" "}
                        <Toggle
                          checked={isChecked2}
                          onChange={(e) => {
                            handleToggleChange2(); // Call your existing toggle handler
                            handleChange(e); // Call the common handleChange function 

                          }}
                          value={formData.vehicle}
                          name="vehicle"
                        />
                      </p>
                </div>
              </div>

              <div className="d-flex flex-md-column col-md-10 col-sm-10 flex-column flex-lg-row justify-content m-2 gap-2">
                <div className="col-10 col-md-6 col-lg-4">
                  <p>Hotel Ratings</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <StarRating
                    selectedRating={formData.hotel_rating}
                    onRatingChange={handleHotelRatingChange}
                  />
                </div>
                <label className="d-flex flex-lg-row col-6 gap-5 ml-1">
                  Persons
                  <input
                    className="d-flex"
                    type="number"
                    name="no_of_people"
                    min={1}
                    value={formData.no_of_people}
                    onChange={handleChange}
                  ></input>
                </label>
              </div>

              <div className="d-flex flex-column justify-content-center m-2">
                <label>
                  Places
                  <input
                    className="p-2"
                    type="text"
                    placeholder="Places of the Package"
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

              </div>

              <div className="d-flex flex-column justify-content-center m-2">
              <label>
                  Description:
                  <textarea
                    className="p-2"
                    placeholder="Discription"
                    name="discription"
                    value={formData.discription}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    style={{ minHeight: "50px" }}
                  ></textarea>
                </label>

              </div>
            </div>
            <div className="d-flex flex-lg-row flex-md-column flex-column gap-sm-3 justify-content-between mx-2">
              <button className="btn-cancel" type="submit">
                Cancel
              </button>

              <button
                className="btn-next"
                type="submit"
                onClick={() => setShowPopup(true)}
              >
                Send{" "}
                <Icon.ChevronRight
                  style={{ marginBottom: "5px", fontSize: "17px" }}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      {showPopup && <HpPopup onClose={() => setShowPopup(false)} />}
    </div>
    //   </div>
    // </div>
  );
};

export default HPUpdatePackage1;
