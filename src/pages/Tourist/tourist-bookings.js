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
    ],
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        national: "Sri Lanka",
        btn: [
          <>
           <a href="/admin/admintouristdetail"> <button className="view-detail" >View detail</button></a>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail ">View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        national: "Sri Lanka",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
    
    ],
  };

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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        seat: "12",
        rate: "4.5",
        btn: [
          <>
              <a href="/admin/admindriverdetail"> <button className="view-detail" >View detail</button></a>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        seat: "6",
        rate: "4.5",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        rate: "4.2",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        rate: "4.0",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        rate: "4.9",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
    
    ],
  };


  const data_hotel = {
    columns: [
      {
        label: "Hotel ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Hotel Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 200,
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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
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
              data={data_driver}
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