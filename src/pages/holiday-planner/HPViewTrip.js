import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";

const HPViewTrip = () => {
  const navigate = useNavigate();
  return (
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
        <div className="d-lg-flex d-md-flex d-flex flex-lg-row justify-content-between pack">
            <h2 className="m-2 justify-content-center">Trips Information</h2>
            {/* <button
                className="change_pic col-4"
                style={{ height: "3rem", width: "Auto" }}
              >
                Message to x
              </button> */}
              <Icon.ChatLeftHeartFill className="col-2" size={40} color="#004577"/>
          </div>
          <div className="d-flex flex-column flex-lg-row m-2 gap-3">
            <form className="pack">
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label style={{border:'none'}}>
                  Tourist Name:
                  <input className="p-2" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                  Package Name:
                  <input className="p-2" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Status:
                  <input className="p-2" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                  From Date:
                  <input className="p-2" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                  To Date:
                  <input className="p-2" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
              </div>
              {/* <div className="d-flex flex-column flex-row justify-content-justify m-2 gap-3">
                <label>
                  Location:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                  Hotel:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
              </div> */}
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                Location:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                Hotel:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Driver Name:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                <label>
                  Guide Name:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-row justify-content-justify m-2 gap-3">
                <label>
                  Description:
                  <input className="p-2" type="text" style={{border:'none', backgroundColor:"#F8F8FF"}} readOnly></input>
                </label>
                </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default HPViewTrip;
