import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./../../styles/guide/guide-profile.css";
import DQ from "./../../assets/img/DQ.jpeg";
import * as Icon from "react-bootstrap-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const HotelProfile = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="setting-guide d-flex flex-column flex-lg-row flex-md-column w-100">
      <div className="d-flex flex-lg-row flex-md-column flex-column col-lg-12 col-md-12 my-md-3 gap-3 align-items-start w-100">
        <Tabs
          defaultActiveKey="account"
          id="uncontrolled-tab-example"
          // className="setting-tab mb-3 bg-white tab flex-column "
        >
          <Tab eventKey="account" title={
              <a>
                <button
                  className="p-2 w-100"
                  style={{
                    boxShadow: "2px 4px 7px 0px rgba(0, 0, 0, 0.08)",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#FFF",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "#004577",
                      fontFamily: "Barlow",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                    className="m-0"
                  >
                    Account Setting
                  </p>
                  <p
                    style={{
                      color: "#DB163A",
                      fontFamily: "Barlow",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                    className="m-0"
                  >
                    Details about your Peronal information
                  </p>
                </button>
              </a>
            }
          >
            <div className="d-flex flex-column col-lg-12 col-md-12 gap-4">
              <div
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "10px",
                  boxShadow: "2px 4px 7px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="d-flex flex-row gap-lg-5 p-2 justify-content-md-center"
              >
                <div className="d-flex flex-column col-2 align-items-center">
                  <img
                    style={{
                      width: "89px",
                      height: "89px",
                      borderRadius: "40px",
                    }}
                    className="img-fluid"
                    src={DQ}
                  ></img>
                  <div className="d-flex flex-column align-items-center">
                    <p
                      className="m-0"
                      style={{
                        color: "#DB163A",
                        fontFamily: "Barlow",
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                    >
                      Rating
                    </p>
                    <p
                      className="m-0"
                      style={{
                        color: "#004577",
                        fontFamily: "Cabin",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      4.9
                    </p>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={28}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p
                      className="m-0"
                      style={{
                        color: "#DB163A",
                        fontFamily: "Cabin",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      1,580 Ratings
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column col-9">
                  <div className="d-flex flex-row justify-content-between">
                    <p
                      className="m-0"
                      style={{
                        color: "#004577",
                        fontFamily: "Barlow",
                        fontWeight: "600",
                        fontSize: "32px",
                      }}
                    >
                      Manoharan Keethapriya
                    </p>
                    <button
                      className="my-2"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#004577",
                        boxShadow:
                          "0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        height: "35px",
                        color: "#FFF",
                        fontFamily: "Barlow",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      Change profile picture
                    </button>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#DB163A",
                        fontFamily: "Barlow",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Bio
                    </p>
                    <input
                      className="p-2"
                      style={{
                        height: "100px",
                        backgroundColor: "#F1F1F2",
                        borderRadius: "10px",
                        border: "none",
                      }}
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
              className="d-flex flex-column my-lg-3 shadow-lg gap-3 p-3"
            >
              <form>
                <p
                  className="m-0"
                  style={{
                    color: "#004577",
                    fontFamily: "Barlow",
                    fontWeight: "600",
                  }}
                >
                  User Information
                </p>
                <div className="d-flex flex-column gap-3 p-2">
                  <div className="d-flex flex-row col-12 ms-3 ">
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex col-12 ms-3">
                    <div className="d-flex flex-column gap-1 col-12">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "95%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-12 ms-3 ">
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-12 ms-3 ">
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Name
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="John"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-4 justify-content-end me-3 my-2">
                    <button
                      className="p-1"
                      style={{
                        backgroundColor: "#004577",
                        boxShadow:
                          " 0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        borderRadius: "5px",
                        color: "#FFF",
                        fontSize: "15px",
                      }}
                    >
                      Update Profile
                    </button>
                    <button
                      className="p-1"
                      style={{
                        backgroundColor: "#004577",
                        boxShadow:
                          " 0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        borderRadius: "5px",
                        color: "#FFF",
                        fontSize: "15px",
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Tab>

          <Tab
            eventKey="password"
            title={
              <a>
                <button
                  className="p-2 w-100"
                  style={{
                    boxShadow: "2px 4px 7px 0px rgba(0, 0, 0, 0.08)",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#FFF",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "#004577",
                      fontFamily: "Barlow",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                    className="m-0"
                  >
                    Change Password
                  </p>
                  <p
                    style={{
                      color: "#DB163A",
                      fontFamily: "Barlow",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                    className="m-0"
                  >
                    Change your account password
                  </p>
                </button>
              </a>
            }
          >
            <div className="d-flex flex-column col-lg-12 col-md-12  gap-4 my-md-3">
              <div
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: "10px",
                  boxShadow: "2px 4px 7px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="d-flex flex-row gap-lg-5 p-2 justify-content-md-center"
              >
                <div className="d-flex flex-column col-2 align-items-center">
                  <img
                    style={{
                      width: "89px",
                      height: "89px",
                      borderRadius: "40px",
                    }}
                    className="img-fluid"
                    src={DQ}
                  ></img>
                  <div className="d-flex flex-column align-items-center">
                    <p
                      className="m-0"
                      style={{
                        color: "#DB163A",
                        fontFamily: "Barlow",
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                    >
                      Rating
                    </p>
                    <p
                      className="m-0"
                      style={{
                        color: "#004577",
                        fontFamily: "Cabin",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      4.9
                    </p>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={28}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p
                      className="m-0"
                      style={{
                        color: "#DB163A",
                        fontFamily: "Cabin",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      1,580 Ratings
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column col-9">
                  <div className="d-flex flex-row justify-content-between">
                    <p
                      className="m-0"
                      style={{
                        color: "#004577",
                        fontFamily: "Barlow",
                        fontWeight: "600",
                        fontSize: "32px",
                      }}
                    >
                      Manoharan Keethapriya
                    </p>
                    <button
                      className="my-2"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#004577",
                        boxShadow:
                          "0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        height: "35px",
                        color: "#FFF",
                        fontFamily: "Barlow",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      Change profile picture
                    </button>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#DB163A",
                        fontFamily: "Barlow",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Bio
                    </p>
                    <input
                      className="p-2"
                      style={{
                        height: "100px",
                        backgroundColor: "#F1F1F2",
                        borderRadius: "10px",
                        border: "none",
                      }}
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#FFF", borderRadius: "10px" }}
              className="d-flex flex-column shadow-lg gap-3 p-3"
            >
              <form>
                <p
                  className="m-0"
                  style={{
                    color: "#004577",
                    fontFamily: "Barlow",
                    fontWeight: "600",
                  }}
                >
                  Change Password
                </p>
                <div className="d-flex flex-column gap-3 p-2">
                  <div className="d-flex col-12 ms-3">
                    <div className="d-flex flex-column gap-1 col-12">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        Current Password
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "45%",
                        }}
                        type="text"
                        placeholder="Enter Password"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-12 ms-3 ">
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        New Password
                      </label>
                      <input
                        className="p-2"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="Enter New Password"
                      ></input>
                    </div>
                    <div className="d-flex flex-column gap-1 col-6">
                      <label
                        style={{
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "bold",
                        }}
                      >
                        New Password
                      </label>
                      <input
                        className="p-2 col-10"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F1F1F2",
                          border: "none",
                          width: "90%",
                        }}
                        type="text"
                        placeholder="Again Enter New Password"
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex flex-row gap-4 justify-content-end me-3 my-2">
                    <button
                      className="p-1"
                      style={{
                        backgroundColor: "#004577",
                        boxShadow:
                          " 0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        borderRadius: "5px",
                        color: "#FFF",
                        fontSize: "15px",
                      }}
                    >
                      Discard
                    </button>
                    <button
                      className="p-1"
                      style={{
                        backgroundColor: "#004577",
                        boxShadow:
                          " 0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
                        borderRadius: "5px",
                        color: "#FFF",
                        fontSize: "15px",
                      }}
                    >
                      Change
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default HotelProfile;
