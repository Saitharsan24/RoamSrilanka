import React, { Component } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";
import "./../styles/updatepack.css";
import StarRating from "../components/Rating";

const HPUpdatePackage3 = () => {
  return (
    <div className="d-flex flex-column">
      <Headeruser />
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        <Sidebar />
        <div
          style={{}}
          className="d-flex gap-3 w-100 align-items-center justify-content-around"
        >
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
            <p
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-3"
            >
              Package Information
            </p>
            {/* <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("./../assets/images/FirstProgressBar.png")}
              ></img>
            </div> */}
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <div className="d-flex flex-column flex-lg-row justify-content-evenly m-2 gap-3">
                    <label>
                      Type
                      <input className="p-2" readOnly></input>
                    </label>
                    <label>
                      Days
                      <input className="p-2" readOnly></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Amount
                      <input className="p-2" readOnly></input>
                    </label>
                    <label>
                      Places:
                      <input className="p-2" readOnly></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column flex-lg-row justify-content m-2 gap-3">
                    <div className="col-6">
                      <p>Tour Guide</p>
                    </div>
                    <div className="col-6">
                      <p>Transportation</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-lg-row justify-content m-2 gap-3">
                    <div className="col-6">
                      <p>Hotel Type</p>
                    </div>
                    <div className="col-6">
                      <StarRating />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between m-2">
                  <button className="btn-send" type="submit">
                    <Icon.ChevronLeft
                      style={{ marginBottom: "5px", fontSize: "17px" }}
                    />{" "}
                    Back
                  </button>
                  <button className="btn-send" type="submit">
                    Send to Admin{" "}
                    <Icon.ChevronRight
                      style={{ marginBottom: "5px", fontSize: "17px" }}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPUpdatePackage3;
