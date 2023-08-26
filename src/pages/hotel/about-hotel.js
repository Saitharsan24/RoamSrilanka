import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import room1 from "./../../assets/images/room-image1.png";
import room2 from "./../../assets/images/room-image2.png";
import room3 from "./../../assets/images/room-image3.png";
import Modal from "react-bootstrap/Modal";
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as ImIcons from 'react-icons/im'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const AboutHotel = () => {
  const [isAllModalOpen, setIsAllModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModalSeeAll = () => {
    setIsAllModalOpen(true);
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

  const openModalEdit = () => {
    setIsEditModalOpen(true);
  };

  const closeModalEdit = () => {
    setIsEditModalOpen(false);
  };

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
              Located in Dambulla, 20 km from Sigiriya Rock, Sigiriya Kingdom
              Gate Dambulla provides accommodation with a garden, free private
              parking and a shared lounge.
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
              <Icon.AirplaneFill /> Colombo (CMB-Bandaranaike Intl.)
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
        <div className="d-flex flex-row justify-content-around">
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
                  Deluxe Double Room
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Wifi size={15} /> Free Wifi
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PSquareFill size={15} /> Parking included
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Textarea size={15} /> 276 sq ft
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PeopleFill size={15} /> Sleeps 2
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <MdIcons.MdHorizontalSplit size={15} /> 1 Queen bed
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
                  <div className="d-flex flex-column mx-4">
                    <p
                      className="m-0"
                      style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                      $452
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <span style={{ textDecoration: "line-through" }}>
                        $400
                      </span>{" "}
                      Total
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      Includes tax and fees
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between my-1 mx-2">
                  <Link onClick={openModalSeeAll}>
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
                  Deluxe Double Room
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Wifi size={15} /> Free Wifi
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PSquareFill size={15} /> Parking included
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Textarea size={15} /> 276 sq ft
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PeopleFill size={15} /> Sleeps 2
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <MdIcons.MdHorizontalSplit size={15} /> 1 Queen bed
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
                  <div className="d-flex flex-column mx-4">
                    <p
                      className="m-0"
                      style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                      $452
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <span style={{ textDecoration: "line-through" }}>
                        $400
                      </span>{" "}
                      Total
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      Includes tax and fees
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
                  Deluxe Double Room
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Wifi size={15} /> Free Wifi
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PSquareFill size={15} /> Parking included
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.Textarea size={15} /> 276 sq ft
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <Icon.PeopleFill size={15} /> Sleeps 2
                </p>
                <p className="m-0 mx-2" style={{ fontSize: "13px" }}>
                  <MdIcons.MdHorizontalSplit size={15} /> 1 Queen bed
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
                  <div className="d-flex flex-column mx-4">
                    <p
                      className="m-0"
                      style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                      $452
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      <span style={{ textDecoration: "line-through" }}>
                        $400
                      </span>{" "}
                      Total
                    </p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      Includes tax and fees
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between my-1 mx-2">
                  <Link onClick={openModalEdit}>
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
      </div>

      <Modal show={isAllModalOpen} onHide={closeModalSeeAll}>
        <Modal.Header closeButton>
          <Modal.Title>Room Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                Deluxe Double Room
              </p>
              <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                <Icon.Wifi size={15} /> Free Wifi
              </p>
              <p className="m-0 mx-2  my-1" style={{ fontSize: "13px" }}>
                <Icon.PSquareFill size={15} /> Parking included
              </p>
              <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                <Icon.Textarea size={15} /> 276 sq ft
              </p>
              <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                <Icon.PeopleFill size={15} /> Sleeps 2
              </p>
              <p className="m-0 mx-2 my-1" style={{ fontSize: "13px" }}>
                <MdIcons.MdHorizontalSplit size={15} /> 1 Queen bed
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
                    <label>
                      Room Name<br/><input type="text"></input>
                    </label>
                    <label>
                      Room Size<br/><input type="text"></input>
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      No of Sleeps<br/><input type="number"></input>
                    </label>
                    <label>
                      No of Beds<br/><input type="number"></input>
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
                            <input type="checkbox"></input> Access via exterior
                            corridors
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
                            <input type="checkbox"></input> Rainfall showerhead
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
                            <input type="checkbox"></input> Free wired Internet
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
                            <input type="checkbox"></input> Daily housekeeping
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
                            <input type="checkbox"></input> Wardrobe or closet
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
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button className="p-2" style={{borderRadius:"5px", backgroundColor:"rgba(73, 151, 207, 0.78)", border:"#fff", color:"#fff"}}>Cancel</button>
                <button className="p-2" style={{borderRadius:"5px", backgroundColor:"rgba(73, 151, 207, 0.78)", border:"#fff", color:"#fff"}}>Submit</button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={isEditModalOpen} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room Information</Modal.Title>
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
                    <label>
                      Room Name<br/><input type="text"></input>
                    </label>
                    <label>
                      Room Size<br/><input type="text"></input>
                    </label>
                  </div>
                  <div className="d-flex flex-row gap-5">
                    <label>
                      No of Sleeps<br/><input type="number"></input>
                    </label>
                    <label>
                      No of Beds<br/><input type="number"></input>
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
                            <input type="checkbox"></input> Access via exterior
                            corridors
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
                            <input type="checkbox"></input> Rainfall showerhead
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
                            <input type="checkbox"></input> Free wired Internet
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
                            <input type="checkbox"></input> Daily housekeeping
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
                            <input type="checkbox"></input> Wardrobe or closet
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
              <div className="d-flex flex-row gap-5 my-3 justify-content-center">
                <button className="p-2" style={{borderRadius:"5px", backgroundColor:"rgba(73, 151, 207, 0.78)", border:"#fff", color:"#fff"}}>Cancel</button>
                <button className="p-2" style={{borderRadius:"5px", backgroundColor:"rgba(73, 151, 207, 0.78)", border:"#fff", color:"#fff"}}>Submit</button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AboutHotel;
