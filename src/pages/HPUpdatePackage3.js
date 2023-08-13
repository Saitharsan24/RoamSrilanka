import React, { useState } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";
import "./../styles/updatepack.css";
import StarRating from "../components/Rating";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const HPUpdatePackage3 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleToggleChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggleChange2 = () => {
    setIsChecked2(!isChecked2);
  };
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
            <h1
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-3"
            >
              Package Information
            </h1>
            {/* <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("./../assets/images/FirstProgressBar.png")}
              ></img>
            </div> */}
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                    <label>
                      Type:
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Money Based"
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
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Amount
                      <input
                        className="p-2"
                        type="number"
                        placeholder="25000"
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Places:
                      <input
                        className="p-2"
                        type="text"
                        placeholder=""
                        readOnly
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column flex-lg-row justify-content m-2 gap-3">
                    <div className="col-6">
                      <p>
                        Tour Guide{" "}
                        <Toggle
                          checked={isChecked1}
                          onChange={handleToggleChange1}
                        />
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        Transportation{" "}
                        <Toggle
                          checked={isChecked2}
                          onChange={handleToggleChange2}
                        />
                      </p>
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
                <div className="d-flex flex-row justify-content-between m-2">
                  <button className="btn-send" type="submit">
                    <Icon.ChevronLeft
                      style={{ marginBottom: "5px", fontSize: "17px" }}
                    />{" "}
                    Back
                  </button>
                  <button className="btn-send" type="submit">
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
