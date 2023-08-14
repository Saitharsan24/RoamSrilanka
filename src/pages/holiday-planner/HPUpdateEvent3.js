import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";
import DragDropFile from "../../components/file-upload";

const HPUpdateEvent3 = () => {
  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12 "
    //   >
    //     <Sidebar />
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around mt-4">
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
            <h1
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-3"
            >
              Event Information
            </h1>
            <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("../../assets/images/3rd Progress Bar.png")}
              ></img>
            </div>
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                    <label>
                      Name:
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Perahera"
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Days:
                      <input
                        className="p-2"
                        type="number"
                        placeholder="3 Days"
                        readOnly
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column justify-content-center m-2 gap-3">
                    <label>
                      Date:
                      <input
                        className="p-2"
                        placeholder="21/08/2023"
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Location:
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Kandy, Sri Lanka"
                        readOnly
                      ></input>
                    </label>
                    <label >
                      Image:
                      <div className="d-flex justify-content-center w-100">
                        <DragDropFile />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <button className="btn-send" type="submit">
                    Back
                  </button>
                  <button className="btn-send" type="submit">
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default HPUpdateEvent3;
