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
import { MdAccessible } from "react-icons/md";
import { MdDone } from "react-icons/md";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const OurHotel = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModalAdd = () => {
    setIsAddModalOpen(true);
  };

  const closeModalAdd = () => {
    setIsAddModalOpen(false);
  };

  const openModalEdit = () => {
    setIsEditModalOpen(true);
  };

  const closeModalEdit = () => {
    setIsEditModalOpen(false);
  };
  
  const [hotelData, setHotelData] = useState({
    hotelName: "",
    starRating: 0,
    userRating:0,
    description: "",
    hotelType: "",
    address: "",
    latitude: 0,
    longitude: 0,
    hotelAmenities: [],
    hotelImages: []
  });

  const handleImagesSelected = (images) => {
    inputHoteldata("hotelImages", images);
    console.log(images);  // Handle selected images here
    console.log(hotelData);
  };

  const inputHoteldata = (name, value) => {
    setHotelData((prev) => ({ ...prev, [name]: value}));
  }

  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000
  }); 

  const handleAddHotel = async (e) => {

    e.preventDefault();

    try {
      
      const response = await axiosInstance.post("/addHotel", {
        hotelName: "",
        starRating: 0,
        userRating:0,
        description: "",
        hotelType: "",
        address: "",
        latitude: 0,
        longitude: 0,
        hotelAmenities: [],
        hotelImages: []
      });

      if (response.status === 200) {
        console.log("ok");
      }

    } catch (error) {
     
      console.log(error);
    }
  }

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
                GOOD WOOD AIRPORT HOTEL
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
                  count={3}
                  onChange={ratingChanged}
                  size={15}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                3-star hotel with 2 restaurants
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
                <Link to="/hotel/aboutHotel">
                  see all <Icon.ChevronRight />
                </Link>
                <button
                  onClick={openModalEdit}
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <Icon.PencilSquare size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
          style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
        >
          <img className="img-fluid" src={room2}></img>
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
                GOOD WOOD AIRPORT HOTEL
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
                  count={3}
                  onChange={ratingChanged}
                  size={15}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                3-star hotel with 2 restaurants
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
              <Link className="mx-2">
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
                <Link>
                  see all <Icon.ChevronRight />
                </Link>
                <button
                  onClick={openModalEdit}
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <Icon.PencilSquare size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
          style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
        >
          <img className="img-fluid" src={room3}></img>
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
                GOOD WOOD AIRPORT HOTEL
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
                  count={3}
                  onChange={ratingChanged}
                  size={15}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                3-star hotel with 2 restaurants
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
              <Link className="mx-2">
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
                <Link>
                  see all <Icon.ChevronRight />
                </Link>
                <button
                  onClick={openModalEdit}
                  style={{ border: "none", backgroundColor: "white" }}
                >
                  <Icon.PencilSquare size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    
      <Modal show={isAddModalOpen} onHide={closeModalAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Hotel Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddHotel} method='POST'>
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
                      <input type="text" name="hotelName"></input>
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
                       Address
                    </p>
                      <input type="text" name="address"></input>
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
                      <input type="text" name="longitude"></input>
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
                      <input type="text" name="latitude"></input>
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
                      <input type="text"></input>
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
                     
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
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
          <form>
            <div className="d-flex flex-column mx-2" style={{}}>
              <div className="d-flex flex-column mx-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-5">
                    <label>
                      Hotel Name
                      <br />
                      <input type="text"></input>
                    </label>
                    <label>
                      Location
                      <br />
                      <input type="text"></input>
                    </label>
                  </div>
                  <div className="d-flex mt-3 mb-2 flex-row gap-5">
                  <label>
                      Add star rating{" "}
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      Description
                      <br />
                      <input
                        style={{ width: "26rem", height: "7rem" }}
                        type="text"
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OurHotel;
