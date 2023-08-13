import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import * as Icon from "react-bootstrap-icons";
import "./../../styles/data-table.css";

function GuideRequest() {
  const data = {
    columns: [
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 150,
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
        name: "Alice Johnson",
        email: "alice@gmail.com",
        date: "2023-07-04",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "John Doe",
        email: "john@gmail.com",
        date: "2023-07-01",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "Robert Johnson",
        email: "robert@gmail.com",
        date: "2023-07-02",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "Sarah Wilson",
        email: "sarah@gmail.com",
        date: "2023-07-08",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "Daniel Jackson",
        email: "daniel@gmail.com",
        date: "2023-07-09",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "Olivia Martinez",
        email: "olivia@gmail.com",
        date: "2023-07-10",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "James White",
        email: "james@gmail.com",
        date: "2023-07-11",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
          </>,
        ],
      },
      {
        name: "Sophia Taylor",
        email: "sophia@gmail.com",
        date: "2023-07-12",
        btn: [
          <>
            <div className="view-more"><a href="guideRequestForm">View More <Icon.ArrowRightSquareFill/></a></div>
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
  );
}

export default GuideRequest;
