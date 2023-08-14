import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import "./../../styles/hotel/popup.css";

function HotelBooking() {
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
        type: "Single bed room",
        status: "Accepted",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Robert Johnson",
        date: "2023-07-02",
        type: "Double bed room",
        status: "Rejected",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Jane Smith",
        date: "2023-07-03",
        type: "Suite",
        status: "Pending",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Ella Brown",
        date: "2023-07-04",
        type: "Single bed room",
        status: "Accepted",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "William Davis",
        date: "2023-07-05",
        type: "Double bed room",
        status: "Accepted",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Sophia Wilson",
        date: "2023-07-06",
        type: "Suite",
        status: "Pending",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Oliver Taylor",
        date: "2023-07-07",
        type: "Single bed room",
        status: "Rejected",
        btn: [
          <>
            <button className="view">View More</button>
          </>,
        ],
      },
      {
        name: "Ava Martinez",
        date: "2023-07-08",
        type: "Double bed room",
        status: "Accepted",
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
            <b>All Bookings</b>
          </p>
          <a style={{ color: "inherit" }} href="hotelRequest">
            <button
              type="button"
              style={{
                border: "1px solid #004577",
                backgroundColor: "white",
              }}
              class="btn shadow-md position-relative"
            >
              Requests
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>
          </a>
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
        {/* Modal for displaying additional data */}
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hotel Booking</Modal.Title>
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
                </div>
                <div className="d-flex flex-row justify-content-around ">
                  <div>
                    <label className="hotel-popup-label">Booked Rooms</label>
                    <br />
                    <input className="hotel-popup-input" type="number" placeholder="2" disabled></input>
                  </div>
                  <div>
                    <label className="hotel-popup-label">Total Cost</label>
                    <br />
                    <input className="hotel-popup-input" type="number" placeholder="$200" disabled></input>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-around ">
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
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default HotelBooking;
