import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../components/holidayplanner-sidebar";
import Headeruser from "../components/headerusers";
import HPDatatablePage from "../components/HPRequest";
import { useNavigate } from "react-router-dom";

function HPRequest() {
  const navigate = useNavigate();
  return (
    <div className="main d-flex flex-column">
      <Headeruser />
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex w-100">
          <div className="d-flex flex-column col-lg-12 p-4 ">
            <p
              style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
              className="ms-5 m-0"
            >
              <b>Requests</b>
            </p>
            <HPDatatablePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HPRequest;
