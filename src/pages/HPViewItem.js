import React, { useState } from "react";
import Headeruser from "../components/headerusers";
import Sidebar from "../components/holidayplanner-sidebar";
import "./../styles/updatepack.css";

function HPViewItem() {
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
            Item Name: Tent by Northface
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
              <div className="d-flex flex-column col-12">
                <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
                  <img
                    className="img-fluid"
                    style={{
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      borderRadius: "11px",
                    }}
                    src={require("./../assets/images/Item1.png")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-6 col-lg-6 gap-3 flex-column">
              <form className="pack">
                <div className="d-flex flex-column gap-5">
                  <div className="d-flex flex-column justify-content-center m-2">
                    <h2>Item Information</h2>
                    <div className="d-flex flex-column justify-content-center m-2">
                      <label>
                        Name:
                        <input
                          className="p-2"
                          type="text"
                          placeholder="Tent by Northface"
                          readOnly
                        ></input>
                      </label>
                      <label>
                        Rent:
                        <input
                          className="p-2"
                          type="number"
                          placeholder="3 Days"
                          readOnly
                        ></input>
                      </label>
                      <label>
                        Description:
                        <textarea
                          className="p-2"
                          type="text"
                          placeholder=""
                          readOnly
                        ></textarea>
                      </label>
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
export default HPViewItem;
