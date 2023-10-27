import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import "./../../styles/hotel/popup.css";
import axios from "axios";

function HotelBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRowData] = useState([]);
  const [requests, setRequests] = useState([]);
  const [requestId, setRequestId] = useState("");
  const [inputValue, setInputValue] = useState("");

  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const openModal = (requestId) => {
    setIsModalOpen(true);
    setRequestId(requestId);
    setSelectedRowData(
      requests.find((request) => request.requestId === requestId)
    );
    console.log("requestId: ", requestId);
    console.log("selectedRequest: ", selectedRequest);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewRequest")
      .then((response) => {
        setRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const rows = requests.map((request) => {
    return {
      name: request.hotelName,
      date: request.date,
      noOfRooms: request.noOfRooms,
      status: determineStatus(request.status),
      btn: (
        <Link
          key={`view-${request.requestId}`}
          className="view"
          onClick={() => openModal(request.requestId)}
        >
          View More
        </Link>
      ),
    };
  });

  function determineStatus(status) {
    if (status == null) {
      return "Pending";
    } else if (status == 1) {
      return "Accepted";
    } else if (status == 2) {
      return "Completed";
    } else {
      return "Rejected";
    }
  }

  const handleRequestlId = (e) => {
    setRequestId(e.target.value);
  };

  const filteredRequests = requests.filter((request) => request.status == null);

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
              {filteredRequests.length > 0 && ( 
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              )}
            </button>
          </a>
        </div>
        <MDBDataTable
          striped
          bordered
          paging={true}
          searching={true}
          data={{
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
                label: "No of rooms",
                field: "noOfRooms",
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
            rows: rows, // Use the rows you generated
          }}
          exportToCSV={true}
        />
        {/* Modal for displaying additional data */}
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hotel Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {requests.find((request) => request.requestId === requestId) ? (
              <form method="POST" style={{ fontFamily: "Poppins" }}>
                <input
                  type="hidden"
                  name="hotelId"
                  value={requestId}
                  onChange={handleRequestlId}
                />
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-row justify-content-between ">
                    <div>
                      <label className="hotel-popup-label">Hotel Name</label>
                      <br />
                      <div
                        style={{ width: "210px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.hotelName}
                      </div>
                    </div>
                    <div>
                      <label className="hotel-popup-label">Date</label>
                      <br />
                      <div
                        style={{ width: "210px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.date}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between ">
                    <div>
                      <label className="hotel-popup-label">From Date</label>
                      <br />
                      <div
                        style={{ width: "210px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.fromDate}
                      </div>
                    </div>
                    <div>
                      <label className="hotel-popup-label">To Date</label>
                      <br />
                      <div
                        style={{ width: "210px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.toDate}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <label className="hotel-popup-label">Status</label>
                      <br />
                      <div
                        style={{ width: "170px" }}
                        className="hotel-popup-input"
                      >
                        {determineStatus(selectedRequest.status)}
                      </div>
                    </div>
                    <div>
                      <label className="hotel-popup-label">No of Rooms</label>
                      <br />
                      <div
                        style={{ width: "170px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.noOfRooms}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <p>No room found for roomId: {requestId}</p>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default HotelBooking;
