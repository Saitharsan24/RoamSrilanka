import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import DriverDatatablePage from "../../components/driver-data-table";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function HotelRequest() {
  return (
    <div className="main d-flex flex-column">
      <div
        // style={{ backgroundColor: "#ECECEC" }}
        className="d-flex flex-row column-gap-2 col-12"
      >
        <div className="d-flex w-100">
          <div className="d-flex flex-column col-lg-12 p-4">
            <p
              style={{ fontFamily: "Poppins", fontSize: "1.5rem"}}
              className="ms-5 m-0"
            >
              <b>All Requests</b>
            </p>
            <DriverDatatablePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelRequest;
