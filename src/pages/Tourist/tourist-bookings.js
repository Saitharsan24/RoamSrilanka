import React from "react";
import "./../../styles/tourist/tourist_booking.css";
import { MDBDataTable } from "mdbreact";
import * as Icon from "react-bootstrap-icons";

function TouristBookings() {

  const data = {
    columns: [
      {
        label: "NAME",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "TITLE",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "RATING",
        field: "rating",
        sort: "asc",
        width: 200,
      },
      {
        label: "REVIEWS",
        field: "reviews",
        sort: "asc",
        width: 100,
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "DETAILS",
        field: "btn",
        width: 100,
        btn: "view More",
      },
    ],
    rows: [
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
      {
        name: "Office chair",
        title: "Damro",
        rating: "20",
        reviews: "30000",
        status: [
          <>
            <div style={{backgroundColor:"#CDFFCD",borderRadius:"8px", width:"120px",fontSize:"15px",fontWeight:"500", color:"#007F00"}}><Icon.Dot size={25}/> Completed</div>
          </>,
        ],
        btn: [
          <>
            <button className="">View More</button>
          </>,
        ],
      },
    ],
  };

  return (     
    <div
      className="tourist-main d-flex flex-column gap-2 mb-2"
      style={{ width: "inherit" }}
    >
      <div className="d-flex flex-column w-100">
        <div className="d-flex flex-row gap-2">
          <button className="tourist-booking-btn">Packges</button>
          <button className="tourist-booking-btn">Hotel</button>
          <button className="tourist-booking-btn">Guide</button>
          <button className="tourist-booking-btn">Driver</button>
          <button className="tourist-booking-btn">Accessories</button>
        </div>
        <hr className="tourist-booking-hr m-0"/>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <button style={{backgroundColor:"#004577", color:"#FFF", borderRadius:"8px", fontSize:"18px"}}>
          New Package
        </button>
      </div>
      <div className="d-flex flex-column w-100">
      <MDBDataTable
          striped
          bordered
          paging={true}
          searching={true}
          //   small
          data={{
            ...data,
            rows: data.rows.map((row) => {
              return {
                ...row,
                btn: (
                  <button className="view">
                    View More
                  </button>
                ),
              };
            }),
          }}
          exportToCSV={true}
        />
      </div>

    </div>
  );
}

export default TouristBookings;
