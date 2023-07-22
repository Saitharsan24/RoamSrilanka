import React from "react";
import HotelSidebar from "../components/hotel-sidebar";
import DragDropFile from "../components/file-upload";
import Header from "../components/Header";
import * as Icon from "react-bootstrap-icons";

const OurHotel = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div
        className="d-flex flex-row col-12"
        style={{ backgroundColor: "#F4F4F5" }}
      >
        <HotelSidebar />
        <div className="d-flex flex-column w-100 gap-3">
          <div className="d-flex flex-column flex-md-column flex-lg-row gap-3 align-items-center justify-content-evenly mt-2">
            <div
              className="d-flex flex-column col-10 col-lg-3 col-md-7 column-gap-5 align-items-center p-3"
              style={{ borderRadius: "20px", backgroundColor: "#EAEAF2" }}
            >
              <div className="d-flex flex-row gap-3 align-items-center ">
                <Icon.Coin style={{ fontSize: "22px", color: "#7166F9" }} />
                <p
                  style={{
                    fontSize: "18px",
                    color: "#ACACAC",
                    fontFamily: "Poppins",
                  }}
                  className="m-0"
                >
                  Cost per Room
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p style={{ fontSize: "30px" }}>
                  <b>$198k</b>
                </p>
              </div>
              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-row">
                  <Icon.ArrowUp
                    style={{ fontSize: "22px", color: "#00B087" }}
                  />
                  <p style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                    <span style={{ color: "#00B087" }}>37.8%</span> this month
                  </p>
                </div>
                <div>
                  <Icon.PencilSquare style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column col-10 col-lg-3 col-md-7 column-gap-5 align-items-center p-3"
              style={{ borderRadius: "20px", backgroundColor: "#EAEAF2" }}
            >
              <div className="d-flex flex-row gap-3 align-items-center ">
                <Icon.Coin style={{ fontSize: "22px", color: "#7166F9" }} />
                <p
                  style={{
                    fontSize: "18px",
                    color: "#ACACAC",
                    fontFamily: "Poppins",
                  }}
                  className="m-0"
                >
                  Cost per Room
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p style={{ fontSize: "30px" }}>
                  <b>$198k</b>
                </p>
              </div>
              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-row">
                  <Icon.ArrowUp
                    style={{ fontSize: "22px", color: "#00B087" }}
                  />
                  <p style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                    <span style={{ color: "#00B087" }}>37.8%</span> this month
                  </p>
                </div>
                <div>
                  <Icon.PencilSquare style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-column col-10 col-lg-3 col-md-7 column-gap-5 align-items-center p-3"
              style={{ borderRadius: "20px", backgroundColor: "#EAEAF2" }}
            >
              <div className="d-flex flex-row gap-3 align-items-center ">
                <Icon.Coin style={{ fontSize: "22px", color: "#7166F9" }} />
                <p
                  style={{
                    fontSize: "18px",
                    color: "#ACACAC",
                    fontFamily: "Poppins",
                  }}
                  className="m-0"
                >
                  Cost per Room
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p style={{ fontSize: "30px" }}>
                  <b>$198k</b>
                </p>
              </div>
              <div className="d-flex flex-row gap-5">
                <div className="d-flex flex-row">
                  <Icon.ArrowUp
                    style={{ fontSize: "22px", color: "#00B087" }}
                  />
                  <p style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                    <span style={{ color: "#00B087" }}>37.8%</span> this month
                  </p>
                </div>
                <div>
                  <Icon.PencilSquare style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column">
          <div className="d-flex flex-column align-items-center">
            <DragDropFile />
          </div>
          </div>
          {/* <button className="p-2" style={{width:"20rem", backgroundColor:"#4C95EB"}}>Upload Files</button> */}
        </div>
      </div>
    </div>
  );
};

export default OurHotel;
