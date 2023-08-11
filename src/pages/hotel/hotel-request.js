import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Headeruser from "../../components/headerusers";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";

function HotelRequest() {
  const data = {
    columns: [
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Type",
        field: "type",
        sort: "asc",
        width: 200,
      },
      {
        label: "No of rooms",
        field: "number",
        sort: "asc",
        width: 100,
      },
      {
        label: "",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
    rows: [
      {
        name: "John Doe",
        date: "2023-07-01",
        type: "Single bed room",
        number: "2",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Robert Johnson",
        date: "2023-07-02",
        type: "Double bed room",
        number: "3",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Jane Smith",
        date: "2023-07-03",
        type: "Suite",
        number: "1",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Ella Brown",
        date: "2023-07-04",
        type: "Single bed room",
        number: "2",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "William Davis",
        date: "2023-07-05",
        type: "Double bed room",
        number: "3",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Sophia Wilson",
        date: "2023-07-06",
        type: "Suite",
        number: "1",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Oliver Taylor",
        date: "2023-07-07",
        type: "Single bed room",
        number: "2",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
      {
        name: "Ava Martinez",
        date: "2023-07-08",
        type: "Double bed room",
        number: "2",
        btn: [
          <>
            <div className="view">View More</div>
          </>,
        ],
      },
    ],
  };

  return (
    // <div className="d-flex flex-column">
    //   <Headeruser />
    //   <div className="d-flex flex-row col-12">
    //     <HotelSidebar />
        <div className="d-flex w-100">
          <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
            <div className="d-flex flex-row gap-4 my-3">
              <p
                style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
                className="ms-1 m-0"
              >
                <b>Requests</b>
              </p>
            </div>
            <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              //   small
              data={data}
              exportToCSV={true}
            />
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default HotelRequest;
