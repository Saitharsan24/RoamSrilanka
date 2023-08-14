import React from "react";
import * as Icon from "react-bootstrap-icons";
import lotusTower from "./../../assets/images/lotusTower.png";

const GuideTripForm = () => {
  return (
        <div className="d-flex flex-column w-100">
          <div className="d-flex col-12 justify-content-lg-around justify-content-md-around">
            <div
              style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
              className="d-flex flex-column col-lg-10 col-md-10 col-11 shadow-lg my-5 gap-3"
            >
              <form>
                <div className="d-flex flex-row justify-content-between mx-4 my-4">
                  <p
                    className="m-0"
                    style={{
                      color: "#004577",
                      fontFamily: "Barlow",
                      fontWeight: "600",
                    }}
                  >
                    Information
                  </p>
                  <Icon.ChatLeftTextFill
                    style={{ color: "#004577" }}
                    size={30}
                  />
                </div>
                <div className="d-flex flex-column gap-3 gap-lg-0 gap-md-0 flex-md-row flex-lg-row col-12">
                  <div className="d-flex flex-column gap-3 col-12 col-md-6 col-lg-6 align-items-center">
                    <div className="d-flex flex-column col-10">
                      <label
                        style={{ fontFamily: "Barlow", fontWeight: "bold" }}
                      >
                        Name
                        <br />
                        <input
                          className="p-2 col-6"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="John"
                        ></input>
                      </label>
                    </div>
                    <div className="d-flex flex-row col-10 justify-content-between">
                      <label
                        style={{ fontFamily: "Barlow", fontWeight: "bold" }}
                      >
                        From
                        <br />
                        <input
                          className="p-2 col-4"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="12 Feb"
                        ></input>
                      </label>
                      <label
                        style={{ fontFamily: "Barlow", fontWeight: "bold" }}
                      >
                        To
                        <br />
                        <input
                          className="p-2 col-4"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="15 Feb"
                        ></input>
                      </label>
                    </div>
                    <div className="d-flex flex-column col-10">
                      <label>Tourist Request</label>
                      <input
                        className="p-2 col-6"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                    <div className="d-flex flex-column col-10">
                      <label>
                        Rating
                        <input
                          className="p-2 col-6"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="John"
                        ></input>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-3 col-12 col-md-6 col-lg-6 align-items-center">
                    <div className="d-flex flex-column col-10">
                      <label
                        style={{ fontFamily: "Barlow", fontWeight: "bold" }}
                      >
                        Email
                        <br />
                        <input
                          className="p-2 col-6"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="john@gmail.com"
                        ></input>
                      </label>
                    </div>
                    <div className="d-flex flex-column col-10">
                      <label
                        style={{ fontFamily: "Barlow", fontWeight: "bold" }}
                      >
                        Contact Number
                        <br />
                        <input
                          className="p-2 col-6"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                          }}
                          type="text"
                          placeholder="0771234567"
                        ></input>
                      </label>
                    </div>
                    <div className="d-flex flex-column col-10">
                      <label>
                        Tour Preferences
                        <br />
                        <input
                          className="p-2 col-6"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "#F1F1F2",
                            border: "none",
                            width: "100%",
                            height: "8rem",
                          }}
                          type="text"
                          placeholder=""
                        ></input>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column col-lg-11 col-md-11 col-10 mx-0 mx-lg-5 mx-md-3 my-3">
                    <label>Activity Update</label>
                    <div
                      style={{
                        backgroundColor: "#F1F1F2",
                        borderRadius: "5px",
                      }}
                      className="d-flex flex-column col-12 p-2"
                    >
                      <div className="d-flex flex-lg-row flex-md-column flex-column gap-2 justify-content-around my-3">
                        <div className="d-flex flex-column flex-md-row flex-lg-row gap-2">
                          <label>Location:</label>
                          <input
                            className="p-2"
                            style={{
                              borderRadius: "5px",
                              border: "none",
                              width: "80%",
                              height: "2rem",
                            }}
                            type="text"
                          ></input>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-row gap-2">
                          <label>Date:</label>
                          <input
                            className="p-2"
                            style={{
                              borderRadius: "5px",
                              border: "none",
                              width: "80%",
                              height: "2rem",
                            }}
                            type="date"
                          ></input>
                        </div>
                        <div className="d-flex flex-column flex-md-row flex-lg-row gap-2">
                          <label>Time:</label>
                          <input
                            className="p-2"
                            style={{
                              borderRadius: "5px",
                              border: "none",
                              width: "75%",
                              height: "2rem",
                            }}
                            type="time"
                          ></input>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center my-2">
                        <button
                          style={{
                            backgroundColor: "#004577",
                            boxShadow:
                              " 0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                            borderRadius: "10px",
                            color: "#FFF",
                            fontSize: "15px",
                          }}
                        >
                          + Update Activity
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column col-lg-11 col-md-11 col-10 mx-0 mx-lg-5 mx-md-3 my-3">
                    <label>
                      Review
                      <input
                        className="p-2 col-6"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "100%",
                          height: "7rem",
                        }}
                        type="text"
                        placeholder=""
                      ></input>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default GuideTripForm;
