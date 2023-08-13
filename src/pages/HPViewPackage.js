import React, { useState } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import StarRating from "../components/Rating";
import "./../styles/updatepack.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function HPViewPackage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleToggleChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggleChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <div className=" ">
      <Headeruser />
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        <Sidebar />
        <div
          style={{
            height: "auto",
            backgroundColor: "#ffff",
            borderRadius: "15px",
            boxShadow:
              "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
          }}
          className="d-flex flex-column gap-3 m-5 justify-content-around"
        >
          <h1
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "24px",
              color: "#DB163A",
            }}
            className="d-flex m-5"
          >
            Package No: 1
          </h1>
          <div className="d-flex align-items-center justify-content-around flex-column flex-md-row flex-lg-row col-12">
            <div
              className="d-flex flex-column col-md-4 col-lg-4 gap-4"
              style={{
                height: "auto",
                backgroundColor: "#ffff",
                borderRadius: "11px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="d-flex flex-column col-12 pack-list">
                <h2>Places</h2>
                <ol>
                  <li>Temple of the Tooth (Sri Dalada Maligawa)</li>
                  <li>Peradeniya Royal Botanical Gardens</li>
                  <li>Kandy Lake</li>
                  <li>Bahirawakanda Vihara Buddha Statue</li>
                  <li>Udawatte Kele Sanctuary</li>
                </ol>
              </div>
            </div>
            <div className="d-flex col-md-6 col-lg-6 gap-3 flex-column">
              <form className="pack">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column justify-content-center m-2">
                    <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                      <label>
                        Type
                        <input className="p-2" readOnly></input>
                      </label>
                      <label>
                        Days
                        <input className="p-2" readOnly></input>
                      </label>
                    </div>
                    <div className="d-flex flex-column justify-content-center m-2">
                      <label>
                        Amount
                        <input className="p-2" readOnly></input>
                      </label>
                      <label>
                        Places:
                        <input className="p-2" readOnly></input>
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
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between mx-5 mb-5">
            <button className="btn-cancel" type="submit">
              Delete
            </button>
            <button className="btn-next" type="submit">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HPViewPackage;
