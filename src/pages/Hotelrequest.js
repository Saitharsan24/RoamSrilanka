import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import HotelSidebar from "../components/hotel-sidebar";
import Headeruser from "../components/headerusers";
// import DatatablePage from "../components/data-table";

function HotelRequest() {
  return (
    <div className="main d-flex flex-column">
      <Headeruser />
      <div className="d-flex">
        <HotelSidebar />
        <div className="d-flex w-100">
          <div className="d-flex flex-column col-lg-12 p-4">
            <p
              style={{ fontFamily: "Poppins", fontSize: "1.5rem"}}
              className="ms-5 m-0"
            >
              <b>All Requests</b>
            </p>
            {/* <DatatablePage /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelRequest;
