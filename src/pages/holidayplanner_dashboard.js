import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";

function Holiday_dashboard() {
  return (
    <React.Fragment>
      <div className=" ">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <div
            className="d-flex col-12 gap-4 p-4 "
            style={{ backgroundColor: "#F4F4F5" }}
          >
            <div
              className=" d-flex col-2  flex-row h-25 align-items-center gap-3 p-2"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
            >
              <div className=" d-flex flex-column col-10">
                <p style={{ color: "#98A3B2", fontSize: "30px" }}>Packages</p>
                <p style={{ fontSize: "15px" }}>Total Packages - 25</p>
              </div>
              <div className="d-flex">
                <Icon.ChevronRight />
              </div>
            </div>
            <div
              className=" d-flex col-2  flex-row h-25 align-items-center gap-3 p-3"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
            >
              <div className=" d-flex flex-column justify-content-between ">
                <p style={{ color: "#98A3B2", fontSize: "28px" }}>
                  Update Events
                </p>
                <p style={{ fontSize: "15px" }}>Events of This Month - 7</p>
              </div>
              <div className=" d-flex">
              <Icon.ChevronRight />
              </div>
            </div>
            <div
              className=" d-flex col-2  flex-row h-25 align-items-center gap-3 p-2"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
            >
              <div className=" d-flex flex-column col-10">
                <p style={{ color: "#98A3B2", fontSize: "30px" }}>Reviews</p>
                <p style={{ fontSize: "15px" }}>New Reviews - 20</p>
              </div>
              <div className="d-flex">
                <Icon.ChevronRight />
              </div>
            </div>
            <div
              className=" d-flex col-2  flex-row h-25 align-items-center gap-3 p-3"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
            >
              <div className=" d-flex flex-column justify-content-between ">
                <p style={{ color: "#98A3B2", fontSize: "28px" }}>
                  Update Fairs
                </p>
                <p style={{ fontSize: "15px" }}>Total Fairs - 20</p>
              </div>
              <div className="d-flex">
              <Icon.ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Holiday_dashboard;
