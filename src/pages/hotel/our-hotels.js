import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import "./../../styles/hotel/our-hotel.css";
import room1 from "./../../assets/images/room-image1.png";
import room2 from "./../../assets/images/room-image2.png";
import room3 from "./../../assets/images/room-image3.png";
import ImageUpload from "../../components/imageUpload";
import axios from "axios";
import StarRating from "../../components/Rating";

const OurHotel = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState("");
  const [selectedHotel, setSelectedHotel] = useState([]);

  const openModalAdd = () => {
    setIsAddModalOpen(true);
  };

  const closeModalAdd = () => {
    setIsAddModalOpen(false);
  };

  const openModalEdit = (hotelId) => {
    setIsEditModalOpen(true);
    setHotelId(hotelId);
    setSelectedHotel(hotels.find((hotel) => hotel.hotelId === hotelId));
    console.log(hotelId);
  };

  const closeModalEdit = () => {
    setIsEditModalOpen(false);
  };

  //GETTING THE FILE FROM UPLOAD COMPONENT
  const [selectedFile, setSelectedFile] = useState(null);

  //STORING IMAGE FILE FOR OOPERATIONS
  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  //UPLOADING THE FILE
  const handleUploadButtonClick = () => {
    if (!selectedFile) return;

    // 1. Rename the file (this can be a bit tricky in the browser, but let's assume you have a way)
    const newFileName = "newNameForFile.jpg"; // Your renaming logic here

    // 2. Process the file (like copying or uploading it somewhere)

    // 3. Optionally, update your data structures or state
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedCheckboxes((prevCheckboxes) =>
      checked
        ? [...prevCheckboxes, name]
        : prevCheckboxes.filter((item) => item !== name)
    );

    // Update the hotelAmenities property in hotelData
    inputHoteldata("hotelAmenities", selectedCheckboxes);
  };

  const [hotelData, setHotelData] = useState({
    hotelName: "",
    description: "",
    hotelType: "",
    hotelRating: 0,
    // city: "",
    address: "",
    latitude: "",
    longitude: "",
    hotelAmenities: [],
    hotelImages: [],
  });

  const handleImagesSelected = (images) => {
    inputHoteldata("hotelImages", images);
    console.log(images);  // Handle selected images here
    console.log(hotelData);
  };

  const inputHoteldata = (name, value) => {
    setHotelData((prev) => ({ ...prev, [name]: value }));
    // console.log(hotelData);
  };

  const handleHotelRatingChange = (rating) => {
    setHotelData((prevData) => ({
      ...prevData,
      hotelRating: rating,
    }));
  };

  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const handleAddHotel = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/addHotel", {
        hotelName: hotelData.hotelName,
        description: hotelData.description,
        hotelType: hotelData.hotelType,
        starRating: hotelData.hotelRating,
        // city: "",
        address: hotelData.address,
        latitude: hotelData.latitude,
        longitude: hotelData.longitude,
        // hotelAmenities: hotelData.hotelAmenities,
        // hotelImages: hotelData.hotelImages,
      });

      if (response.status === 200) {
        closeModalAdd();
        console.log(hotelData);
        console.log("okkkk");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewHotels")
      .then((response) => {
        setHotels(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleEditHotel = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateHotel/${hotelId}`, {
        hotelType: hotelData.hotelType,
        description: hotelData.description,
        starRating: hotelData.hotelRating,
        address: hotelData.address,
        latitude: hotelData.latitude,
        longitude: hotelData.longitude,
        hotelName: hotelData.hotelName,
      });

      if (response.status === 200) {
        // console.log();
        console.log("okkk");
        closeModalEdit();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditHotelId = (e) => {
    setHotelId(e.target.value);
  };


  return (
    <div className="d-flex flex-column gap-2 w-100 my-lg-2">
      <div className="d-flex flex-column flex-md-column flex-lg-row col-lg-12 col-md-12 col-12 gap-lg-5 justify-content-lg-between justify-content-md-between align-items-center">
        <div className="d-flex flex-row gap-4 col-lg-5 col-md-7 col-10">
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "30px",
              fontWeight: "600",
              letterSpacing: "-0.22px",
            }}
          >
            Add Hotel
          </p>
          <button onClick={openModalAdd} style={{ border: "none" }}>
            <Icon.PlusSquareFill
              className="my-2"
              size={25}
              style={{ color: "#023047;" }}
            />
          </button>
        </div>
        <div className="search d-none d-lg-flex d-md-flex flex-row col-lg-2 col-md-7 col-3 gap-2">
          <input placeholder="Search"></input>
          <Icon.SearchHeartFill
            size={22}
            style={{ color: "#aaa" }}
            class="fa fa-search my-1"
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-column flex-lg-row gap-2 col-lg-12 col-md-12 col-12 justify-content-lg-evenly">
        {hotels.map((hotel) => (
          <div
            className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
            style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
          >
            <img className="img-fluid" src={room1}></img>
            <div className="d-flex flex-column justify-content-evenly">
              <div className="d-flex flex-column">
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "25px",
                    color: "",
                    fontWeight: "600",
                  }}
                  className="m-0"
                >
                  {hotel.hotelName}
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  className="m-0 mx-2"
                >
                  <ReactStars
                    count={hotel.starRating}
                    // onChange={ratingChanged}
                    size={15}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    color="#ffd700"
                  />
                  {hotel.starRating}-star hotel with 2 restaurants
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                  }}
                  className="m-0 mx-2"
                >
                  <span style={{ fontWeight: "600", fontSize: "16px" }}>
                    7.2/10 Good
                  </span>
                  <br />
                </p>
                <Link to="/hotel/hotelReviews" className="mx-2">
                  See all 18 reviews <Icon.ChevronRight />
                </Link>
              </div>
              <div className="d-flex flex-column justify-content-between me-1">
                <div className="d-flex flex-column my-2">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    className="m-0 mx-2"
                  >
                    Popular amenities
                    <br />
                  </p>
                  <div className="d-flex flex-column mx-4">
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <Icon.CupHotFill size={15} /> Breakfast available
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <Icon.Wifi size={15} /> Free Wifi
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <Icon.PSquareFill size={15} /> Parking included
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between my-1 mx-2">
                  <Link to={`/hotel/aboutHotel?id=${hotel.hotelId}`}>
                    see all <Icon.ChevronRight />
                  </Link>
                  <Link
                    onClick={()=>openModalEdit(hotel.hotelId)}
                    style={{ border: "none", color:"black", backgroundColor: "white" }}
                  >
                    <Icon.PencilSquare size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <Modal show={isAddModalOpen} onHide={closeModalAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hotel Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddHotel} method="POST">
            <div className="d-flex flex-column mx-2" style={{}}>
              <div className="d-flex flex-column mx-3">
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel Name
                      </p>
                      <input
                        type="text"
                        name="hotelName"
                        value={hotelData.hotelName}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    {/* <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        City
                      </p>
                      <input
                        type="text"
                        name="city"
                        value={hotelData.city}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label> */}
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Address
                      </p>
                      <input
                        style={{ width: "26.25rem" }}
                        type="text"
                        name="address"
                        value={hotelData.address}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Longitude
                      </p>
                      <input
                        type="text"
                        name="longitude"
                        value={hotelData.longitude}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Latitude
                      </p>
                      <input
                        type="text"
                        name="latitude"
                        value={hotelData.latitude}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>

                  <div className="d-flex mt-3 mb-2 flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel type
                      </p>
                      <input
                        type="text"
                        name="hotelType"
                        value={hotelData.hotelType}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Add star rating{" "}
                      </p>
                      <StarRating
                        selectedRating={hotelData.hotelRating}
                        onRatingChange={handleHotelRatingChange}
                      />
                    </label>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Description
                      </p>
                      <input
                        style={{ width: "26rem", height: "7rem" }}
                        type="text"
                        name="description"
                        value={hotelData.description}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>

                  <p
                    style={{
                      textAlign: "",
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      color: "",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    Hotel images
                  </p>
                  <div className="d-flex flex-row gap-2">
                    <ImageUpload onImagesSelected={handleImagesSelected} />
                  </div>
                </div>
                <p
                  style={{
                    textAlign: "",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    color: "",
                    fontWeight: "600",
                  }}
                  className="m-0 my-2"
                >
                  Hotel amenities
                </p>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="pool" // This should match the amenity name
                              checked={selectedCheckboxes.includes("pool")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Pool
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="freeWifi" // This should match the amenity name
                              checked={selectedCheckboxes.includes("freeWifi")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Free WiFi
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="restaurent" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "restaurent"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Restaurant
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="parking" // This should match the amenity name
                              checked={selectedCheckboxes.includes("parking")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Parking included
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="breakfast" // This should match the amenity name
                              checked={selectedCheckboxes.includes("breakfast")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Breakfast available
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="houseKeeping" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "houseKeeping"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Housekeeping
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="business" // This should match the amenity name
                              checked={selectedCheckboxes.includes("business")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Business services
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="airConditioning" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "airConditioning"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Air conditioning
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="bar" // This should match the amenity name
                              checked={selectedCheckboxes.includes("bar")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Bar
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button
                  onClick={handleUploadButtonClick}
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={isEditModalOpen} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Hotel Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {hotels.find((hotel) => hotel.hotelId === hotelId) ? (
          <form onSubmit={handleEditHotel} method="POST">
            <input
              type="hidden"
              name="hotelId"
              value={hotelId}
              onChange={handleEditHotelId}
            />
            <div className="d-flex flex-column mx-2" style={{}}>
              <div className="d-flex flex-column mx-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel Name
                      </p>
                      <input
                        type="text"
                        name="hotelName"
                        placeholder={selectedHotel.hotelName}
                        value={hotelData.hotelName}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Address
                      </p>
                      <input
                        style={{ width: "26.25rem" }}
                        type="text"
                        name="address"
                        placeholder={selectedHotel.address}
                        value={hotelData.address}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Longitude
                      </p>
                      <input
                        type="text"
                        name="longitude"
                        placeholder={selectedHotel.longitude}
                        value={hotelData.longitude}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Latitude
                      </p>
                      <input
                        type="text"
                        name="latitude"
                        placeholder={selectedHotel.latitude}
                        value={hotelData.latitude}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex mt-3 mb-2 flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Hotel type
                      </p>
                      <input
                        type="text"
                        name="hotelType"
                        placeholder={selectedHotel.hotelType}
                        value={hotelData.hotelType}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Add star rating{" "}
                      </p>
                      <StarRating
                        selectedRating={hotelData.starRating}
                        onRatingChange={handleHotelRatingChange}
                      />
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      <p
                        style={{
                          textAlign: "",
                          fontFamily: "Poppins",
                          fontSize: "18px",
                          color: "",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Description
                      </p>
                      <input
                        style={{ width: "26rem", height: "7rem" }}
                        type="text"
                        name="description"
                        placeholder={selectedHotel.description}
                        value={hotelData.description}
                        onChange={(e) => {
                          inputHoteldata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                </div>
                <p
                  style={{
                    textAlign: "",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    color: "",
                    fontWeight: "600",
                  }}
                  className="m-0 my-2"
                >
                  Hotel amenities
                </p>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input type="checkbox"></input> Pool
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Free WiFi
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Restaurant
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Parking included
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Breakfast available
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <li>
                          <label>
                            <input type="checkbox"></input> Housekeeping
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Business services
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Air conditioning
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox"></input> Bar
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Cancel
                </button>
                <button
                  className="p-2"
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "rgba(73, 151, 207, 0.78)",
                    border: "#fff",
                    color: "#fff",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          ) : (
            <p>No room found for roomId: {hotelId}</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OurHotel;
