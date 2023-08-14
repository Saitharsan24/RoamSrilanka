import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import DriverSidebar from "./../../components/driver-sidebar";
import SideNavbar from "../../components/driver-sidenavbar";
import Headeruser from "../../components/headerusers";
import DriverDatatablePage from "../../components/driver-data-table";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function HotelRequest() {
  return (
    <div className="main d-flex flex-column">
      <Headeruser />
      <div
        // style={{ backgroundColor: "#ECECEC" }}
        className="d-flex flex-row column-gap-2 col-12"
      >
        <div className="col-lg-2 col-md-4 col-12">
          <SideNavbar />
        </div>
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
