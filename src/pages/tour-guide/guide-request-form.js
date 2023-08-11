import React from "react";
import * as Icon from "react-bootstrap-icons";

const GuideRequestForm = () => {
  return (
        <div className="d-flex flex-column w-100 align-items-center">
          <div
            style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
            className="d-flex flex-column col-lg-10 col-md-11 col-11 shadow-lg my-5 gap-3"
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
                  Request
                </p>
                <Icon.ChatLeftTextFill style={{ color: "#004577" }} size={30} />
              </div>
              <div className="d-flex flex-lg-row flex-md-row flex-column col-12 gap-lg-0 gap-md-0 gap-3">
                <div className="d-flex flex-column gap-3 col-lg-6 col-md-6 col-12 align-items-center">
                  <div className="d-flex flex-column col-10">
                    <label style={{ fontFamily: "Barlow", fontWeight: "bold" }}>
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
                    <label style={{ fontFamily: "Barlow", fontWeight: "bold" }}>
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
                    <label style={{ fontFamily: "Barlow", fontWeight: "bold" }}>
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
                        height: "12rem",
                      }}
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                </div>
                <div className="d-flex flex-column gap-3 col-lg-6 col-md-6 col-12  align-items-center">
                  <div className="d-flex flex-column col-10">
                    <label style={{ fontFamily: "Barlow", fontWeight: "bold" }}>
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
                    <label style={{ fontFamily: "Barlow", fontWeight: "bold" }}>
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
                          height: "12rem",
                        }}
                        type="text"
                        placeholder=""
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row flex-lg-row gap-lg-5 gap-md-5 gap-2 mx-lg-5 mx-md-5 mx-4 justify-content-md-end justify-content-lg-end my-3">
                <button
                  className="p-2"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #00B087",
                    backgroundColor: "rgba(22, 192, 152, 0.38)",
                    color: "#008767",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    width: "6rem",
                  }}
                >
                  Accept
                </button>
                <button
                  className="p-2"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #DF0404",
                    backgroundColor: "rgba(255, 197, 197, 0.38)",
                    color: "#DF0404",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                    width: "6rem",
                  }}
                >
                  Reject
                </button>
              </div>
            </form>
          </div>
        </div>
  );
};

export default GuideRequestForm;
