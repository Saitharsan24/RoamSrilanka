import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";

const HPUpdatePackage2 = () => {
  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12 "
    //   >
    //     <Sidebar />
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
            <h1
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-2"
            >
              New Package
            </h1>
            <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("../../assets/images/2th Progress Bar.png")}
              ></img>
            </div>
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Places
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Places of the Package"
                      ></input>
                    </label>
                  
                    <label>
                      {" "}
                      <br />
                      <input
                        className="p-2"
                        
                        type="text"
                        placeholder="Added Places"
                      ></input>
                      
                    </label>
                    
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between mx-2">
                  <button className="btn-cancel" type="submit">
                    Cancel
                  </button>
                  <Link to="/holidayPlanner/plannerPackage3">
                  <button
                    className="btn-next"
                    type="submit"
                  >
                    Next{" "}
                    <Icon.ChevronRight
                      style={{ marginBottom: "5px", fontSize: "17px" }}
                    />
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default HPUpdatePackage2;
