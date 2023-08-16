import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import StarRating from "../../components/Rating";
import "../../styles/updatepack.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const HPUpdatePackage1 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleToggleChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggleChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12"
    //   >
    //     <Sidebar/>
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around ">
          <div
            style={{
             
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "15px",
              boxShadow:
                "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
            }}
            className="d-flex flex-column gap-3 col-6 p-5 mt-5 mb-5"
          >
            <h1
              style={{
                fontFamily: "Barlow",
                fontSize: "auto",
                fontWeight: "600",
              }}
              className="mx-2"
            >
              New Package
            </h1>
            <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
              <img
                className="img-fluid"
                src={require("../../assets/images/FirstProgressBar.png")}
              ></img>
            </div>
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
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2">
                    <div className="d-flex flex-row flex-md-row col-md-9  col-lg-5">
                      <p>
                        Tour Guide{" "}
                        <Toggle
                          checked={isChecked1}
                          onChange={handleToggleChange1}
                        />
                      </p>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-lg-row col-md-9 col-lg-6">
                      <p className="col-9">
                        Transportation{" "}
                        <Toggle
                          checked={isChecked2}
                          onChange={handleToggleChange2}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-md-column col-md-10 col-sm-10 flex-column flex-lg-row justify-content m-2 gap-3">
                    <div className="col-12 col-md-6 col-lg-3">
                      <p>Hotel Type</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <StarRating />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-lg-row flex-md-column flex-column gap-sm-3 justify-content-between mx-2">
                  <button className="btn-cancel" type="submit">
                    Cancel
                  </button>
                  <Link to='/holidayPlanner/plannerPackage2'>
                  <button
                    className="btn-next"
                  >
                    Next
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

export default HPUpdatePackage1;
