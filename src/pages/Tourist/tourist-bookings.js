import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../../styles/tourist/tourist_booking.css";
import "./../../styles/data-table.css";
import { MDBDataTable } from "mdbreact";
import "../../styles/admin/admin_user.css";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


function TouristBookings() {
  const data_tourist = {
    columns: [
      {
        label: "Tourist Id",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Nationality",
        field: "national",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ]};

  const data_driver = {
    columns: [
      {
        label: "Driver ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Driver Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Seat Capacity",
        field: "seat",
        sort: "asc",
        width: 200,
      },
      {
        label: "Rating",
        field: "rate",
        sort: "asc",
        width: 150,
      },
      
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
  };

  const data_guide = {
    columns: [
      {
        label: "Guide ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Guide Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rating",
        field: "rate",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
  };


  const data_hotel = {
    columns: [
      {
        label: "Reference No",
        field: "id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Hotel Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Booking Date",
        field: "date",
        sort: "asc",
        width: 150,
      },

      {
        label: "Booking Status",
        field: "Status",
        sort: "asc",
        width: 100,
        
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
  };


  const data_holidayplanner = {
    columns: [
      {
        label: "Planner ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Planner Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      

      {
        label: "Rating",
        field: "rate",
        sort: "asc",
        width: 100,
        
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
  };




  return (
  <>    
   
        <div className="user-1 d-flex w-100">

          <div className="d-flex flex-column col-lg-11 ms-lg-5">
            <div className="d-flex flex-column gap-4 my-3">
            <div className="tourist-headings w-100">
            <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>My Bookings</h2>
            <hr style={{margin:'0px'}} />
          </div>
              <Tabs  id="uncontrolled-tab-example">
                <Tab eventKey="tourist" title="Packages">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_tourist}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="driver" title="Hotel">
                
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_hotel}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="guide" title="Guide">
                
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_guide}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="hotel" title="Ride">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_hotel}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="holiday" title="Accessories">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_holidayplanner}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

              </Tabs>
        
            </div>         
          </div>
        </div>
  </>
  );
}

export default TouristBookings;