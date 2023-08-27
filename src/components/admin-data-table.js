import React from "react";
import "./../styles/data-table.css";
import { MDBDataTable } from "mdbreact";
import DQ from "../assets/img/DQ.jpeg";

const AdminDatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Driver ID",
        field: "id",
        sort: "asc",
        width: 200,
      },
      {
        label: "Driver Name",
        field: "name",
        sort: "asc",
        width: 300,
      },
      {
        label: "Seating Capacity",
        field: "capacity",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rating",
        field: "rate",
        sort: "asc",
        width: 150,
      },
      {
        label: "Details",
        field: "button",
        width: 150,
        btn: "view-button",
      },
    ],
    rows: [
      {
        id: "001",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              John Doe
            </p>
          </>,
        ],
        capacity: "04",
        rate: "4.4",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "002",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Jane Smith
            </p>
          </>,
        ],
        capacity: "12",
        rate: "4.9",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "003",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              William Johnson
            </p>
          </>,
        ],
        capacity: "08",
        rate: "3.8",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "004",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Olivia Williams
            </p>
          </>,
        ],
        capacity: "06",
        rate: "4.7",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "005",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Benjamin Lee
            </p>
          </>,
        ],
        capacity: "10",
        rate: "4.2",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "006",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Emma Taylor
            </p>
          </>,
        ],
        capacity: "15",
        rate: "4.8",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "007",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Noah Adams
            </p>
          </>,
        ],
        capacity: "07",
        rate: "4.3",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "008",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Isabella Scott
            </p>
          </>,
        ],
        capacity: "11",
        rate: "4.6",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "009",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Liam Turner
            </p>
          </>,
        ],
        capacity: "14",
        rate: "3.5",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "010",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Sophia Brown
            </p>
          </>,
        ],
        capacity: "03",
        rate: "4.1",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "011",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Lucas Hall
            </p>
          </>,
        ],
        capacity: "20",
        rate: "4.0",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "012",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Scarlett Turner
            </p>
          </>,
        ],
        capacity: "17",
        rate: "4.5",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "013",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Mason Rodriguez
            </p>
          </>,
        ],
        capacity: "02",
        rate: "3.7",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "014",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Henry Miller
            </p>
          </>,
        ],
        capacity: "18",
        rate: "4.2",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "015",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Evelyn James
            </p>
          </>,
        ],
        capacity: "16",
        rate: "4.9",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "016",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Harper Robinson
            </p>
          </>,
        ],
        capacity: "22",
        rate: "4.3",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "017",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Zoey Clark
            </p>
          </>,
        ],
        capacity: "05",
        rate: "4.7",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "018",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Carter Martinez
            </p>
          </>,
        ],
        capacity: "25",
        rate: "3.6",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "019",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Michael Turner
            </p>
          </>,
        ],
        capacity: "13",
        rate: "4.1",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "020",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Emma Wright
            </p>
          </>,
        ],
        capacity: "19",
        rate: "4.8",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "021",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              James Ward
            </p>
          </>,
        ],
        capacity: "30",
        rate: "4.5",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "022",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Abigail White
            </p>
          </>,
        ],
        capacity: "21",
        rate: "4.2",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "023",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Jackson Allen
            </p>
          </>,
        ],
        capacity: "28",
        rate: "3.9",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "024",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Harper Turner
            </p>
          </>,
        ],
        capacity: "24",
        rate: "4.6",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "025",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Stella Martin
            </p>
          </>,
        ],
        capacity: "29",
        rate: "3.8",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
      {
        id: "026",
        name: [
          <>
            <img
              style={{ width: "50px", height: "30px", borderRadius: "5px" }}
              src={DQ}
              alt="DQ Logo"
            />
            <p
              className="ms-3"
              style={{
                color: "#464E5F",
                width: "70%",
                display: "inline-block",
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              Leo Parker
            </p>
          </>,
        ],
        capacity: "23",
        rate: "4.3",
        button: [
          <>
            <div className="view">view details</div>
          </>,
        ],
      },
    ],
  };

  return <MDBDataTable striped bordered medium data={data} />;
};

export default AdminDatatablePage;
