import React, { Component } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";

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
            >
              Package Information
            </p>
            {/* <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("./../assets/images/FirstProgressBar.png")}
              ></img>
            </div> */}
            <form className="">
              <div className="d-flex flex-column gap-5">
                  <div className="d-flex flex-column justify-content-center m-2">
                    <div className="d-flex flex-column flex-lg-row justify-content-evenly m-2 gap-3">
                      <label
                        style={{
                          fontWeight: "400",
                          color: "#000",
                          fontFamily: "Roboto",
                          fontSize: "22px",
                        }}
                      >
                        Type
                        <input
                          style={{
                            width: "100%",
                            borderRadius: "7.983px",
                            border: "1.597px solid rgba(66, 80, 102, 0.40)",
                            boxShadow:
                              "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
                          }}
                          className="p-2"
                          readOnly
                        ></input>
                      </label>
                      <label
                        style={{
                          fontWeight: "400",
                          color: "#000",
                          fontFamily: "Roboto",
                          fontSize: "22px",
                        }}
                      >
                        Days
                        <input
                          style={{
                            width: "100%",
                            borderRadius: "7.983px",
                            border: "1.597px solid rgba(66, 80, 102, 0.40)",
                            boxShadow:
                              "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
                          }}
                          className="p-2"
                          readOnly
                        ></input>
                      </label>
                    </div>
                    <div className="d-flex flex-column justify-content-center m-2">
                      <label
                        style={{
                          fontWeight: "400",
                          color: "#000",
                          fontFamily: "Roboto",
                          fontSize: "22px",
                        }}
                      >
                        Amount
                        <input
                          style={{
                            width: "100%",
                            borderRadius: "7.983px",
                            border: "1.597px solid rgba(66, 80, 102, 0.40)",
                            boxShadow:
                              "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
                          }}
                          className="p-2"
                          readOnly
                        ></input>
                      </label>
                      <label
                        style={{
                          fontWeight: "400",
                          color: "#000",
                          fontFamily: "Roboto",
                          fontSize: "22px",
                        }}
                      >
                        Places:
                        <input
                          style={{
                            width: "100%",
                            borderRadius: "7.983px",
                            border: "1.597px solid rgba(66, 80, 102, 0.40)",
                            boxShadow:
                              "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
                          }}
                          className="p-2"
                          readOnly
                        ></input>
                      </label>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mx-2" >
                  <button
                    style={{
                        width: "10rem",
                        borderRadius: "8px",
                        border: "1px solid #004577",
                        backgroundColor: "#004577",
                        color: "#FFFFFF",
                        fontFamily: "Roboto",
                        fontSize: "20px",
                      }}
                    type="submit"
                  >
                    <Icon.ChevronLeft
                      style={{ marginBottom: "5px", fontSize: "17px" }}
                    />
                    {" "}Back
                  </button>
                  <button 
                    style={{
                      width: "10rem",
                      borderRadius: "8px",
                      border: "1px solid #004577",
                      backgroundColor: "#004577",
                      color: "#FFFFFF",
                      fontFamily: "Roboto",
                      fontSize: "20px",
                    }}
                    type="submit"
                  >
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
