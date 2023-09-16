import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import room1 from "./../../assets/images/room-image1.png";
import room2 from "./../../assets/images/room-image2.png";
import room3 from "./../../assets/images/room-image3.png";
import ImageUpload from "../../components/imageUpload";
import Modal from "react-bootstrap/Modal";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import StarRating from "../../components/Rating";
import { Refresh } from "@mui/icons-material";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const AboutHotel = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isAllModalOpen, setIsAllModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [hotelRooms, setHotelRooms] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState([]);

  const openModalSeeAll = (roomId) => {
    setIsAllModalOpen(true);
    setRoomId(roomId);
    setRooms(hotelRooms.find((room) => room.roomId === roomId));
    console.log(roomId);
  };

  const closeModalSeeAll = () => {
    setIsAllModalOpen(false);
  };

  const openModalAdd = () => {
    setIsAddModalOpen(true);
  };

  const closeModalAdd = () => {
    setIsAddModalOpen(false);
  };

  const openModalEdit = (roomId) => {
    setIsEditModalOpen(true);
    setRoomId(roomId);
    setRooms(hotelRooms.find((room) => room.roomId === roomId));
    console.log(roomId);
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

    inputRoomdata("amenities", selectedCheckboxes);
  };

  const [roomData, setRoomData] = useState({
    roomType: "",
    occupancy: "",
    price: "",
    roomSize: "",
    noOfBeds: "",
    availability: "",
    description: "",
    policies: [],
    // images: [],
    amenities: [],
  });

  const inputRoomdata = (name, value) => {
    setRoomData((prev) => ({ ...prev, [name]: value }));
    // console.log(roomData);
  };

  const hotelId = urlParams.get("id");
  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/addHotelRoom", {
        roomType: roomData.roomType,
        occupancy: roomData.occupancy,
        price: roomData.price,
        roomSize: roomData.roomSize,
        noOfBeds: roomData.noOfBeds,
        availability: roomData.availability,
        description: roomData.description,
        hotelId: hotelId,
        // policies: roomData.policies,
        // images: roomData.images,
        // amenities: roomData.amenities,
      });

      if (response.status === 200) {
        console.log(roomData);
        console.log("okkk");
        closeModalAdd();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get(`/viewHotel/${hotelId}`)
      .then((response) => {
        setHotel(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get(`/viewHotelRoom/${hotelId}`)
      .then((response) => {
        setHotelRooms(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleDeleteRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.delete(`/deleteRoom/${roomId}`, {});

      if (response.status === 200) {
        console.log("okkk");
        closeModalSeeAll();
        window.location.reload();
      }
    } catch (error) {
      console.log("vfvn fjvhfj vfhv");
      console.log(error);
    }
  };

  const handleChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const handleEditRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateRoom/${roomId}`, {
        roomType: roomData.roomType,
        occupancy: roomData.occupancy,
        price: roomData.price,
        roomSize: roomData.roomSize,
        noOfBeds: roomData.noOfBeds,
        availability: roomData.availability,
        description: roomData.description,
        // policies: roomData.policies,
        // images: roomData.images,
        // amenities: roomData.amenities,
      });

      if (response.status === 200) {
        console.log(roomData);
        console.log("okkk");
        closeModalEdit();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const hotelRating = hotel.starRating;

  return (
    <div className="d-flex flex-column w-100">
      <div
        className="d-flex flex-row col-11 mx-5 my-3 p-2 justify-content-between"
        style={{ borderRadius: "10px", backgroundColor: "#fff" }}
      >
        <div className="d-flex flex-column">
          <p
            style={{
              textAlign: "",
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
              count={hotelRating}
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
            <div className="d-flex flex-row">
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
              <div className="d-flex flex-column mx-4">
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <MdIcons.MdPool size={15} /> Pool
                </p>
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <BiIcons.BiSolidDrink size={15} /> Bar
                </p>
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <ImIcons.ImSpoonKnife size={15} /> Restaurants
                </p>
              </div>
              <div className="d-flex flex-column mx-4">
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <GiIcons.GiIceBolt size={15} /> Air conditioning
                </p>
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <AiIcons.AiOutlineClear size={15} /> Housekeeping
                </p>
                <p className="m-0" style={{ fontSize: "13px" }}>
                  <BsIcons.BsBagHeartFill size={15} /> Business services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row col-6">
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide col-6"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item img-fluid active">
                <img
                  style={{ width: "15rem", height: "15rem" }}
                  src={room1}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item img-fluid">
                <img
                  style={{ width: "15rem", height: "15rem" }}
                  src={room2}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item img-fluid">
                <img
                  style={{ width: "15rem", height: "15rem" }}
                  src={room3}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="d-flex flex-column my-3">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
              }}
              className="m-0 mx-2"
            >
              Description
              <br />
            </p>
            <p
              style={{
                textAlign: "Justify",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
              }}
              className="m-0 mx-2"
            >
              {hotel.description}
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
              }}
              className="m-0 mx-2 mt-4"
            >
              Explore the area
              <br />
            </p>
            <p
              style={{
                textAlign: "Justify",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "400",
              }}
              className="m-0 mx-2"
            >
              <Icon.AirplaneFill /> {hotel.address}
            </p>
            <Link className="mx-2">
              View in map <Icon.ChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-column col-11 mx-5 my-1 p-2"
        style={{ backgroundColor: "#fff", borderRadius: "5px" }}
      >
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "25px",
            color: "",
            fontWeight: "600",
          }}
          className="m-0 mb-2"
        >
          Add Room{" "}
          <button
            onClick={openModalAdd}
            style={{ border: "none", background: "none" }}
          >
            <Icon.PlusSquareFill />
          </button>
        </p>
        <div className="container">
          {hotelRooms.length !== 0 && (
            <Carousel>
              {hotelRooms.map(
                (room, index) =>
                  index % 3 === 0 && (
                    <Carousel.Item key={index}>
                      <div className="d-flex flex-row justify-content-evenly">
                        {hotelRooms.slice(index, index + 3).map((room) => (
                          <div
                            className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
                            style={{
                              borderRadius: "10px",
                              backgroundColor: "#FFFFFF",
                            }}
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
                                  {room.roomType}
                                </p>
                                <p
                                  className="m-0 mx-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <Icon.Wifi size={15} /> Free Wifi
                                </p>
                                <p
                                  className="m-0 mx-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <Icon.PSquareFill size={15} /> Parking
                                  included
                                </p>
                                <p
                                  className="m-0 mx-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <Icon.Textarea size={15} /> {room.roomSize} sq
                                  ft
                                </p>
                                <p
                                  className="m-0 mx-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <Icon.PeopleFill size={15} /> Sleeps{" "}
                                  {room.occupancy}
                                </p>
                                <p
                                  className="m-0 mx-2"
                                  style={{ fontSize: "13px" }}
                                >
                                  <MdIcons.MdHorizontalSplit size={15} />{" "}
                                  {room.noOfBeds} Queen bed
                                </p>
                                <p
                                  style={{
                                    fontFamily: "Poppins",
                                  }}
                                  className="m-0 mx-2"
                                >
                                  <span
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "16px",
                                    }}
                                  >
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
                                  <div className="d-flex flex-column mx-4">
                                    <p
                                      className="m-0"
                                      style={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      ${room.price}
                                    </p>
                                    <p
                                      className="m-0"
                                      style={{ fontSize: "13px" }}
                                    >
                                      <span
                                        style={{
                                          textDecoration: "line-through",
                                        }}
                                      >
                                        $400
                                      </span>{" "}
                                      Total
                                    </p>
                                    <p
                                      className="m-0"
                                      style={{ fontSize: "13px" }}
                                    >
                                      Includes tax and fees
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between my-1 mx-2">
                                  <Link
                                    onClick={() => openModalSeeAll(room.roomId)}
                                  >
                                    see all <Icon.ChevronRight />
                                  </Link>
                                  <Link
                                    onClick={() => openModalEdit(room.roomId)}
                                    style={{
                                      border: "none",
                                      color: "black",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    <Icon.PencilSquare size={25} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  )
              )}
            </Carousel>
          )}
        </div>
      </div>

      <Modal
        hotelRooms={hotelRooms}
        show={isAllModalOpen}
        onHide={closeModalSeeAll}
      >
        <Modal.Header closeButton>
          <Modal.Title>Room Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hotelRooms.find((room) => room.roomId === roomId) ? (
            <div>
              <form>
                <input
                  type="hidden"
                  name="roomId"
                  value={roomId}
                  onChange={handleChangeRoomId}
                />
                <div
                  className="d-flex flex-column overflow-y-scroll mx-2"
                  style={{ height: "32rem", width: "29rem" }}
                >
                  <div
                    id="carouselRoomControlsNoTouching"
                    class="carousel slide mx-2"
                    data-bs-touch="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={room1} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src={room2} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src={room3} class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselRoomControlsNoTouching"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselRoomControlsNoTouching"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className="d-flex flex-column mx-3">
                    <p
                      style={{
                        textAlign: "",
                        fontFamily: "Poppins",
                        fontSize: "25px",
                        color: "",
                        fontWeight: "600",
                      }}
                      className="m-0"
                    >
                      {rooms.roomType}
                    </p>
                    <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                      <Icon.Wifi size={15} /> Free Wifi
                    </p>
                    <p className="m-0 mx-2  my-1" style={{ fontSize: "13px" }}>
                      <Icon.PSquareFill size={15} /> Parking included
                    </p>
                    <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                      <Icon.Textarea size={15} /> {rooms.roomSize} sq ft
                    </p>
                    <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                      <Icon.PeopleFill size={15} /> Sleeps {rooms.occupancy}
                    </p>
                    <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                      <MdIcons.MdHorizontalSplit size={15} /> {rooms.noOfBeds}{" "}
                      Queen bed
                    </p>

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
                      Room amenities
                    </p>
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Accessibility
                            </p>
                            <li>Access via exterior corridors</li>
                            <li>Wheelchair accessible</li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Bathroom
                            </p>
                            <li>Free toiletries</li>
                            <li>Hair dryer (on request)</li>
                            <li>Rainfall showerhead</li>
                            <li>Shampoo</li>
                            <li>Shower</li>
                            <li>Soap</li>
                            <li>Toothbrush and toothpaste (on request)</li>
                            <li>Towels</li>
                          </ui>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Bedroom
                            </p>
                            <li>Air conditioning</li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Internet
                            </p>
                            <li>Free WiFi</li>
                            <li>Free wired Internet</li>
                          </ui>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdDone size={18} /> more
                            </p>
                            <li>Daily housekeeping</li>
                            <li>Electrical adapters/chargers</li>
                            <li>Laptop workspace</li>
                            <li>View - garden</li>
                            <li>Wardrobe or closet</li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Outdoor space
                            </p>
                            <li>Balcony</li>
                          </ui>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex flex-row justify-content-around my-1 mx-2">
                <button onClick={closeModalSeeAll}>Cancel</button>
                <button onClick={handleDeleteRoom} method="POST">
                  Delete Room
                </button>
              </div>
            </div>
          ) : (
            <p>No room found for roomId: {roomId}</p>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={isAddModalOpen} onHide={closeModalAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add Room Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div
              className="d-flex flex-column overflow-y-scroll mx-2"
              style={{ height: "32rem", width: "29rem" }}
            >
              <div className="d-flex flex-column mx-3">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-5">
                    <label style={{ fontWeight: "600" }}>
                      Room Type
                      <br />
                      <select
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                        name="roomType" // Set a common name for the select element
                      >
                        <option value="Deluxe Double Room">
                          Deluxe Double Room
                        </option>
                        <option value="Deluxe Single Room">
                          Deluxe Single Room
                        </option>
                      </select>
                    </label>
                    <label style={{ fontWeight: "600" }}>
                      Occupancy
                      <br />
                      <input
                        type="number"
                        name="occupancy"
                        value={roomData.occupancy}
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label style={{ fontWeight: "600" }}>
                      Price
                      <br />
                      <input
                        type="number"
                        name="price"
                        value={roomData.price}
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    {/* <label style={{ fontWeight: "600" }}>
                      Availability
                      <br />
                      <input
                        type="boolean"
                        name="availability"
                        value={roomData.availability}
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label> */}
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label style={{ fontWeight: "600" }}>
                      No of beds
                      <br />
                      <input
                        type="number"
                        name="noOfBeds"
                        value={roomData.noOfBeds}
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                    <label style={{ fontWeight: "600" }}>
                      Room Size
                      <br />
                      <input
                        type="text"
                        name="roomSize"
                        placeholder="Room size in sq ft"
                        value={roomData.roomSize}
                        onChange={(e) => {
                          inputRoomdata(e.target.name, e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <label style={{ fontWeight: "600" }}>
                    Description
                    <br />
                    <input
                      style={{ height: "6rem", width: "26.25rem" }}
                      type="text"
                      name="description"
                      value={roomData.description}
                      onChange={(e) => {
                        inputRoomdata(e.target.name, e.target.value);
                      }}
                    ></input>
                  </label>
                  <label style={{ fontWeight: "600" }}>
                    Policies
                    <br />
                    <textarea
                      style={{ height: "6rem", width: "26.25rem" }}
                      name="policies"
                      value={roomData.policies.join("\n")} // Join the list into a string with newline separators
                      onChange={(e) => {
                        const policies = e.target.value.split("\n"); // Split the input by newlines to create a list
                        inputRoomdata(e.target.name, policies);
                      }}
                    ></textarea>
                  </label>
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
                    Room images
                  </p>
                  <div className="d-flex flex-row gap-2">
                    <ImageUpload onFileChange={handleFileChange} />
                    <ImageUpload onFileChange={handleFileChange} />
                    <ImageUpload onFileChange={handleFileChange} />
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
                  Room amenities
                </p>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdAccessible size={18} /> Accessibility
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="corridors" // This should match the amenity name
                              checked={selectedCheckboxes.includes("corridors")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Access via exterior corridors
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="wheelchair" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "wheelchair"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Wheelchair accessible
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdAccessible size={18} /> Bathroom
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="toiletries" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "toiletries"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Free toiletries
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="dryer" // This should match the amenity name
                              checked={selectedCheckboxes.includes("dryer")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Hair dryer
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="showerhead" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "showerhead"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Rainfall showerhead
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="shampoo" // This should match the amenity name
                              checked={selectedCheckboxes.includes("shampoo")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Shampoo
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="shower" // This should match the amenity name
                              checked={selectedCheckboxes.includes("shower")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Shower
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="soap" // This should match the amenity name
                              checked={selectedCheckboxes.includes("soap")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Soap
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="toothpaste" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "toothpaste"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Toothbrush and toothpaste (on request)
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="towels" // This should match the amenity name
                              checked={selectedCheckboxes.includes("towels")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Towels
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdAccessible size={18} /> Bedroom
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="conditioning" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "conditioning"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Air conditioning
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdAccessible size={18} /> Internet
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="wifi" // This should match the amenity name
                              checked={selectedCheckboxes.includes("wifi")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Free WiFi
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="internet" // This should match the amenity name
                              checked={selectedCheckboxes.includes("internet")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Free wired Internet
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex col-7">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdDone size={18} /> more
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="housekeeping" // This should match the amenity name
                              checked={selectedCheckboxes.includes(
                                "housekeeping"
                              )}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Daily housekeeping
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="chargers" // This should match the amenity name
                              checked={selectedCheckboxes.includes("chargers")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Electrical adapters/chargers
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="workspace" // This should match the amenity name
                              checked={selectedCheckboxes.includes("workspace")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Laptop workspace
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="garden" // This should match the amenity name
                              checked={selectedCheckboxes.includes("garden")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            View - garden
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="closet" // This should match the amenity name
                              checked={selectedCheckboxes.includes("closet")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Wardrobe or closet
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
                            Parking
                          </label>
                        </li>
                      </ui>
                    </div>
                    <div className="d-flex col-5">
                      <ui style={{ listStyle: "none" }}>
                        <p
                          style={{
                            textAlign: "",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            color: "",
                            fontWeight: "600",
                          }}
                          className="m-0 my-2"
                        >
                          <MdIcons.MdAccessible size={18} /> Outdoor space
                        </p>
                        <li>
                          <label>
                            <input
                              type="checkbox"
                              name="balcony" // This should match the amenity name
                              checked={selectedCheckboxes.includes("balcony")}
                              onChange={handleCheckboxChange}
                            ></input>{" "}
                            Balcony
                          </label>
                        </li>
                      </ui>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex flex-row gap-5 my-3 justify-content-center">
            <button
              onClick={closeModalAdd}
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
              onClick={handleAddRoom}
              method="POST"
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
        </Modal.Body>
      </Modal>

      <Modal show={isEditModalOpen} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hotelRooms.find((room) => room.roomId === roomId) ? (
            <div>
              <form>
                <input
                  type="hidden"
                  name="roomId"
                  value={roomId}
                  onChange={handleEditRoomId}
                />
                <div
                  className="d-flex flex-column overflow-y-scroll mx-2"
                  style={{ height: "32rem", width: "29rem" }}
                >
                  <div className="d-flex flex-column mx-3">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row gap-5">
                        <label style={{ fontWeight: "600" }}>
                          Room Type
                          <br />
                          <select
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                            name="roomType" // Set a common name for the select element
                          >
                            <option value="Deluxe Double Room">
                              Deluxe Double Room
                            </option>
                            <option value="Deluxe Single Room">
                              Deluxe Single Room
                            </option>
                          </select>
                        </label>
                        <label style={{ fontWeight: "600" }}>
                          Occupancy
                          <br />
                          <input
                            type="number"
                            name="occupancy"
                            placeholder={rooms.occupancy}
                            value={roomData.occupancy}
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
                      <div className="d-flex flex-row gap-5">
                        <label style={{ fontWeight: "600" }}>
                          Price
                          <br />
                          <input
                            type="number"
                            name="price"
                            placeholder={rooms.price}
                            value={roomData.price}
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                        <label style={{ fontWeight: "600" }}>
                          Availability
                          <br />
                          <input
                            type="boolean"
                            name="availability"
                            placeholder={rooms.availability}
                            value={roomData.availability}
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
                      <div className="d-flex flex-row gap-5">
                        <label style={{ fontWeight: "600" }}>
                          No of beds
                          <br />
                          <input
                            type="number"
                            name="noOfBeds"
                            placeholder={rooms.noOfBeds}
                            value={roomData.noOfBeds}
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                        <label style={{ fontWeight: "600" }}>
                          Room Size
                          <br />
                          <input
                            type="text"
                            name="roomSize"
                            placeholder={`${rooms.roomSize}. sq ft`}
                            value={roomData.roomSize}
                            onChange={(e) => {
                              inputRoomdata(e.target.name, e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
                      <label style={{ fontWeight: "600" }}>
                        Description
                        <br />
                        <input
                          style={{ height: "6rem", width: "26.25rem" }}
                          type="text"
                          name="description"
                          placeholder={rooms.description}
                          value={roomData.description}
                          onChange={(e) => {
                            inputRoomdata(e.target.name, e.target.value);
                          }}
                        ></input>
                      </label>
                      <label style={{ fontWeight: "600" }}>
                        Policies
                        <br />
                        <textarea
                          style={{ height: "6rem", width: "26.25rem" }}
                          name="policies"
                          value={roomData.policies.join("\n")} // Join the list into a string with newline separators
                          onChange={(e) => {
                            const policies = e.target.value.split("\n"); // Split the input by newlines to create a list
                            inputRoomdata(e.target.name, policies);
                          }}
                        ></textarea>
                      </label>
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
                      Room amenities
                    </p>
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Accessibility
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Access via
                                exterior corridors
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Wheelchair
                                accessible
                              </label>
                            </li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Bathroom
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Free toiletries
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Hair dryer
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Rainfall
                                showerhead
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Shampoo
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Shower
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Soap
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Toothbrush and
                                toothpaste (on request)
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Towels
                              </label>
                            </li>
                          </ui>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Bedroom
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Air conditioning
                              </label>
                            </li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Internet
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Free WiFi
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Free wired
                                Internet
                              </label>
                            </li>
                          </ui>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2">
                        <div className="d-flex col-7">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdDone size={18} /> more
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Daily
                                housekeeping
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Electrical
                                adapters/chargers
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Laptop workspace
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> View - garden
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Wardrobe or
                                closet
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox"></input> Parking
                              </label>
                            </li>
                          </ui>
                        </div>
                        <div className="d-flex col-5">
                          <ui style={{ listStyle: "none" }}>
                            <p
                              style={{
                                textAlign: "",
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                color: "",
                                fontWeight: "600",
                              }}
                              className="m-0 my-2"
                            >
                              <MdIcons.MdAccessible size={18} /> Outdoor space
                            </p>
                            <li>
                              <label>
                                <input type="checkbox"></input> Balcony
                              </label>
                            </li>
                          </ui>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button
                  onClick={closeModalEdit}
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
                  method="POST"
                  onClick={handleEditRoom}
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
          ) : (
            <p>No room found for roomId: {roomId}</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AboutHotel;
