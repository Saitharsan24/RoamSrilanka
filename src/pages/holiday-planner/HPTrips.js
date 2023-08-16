import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import * as Icon from "react-bootstrap-icons";

function HPTrip() {
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
        label: "Location",
        field: "location",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
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
        location: "Jaffna",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#04F21C" }} size={30} />
              Completed
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Robert Johnson",
        date: "2023-07-02",
        location: "Colombo",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#E0163B" }} size={30} />
              Rejected
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Jane Smith",
        date: "2023-07-03",
        location: "Vavuniya",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#DFE32A" }} size={30} />
              On Going
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Ella Brown",
        date: "2023-07-04",
        location: "Trincomalee",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#E0163B" }} size={30} />
              Rejected
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "William Davis",
        date: "2023-07-05",
        location: "Anuradhapura",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#DFE32A" }} size={30} />
              On Going
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Sophia Wilson",
        date: "2023-07-06",
        location: "Mannar",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#04F21C" }} size={30} />
              Completed
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Oliver Taylor",
        date: "2023-07-07",
        location: "Nuwareliya",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#04F21C" }} size={30} />
              Completed
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
      {
        name: "Ava Martinez",
        date: "2023-07-08",
        location: "Kandy",
        status: [
          <>
            <div className="">
              <Icon.Dot style={{ color: "#E0163B" }} size={30} />
              Rejected
            </div>
          </>,
        ],
        btn: [
          <>
            <div className="view-trip"><a style={{color:"inherit"}} href="guideTripForm">View Trip</a></div>
          </>,
        ],
      },
    ],
  };

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
        <div className="d-flex flex-row gap-4 my-3">
          <p
            style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
            className="ms-1 m-0"
          >
            <b>My Trip</b>
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
  );
}

export default HPTrip;
