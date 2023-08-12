import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "../../styles/updatepack.css";
import DragDropFile from "../../components/file-upload";

const HPUpdateItem1 = () => {
  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div
    //     style={{ backgroundColor: "#F4F4F5" }}
    //     className="d-flex flex-row col-12"
    //   >
    //     <Sidebar />
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around">
          <div
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "15px",
              boxShadow:
                "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
            }}
            className="d-flex flex-column gap-3 col-6 p-5 mt-4 mb-4"
          >
            <h1
              style={{
                fontFamily: "Barlow",
                fontSize: "30px",
                fontWeight: "600",
              }}
              className="mx-3"
            >
              Item Information
            </h1>
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                    <label>
                      Name:
                      <input
                        className="p-2"
                        type="text"
                        placeholder="Tent by northface"
                        
                      ></input>
                    </label>
                    <label>
                      Rent per day :
                      <input
                        className="p-2"
                        type="number"
                        placeholder="5000.00"
                       
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Description:
                      <textarea
                        className="p-2"
                        placeholder="framework of poles or other supporting structures. It's commonly used for outdoor activities such as camping, "
                        
                      ></textarea>
                    </label>
                    <label>
                      Image:
                      <div className="d-flex justify-content-center col-12">
                        <DragDropFile />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-0">
                  <button className="btn-send" type="submit">
                    Back
                  </button>
                  <button className="btn-send" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default HPUpdateItem1;
