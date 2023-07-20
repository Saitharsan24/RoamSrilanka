import React from "react";
import HotelSidebar from "../components/hotel-sidebar";
import "./../styles/hotel-dashboard.css";
import Header from "../components/Header";
import * as Icon from "react-bootstrap-icons";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import PieChart from "../components/pie-chart";

const HotelDashboard = () => {
  return (
    <div style={{width:"-webkit-fill-available", backgroundColor: "#ECECEC" }}>
      <Header />
      <div className="d-flex flex-row col-12 column-gap-3">
        <HotelSidebar />
        <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center p-4 justify-content-evenly gap-5">
          <div className="d-flex flex-column col-6 row-gap-5 mt-2">
            <div style={{ width: "100%" }}>
              <input
                style={{ width: "90%", backgroundColor: "#ECECEC" }}
                className="p-1 occupation"
                type="text"
                placeholder="Search hotel occupants"
              ></input>
              <Icon.Search style={{ color: "#087592" }} />
            </div>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Incoming requests</b>
              </p>
              <div className="d-flex flex-column flex-md-row flex-lg-row gap-5 justify-content-evenly">
                <div
                  className="d-flex flex-column flex-md-row flex-lg-row p-2"
                  style={{width:"-webkit-fill-available", borderRadius: "1rem", backgroundColor: "#24628F" }}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center  p-1">
                    <img
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                        width: "40px",
                        height: "40px"
                      }}
                    ></img>
                  </div>
                  <div
                    style={{ color: "white" }}
                    className="d-flex flex-column col-8 align-items-center justify-content-center "
                  >
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Jonathan D.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Tourist
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column flex-md-row flex-lg-row"
                  style={{width:"-webkit-fill-available", borderRadius: "1rem", backgroundColor: "#ffff" }}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center  p-1">
                    <img
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                        width: "40px",
                        height: "40px"
                      }}
                    ></img>
                  </div>
                  <div className="d-flex flex-column col-8 align-items-center justify-content-center">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Jonathan D.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Holiday Planner
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "1rem" }}>
                <b>Current occupants</b>
              </p>
              <div className="d-flex flex-column row-gap-3">
              <div
                  className="d-flex flex-column flex-md-column flex-lg-row column-gap-6 p-4 justify-content-evenly"
                  style={{ borderRadius: "1rem", backgroundColor: "white" }}
                >
                  <img
                    src={require("./../assets/img/DQ.jpeg")}
                    style={{
                      borderRadius: "5rem",
                      width: "15%",
                    }}
                  ></img>
                  <div className="d-flex flex-column justify-content-evenly ">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Lilliana M.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                  <hr style={{ border: "1px solid Black" }} />
                  <div className="d-flex flex-column justify-content-evenly align-items-center">
                    <p className="m-0" style={{ fontSize: "1.5rem" }}>
                      <b>$150</b>
                    </p>
                    <p
                      className="m-0"
                      style={{ color: "#4CAF50", fontSize: "0.75rem" }}
                    >
                      <b>Paid</b>
                    </p>
                  </div>
                </div>

                <div
                  className="d-flex flex-column flex-md-column flex-lg-row column-gap-6 p-4 justify-content-evenly"
                  style={{ borderRadius: "1rem", backgroundColor: "white" }}
                >
                  <img
                    src={require("./../assets/img/DQ.jpeg")}
                    style={{
                      borderRadius: "5rem",
                      width: "15%",
                    }}
                  ></img>
                  <div className="d-flex flex-column justify-content-evenly ">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Lilliana M.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                  <hr style={{ border: "1px solid Black" }} />
                  <div className="d-flex flex-column justify-content-evenly align-items-center">
                    <p className="m-0" style={{ fontSize: "1.5rem" }}>
                      <b>$150</b>
                    </p>
                    <p
                      className="m-0"
                      style={{ color: "#4CAF50", fontSize: "0.75rem" }}
                    >
                      <b>Paid</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column col-3 justify-content-evenly gap-4">
            <div className="d-flex">
              <Calendar style={{ width: "auto", height: "auto" }} />
            </div>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Analytics</b>
              </p>
              <div className="d-flex flex-row gap-4">
                {/* <PieChart></PieChart> */}
                <div className="d-flex flex-column justify-content-center">
                  <p className="occup_list" style={{ fontSize: "0.75rem" }}>
                    Occupancy rate: 75%
                  </p>
                  <p className="occup_list" style={{ fontSize: "0.75rem" }}>
                    Vacancy: 25%
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Monthly Revenue</b>
              </p>
              <div className="d-flex flex-row gap-4">
                <img></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;
