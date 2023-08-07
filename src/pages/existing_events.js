import React from "react";
import Table from "../components/Table-hp"; // Make sure to adjust the import path based on your project structure
import Userheader from "../components/headerusers";
import HotelSidebar from "../components/hotel-sidebar";
import { colors } from "@mui/material";
function Existing_events() {
  return (
    <div className="d-flex flex-column">
      <Userheader />
      <div className="d-flex flex-row">
        <HotelSidebar />
        <div className="d-flex flex-column w-100 m-4">
          <div className="d-flex justify-content-end">
            <p style={{backgroundColor:'#004577',color:'#ffffff',borderRadius:'13px'}} className="m-2 p-2 align-content-center">Add New Event</p>
          </div>
          <div>
            <p>Existing Events</p>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Existing_events;
