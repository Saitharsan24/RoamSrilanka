import React, { Component } from "react";
// import Headeruser from "../components/headerusers";
// import Sidebar from "../components/holidayplanner-sidebar";
//import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
// import "./../styles/updatepack.css";
// import profile from "../assets/images/profile.jpg";

const HPRequestDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column">
      {/* <Headeruser /> */}
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        {/* <Sidebar /> */}
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around">
          <div
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "15px",
              boxShadow:
                "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
            }}
            className="d-flex flex-column gap-3 col-6 p-5"
          >
            <div className="d-lg-flex d-md-flex d-flex flex-lg-row justify-content-between">
              {/* <img
                src={profile}
                className="object-fit-cover img-fluid col-3"
                style={{ borderRadius: "50%" }}
              ></img> */}
              <button
                className="change_pic col-4"
                style={{ height: "3rem", width: "Auto" }}
              >
                Message to Manoharan
              </button>
            </div>

            <div>
              <p className="name px-5 justify-content-center">
                Manoharan Keethapriya
              </p>
              <p className=" bio m-0 p-3">Bio</p>
              <div
                className="d-flex align-self-center p-3"
                style={{ borderRadius: "15px", backgroundColor: "#F1F1F2" }}
              >
                <p>
                  10 Lines Essay is considered one of the most enjoyable and
                  fun-filled experiences to express thoughts, enhance spoken and
                  written English Skills.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Request for :</p>
              </div>
              <div className="col-4 hp-req">
                <p>Package 01</p>
              </div>
              <button
                className=" change_pic col-4 flex-fill"
                style={{ height: "2rem" }}
              >
                View package
              </button>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Date :</p>
              </div>
              <div className="col-4 hp-req">
                <p>23/08/2023</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between mx-2">
              <button className="btn-cancel" type="submit">
                Reject
              </button>
              <button className="btn-next" type="submit">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPRequestDetails;
