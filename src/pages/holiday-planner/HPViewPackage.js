import React, { useState } from "react";
import "../../styles/updatepack.css";

function HPViewpackage() {
  return (
    <div className="d-flex gap-3 w-100 m align-items-center justify-content-around">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 mt-4 mb-5  justify-content-around"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontWeight: "700",
            fontSize: "auto",
            color: "black",
          }}
          className="d-flex mx-5 mt-5"
        >
          Package Name: Perahera
        </h1>
        <div className="d-flex align-items-center justify-content-around flex-column flex-md-row flex-lg-row col-12">
          <form className="pack">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column justify-content-center m-2">
                <div className="d-flex flex-column justify-content-center m-2">
                  <label>
                    Name:
                    <input
                      className="p-2"
                      type="text"
                      placeholder="Perahera"
                      readOnly
                    ></input>
                  </label>
                  <label>
                    Amount Per Person:
                    <input
                      className="p-2"
                      type="number"
                      placeholder="4000"
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
                  <label>
                    Places:
                    <input
                      className="p-2"
                      type="text"
                      placeholder="Kandy"
                      readOnly
                    ></input>
                  </label>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
                  <label className="d-flex flex-lg-row gap-3 m-2">
                    Guide
                    <input
                      className="d-flex"
                      type="checkbox"
                      name="tourGuide"
                    ></input>
                  </label>
                  <label className="d-flex flex-lg-row gap-3 m-2">
                    Meals
                    <input
                      className="d-flex"
                      type="checkbox"
                      name="meals"
                    ></input>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mx-5 mb-5">
          <button className="btn-cancel p-2" type="submit">
            Delete
          </button>
          <button className="btn-next p-2" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default HPViewpackage;
