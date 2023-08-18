import React from "react";
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";

const HPUpdateEvent1 = () => {


  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12"
    //   >
    //     <Sidebar />
    <div className="d-flex w-100 align-items-center justify-content-around ">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 col-10 col-md-6 p-5 col-lg-6"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontSize: "auto",
            fontWeight: "600",
          }}
          className="mx-2 col-12"
        >
          New Event
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
                  Name
                  <input
                    className="p-2"
                    type="text"
                    placeholder="write the event name"
                  ></input>
                </label>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                <label>
                  Date
                  <input
                    className="p-2"
                    type="date"
                    placeholder="Date of the Event"
                  ></input>
                </label>
                <label>
                  Days
                  <input
                    className="p-2"
                    type="number"
                    placeholder="Number of the Days"
                  ></input>
                </label>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-column flex-lg-row gap-3 justify-content-between mx-2">
              <button className="btn-cancel" type="submit">
                Cancel
              </button>
              <Link to="/holidayPlanner/plannerEvent2">
              <button className="btn-next" type="button" >
                Next{" "}
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

export default HPUpdateEvent1;
