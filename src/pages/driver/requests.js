// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Button, Table } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";
// import DriverDatatablePage from "../../components/driver-data-table";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// function HotelRequest() {
//   return (
//     <div className="main d-flex flex-column">
//       <div
//         // style={{ backgroundColor: "#ECECEC" }}
//         className="d-flex flex-row column-gap-2 col-12"
//       >
//         <div className="d-flex w-100">
//           <div className="d-flex flex-column col-lg-12 p-4">
//             <p
//               style={{ fontFamily: "Poppins", fontSize: "1.5rem"}}
//               className="ms-5 m-0"
//             >
//               <b>All Requests</b>
//             </p>
//             <DriverDatatablePage />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelRequest;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
// import { Button, Table } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";
// import Headeruser from "../../components/headerusers";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";

function HotelRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const data = {
    columns: [
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "From Date",
        field: "Fromdate",
        sort: "asc",
        width: 150,
      },
      {
        label: "To Date",
        field: "Todate",
        sort: "asc",
        width: 150,
      },
      {
        label: "Pickup",
        field: "startPlace",
        sort: "asc",
        width: 250,
      },
      {
        label: "Destination",
        field: "endPlace",
        sort: "asc",
        width: 250,
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
        Fromdate: "2023-07-01",
        Todate: "2023-08-01",
        startPlace: "Kandy",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Robert Johnson",
        Fromdate: "2023-07-02",
        Todate: "2023-08-02",
        startPlace: "Dambulla",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Jane Smith",
        Fromdate: "2023-07-03",
        Todate: "2023-08-03",
        startPlace: "Weligama",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Ella Brown",
        Fromdate: "2023-07-04",
        Todate: "2023-08-04",
        startPlace: "Matara",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "William Davis",
        Fromdate: "2023-07-05",
        Todate: "2023-08-05",
        startPlace: "Jaffna",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Sophia Wilson",
        Fromdate: "2023-07-06",
        Todate: "2023-08-06",
        startPlace: "Colombo",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Oliver Taylor",
        Fromdate: "2023-07-07",
        Todate: "2023-08-01",
        startPlace: "Hikkaduwa",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Ava Martinez",
        Fromdate: "2023-07-08",
        Todate: "2023-08-01",
        startPlace: "Sembuwatte",
        endPlace: "Gampola",
        btn: [
          <>
            <button className="view">View More</button>
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
          data={{
            ...data,
            rows: data.rows.map((row) => {
              return {
                ...row,
                btn: (
                  <button onClick={() => openModal(row)} className="view">
                    View More
                  </button>
                ),
              };
            }),
          }}
          exportToCSV={true}
        />
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Driver Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form style={{ fontFamily: "Poppins" }}>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">Tourist Name</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      value={selectedRowData?.name}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.name})`}
                      disabled
                    ></input>
                  </div>
                  <div>
                    <label className="hotel-popup-label">Phone Number</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      placeholder="076 263 9672"
                      disabled
                    ></input>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">From</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "190px" }}
                      value={selectedRowData?.Fromdate}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.Fromdate})`}
                      disabled
                    ></input>
                  </div>
                  <div>
                    <label className="hotel-popup-label">To</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "190px" }}
                      value={selectedRowData?.Todate}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.Todate})`}
                      disabled
                    ></input>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">Pickup</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "190px" }}
                      value={selectedRowData?.startPlace}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.startPlace})`}
                      disabled
                    ></input>
                  </div>
                  <div>
                    <label className="hotel-popup-label">Destination</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "190px" }}
                      value={selectedRowData?.endPlace}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.endPlace})`}
                      disabled
                    ></input>
                  </div>
                </div>
                {/* <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">Date</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "190px" }}
                      value={selectedRowData?.date}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={`(${selectedRowData?.date})`}
                      disabled
                    ></input>
                  </div>
                  <div>
                    <label className="hotel-popup-label">Email Address</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      type="email"
                      placeholder="saran@gmail.com"
                      disabled
                    ></input>
                  </div>
                </div> */}
                {/* <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">Message</label>
                    <br />
                    <input
                      className="hotel-popup-input"
                      style={{ width: "425px", height: "100px" }}
                      type="text"
                      placeholder="eg: Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem EpsumLorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum"
                      disabled
                    ></input>
                  </div>
                </div> */}
                <dic className="d-flex flex-row justify-content-center gap-5">
                  <button className="hotel-popup-accept p-2">Accept</button>
                  <button className="hotel-popup-reject p-2">Reject</button>
                </dic>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default HotelRequest;
