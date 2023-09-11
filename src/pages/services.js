import React, { Component } from "react";
import "../styles/services.css";
import ser_1 from "../assets/images/ser_1.png";
import map from "../assets/images/Vector.png";
import * as Icon from "react-bootstrap-icons";
import ser_2 from "../assets/images/ser_2.png";
import ser_3 from "../assets/images/ser_3.png";
import vector_2 from "../assets/images/Vector2.png";
import car from "../assets/images/car.png";
import ser_4 from "../assets/images/ser_4.png";
import backpack from "../assets/images/backpack 1.png";

function Services() {
  return (
    <React.Fragment>
      <div className="top">
        <p className="text-white text-center text_1 align-middle ">Services</p>
      </div>
      <div className="ser-body ">
        <p className="ser_title text-center">Home / Services</p>
        <p className=" text-center ser_sm_title">
          {" "}
          <span className="sub">What</span> you will get{" "}
          <span className="sub"> with us? </span>{" "}
        </p>
      </div>
      <div className=" total d-flex flex-column align-content-center m-auto">
        <div className=" element d-flex flex-column flex-md-column flex-lg-row justify-content-center gap-5">
          <img className="img_1 img-fluid " src={ser_1}></img>
          <div className="d-flex flex-column gap-3 align-content-center justify-content-center">
            <img className="img_2 img-fluid" src={map}></img>
            <p className="text-center P1">Trip Planning</p>
            <p className="text-center P2">
              Our trip planning services are designed to take the hassle out of
              organizing your next adventure.{" "}
            </p>
            <p className=" text-end P3">
              learn more
              <Icon.ArrowRight size={15} color="#DB163A" />
            </p>
          </div>
        </div>

        <div className=" element d-flex flex-column  flex-md-column flex-lg-row-reverse justify-content-center gap-5">
          <img className="img_1 img-fluid " src={ser_2}></img>
          <div className="d-flex flex-column gap-3 align-content-center justify-content-center">
            <img className="img_2 img-fluid" src={vector_2}></img>
            <p className="text-center P1">Tour Guide</p>
            <p className="text-center P2">
              Make the most of your travel experience with our professional
              guide hiring service.{" "}
            </p>
            <p className=" text-end P3">
              learn more
              <Icon.ArrowRight size={15} color="#DB163A" />
            </p>
          </div>
        </div>

        <div className=" element d-flex flex-column flex-md-column flex-lg-row justify-content-center gap-5">
          <img className="img_1 img-fluid " src={ser_3}></img>
          <div className="d-flex flex-column gap-3 align-content-center justify-content-center">
            <img className="img_2 img-fluid" src={car}></img>
            <p className="text-center P1">Vehicle Booking</p>
            <p className="text-center P2">
              Make the most of your travel experience with our professional
              guide hiring service.{" "}
            </p>
            <p className=" text-end P3">
              learn more
              <Icon.ArrowRight size={15} color="#DB163A" />
            </p>
          </div>
        </div>

        <div className=" element d-flex flex-column flex-md-column flex-lg-row-reverse justify-content-center gap-5">
          <img className="img_1 img-fluid " src={ser_4}></img>
          <div className="d-flex flex-column gap-3 align-content-center justify-content-center">
            <img className="img_2 img-fluid" src={backpack}></img>
            <p className="text-center P1">Rent Accessories</p>
            <p className="text-center P2">
              Traveling light but still want to make the most of your
              adventures? Our accessories renting service has got you covered.{" "}
            </p>
            <p className=" text-end P3">
              learn more
              <Icon.ArrowRight size={15} color="#DB163A" />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
