import React, { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import * as Icon from "react-bootstrap-icons";
import "./../../styles/hotel/our-hotel.css";
import room1 from "./../../assets/images/room-image1.png";
import room2 from "./../../assets/images/room-image2.png";
import room3 from "./../../assets/images/room-image3.png";

const OurHotel = () => {
  return (
        <div className="d-flex flex-column gap-2 w-100">
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
                Add Rooms
              </p>
              <Icon.PlusSquareFill
                className="my-2"
                size={25}
                style={{ color: "#023047;" }}
              />
            </div>
            <div className="search d-none d-lg-flex d-md-flex flex-row col-lg-2 col-md-7 col-3 gap-2">
              <input placeholder="Search"></input>
              <Icon.SearchHeartFill size={22} style={{color:"#aaa"}} class="fa fa-search my-1"/>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-column flex-lg-row gap-2 col-lg-12 col-md-12 col-12 justify-content-lg-evenly">
            <div
              className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
              style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
            >
              <img className="img-fluid" src={room1}></img>
              <div className="d-flex flex-column justify-content-evenly">
                <div className="d-flex flex-column align-items-center">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "#969696",
                      fontWeight: "600",
                    }}
                    className="m-0 my-1"
                  >
                    Available rooms - 5
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    Single bed room
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    <span
                      style={{
                        color: "#969696",
                        textDecorationLine: "line-through",
                      }}
                    >
                      $423
                    </span>
                    <span style={{ color: "#E34A4A" }}> $300</span>
                  </p>
                </div>
                <div className="d-flex justify-content-end me-3 my-2">
                  <Icon.PencilSquare size={25} />
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
              style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
            >
              <img className="img-fluid" src={room2}></img>
              <div className="d-flex flex-column justify-content-evenly">
                <div className="d-flex flex-column align-items-center">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "#969696",
                      fontWeight: "600",
                    }}
                    className="m-0 my-1"
                  >
                    Available rooms - 2
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    Double bed room
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    <span
                      style={{
                        color: "#969696",
                        textDecorationLine: "line-through",
                      }}
                    >
                      $550
                    </span>
                    <span style={{ color: "#E34A4A" }}> $500</span>
                  </p>
                </div>
                <div className="d-flex justify-content-end me-3">
                  <Icon.PencilSquare size={25} />
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column gap-3 mx-lg-0 mx-md-5 mx-1 col-lg-3 col-md-10 col-11 shadow-lg"
              style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}
            >
              <img className="img-fluid" src={room3}></img>
              <div className="d-flex flex-column justify-content-evenly">
                <div className="d-flex flex-column align-items-center">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "#969696",
                      fontWeight: "600",
                    }}
                    className="m-0 my-1"
                  >
                    Available rooms - 4
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    Deluxe room
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                    className="m-0 my-1"
                  >
                    <span
                      style={{
                        color: "#969696",
                        textDecorationLine: "line-through",
                      }}
                    >
                      $549
                    </span>
                    <span style={{ color: "#E34A4A" }}> $499</span>
                  </p>
                </div>
                <div className="d-flex justify-content-end me-3">
                  <Icon.PencilSquare size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex d-md-flex justify-content-end my-md-5 my-4 me-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <Icon.ChevronLeft />
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    40
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <Icon.ChevronRight />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  );
};

export default OurHotel;