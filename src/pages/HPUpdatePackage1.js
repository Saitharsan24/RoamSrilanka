import React, { Component } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/Rating";
import "./../styles/updatepack.css";

const HPUpdatePackage1 = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column">
      <Headeruser />
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        <Sidebar />
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
            <p
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-2"
            >
              New Package
            </p>
            {/* <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("./../assets/images/FirstProgressBar.png")}
              ></img>
            </div> */}
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Type
                      <select
                        style={{
                          color: "grey",
                        }}
                        className="p-2 form-select form-select-lg"
                      >
                        <option style={{ fontFamily: "Roboto" }} selected>
                          Type of the Package
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </label>
                  </div>
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                    <label>
                      Amount
                      <input
                        className="p-2"
                        type="number"
                        placeholder="Amount of the Package"
                      ></input>
                    </label>
                    <label>
                      Days
                      <input
                        className="p-2"
                        type="number"
                        placeholder="Amount of the Days"
                      ></input>
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
                <div className="d-flex flex-row justify-content-between mx-2">
                  <button className="btn-cancel" type="submit">
                    Cancel
                  </button>
                  <button
                    className="btn-next"
                    onClick={() => navigate("/hpupdatepackage2")}
                    type="submit"
                  >
                    Next{" "}
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

export default HPUpdatePackage1;
