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
import { useSession } from '../../Context/SessionContext';

function HotelBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRowData] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [requestId, setRequestId] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { sessionData , setSessionData  } = useSession();
  const ownerId = sessionData.userId;

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
      mergedData.find((request) => request.requestId === requestId)
    );
    console.log("requestId: ", requestId);
    console.log("selectedRequest: ", selectedRequest);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const mergeData = async () => {
    try {
      // Fetch data from your backend API for viewRequest
      const requestResponse = await axiosInstance.get("/viewRequest");
      const requestArray = requestResponse.data;
      console.log("requestArray:",requestArray);
  
      // Fetch data from your backend API for viewTourists
      const touristsResponse = await axiosInstance.get("/viewTourist");
      const touristsArray = touristsResponse.data;
      console.log("touristsArray:",touristsArray);
  
      // Fetch data from your backend API for viewHotels
      const hotelsResponse = await axiosInstance.get("/viewHotels");
      const hotelsArray = hotelsResponse.data;
      console.log("hotelsArray:",hotelsArray);
  
      // Fetch data from your backend API for users
      const usersResponse = await axiosInstance.get("/users");
      const usersArray = usersResponse.data;
      console.log("usersArray:",usersArray);
  
      // Create a mapping of userId to user data
      const userDataMap = {};
      usersArray.forEach((user) => {
        userDataMap[user.userId] = user;
      });
  
      // Create a mapping of hotelId to hotel data
      const hotelDataMap = {};
      hotelsArray.forEach((hotel) => {
        hotelDataMap[hotel.hotelId] = hotel;
      });
  
      // Merge the data based on userId
      const mergedData = requestArray.map((request) => {
        const userId = request.userId;
        // Find the corresponding user data
        const user = userDataMap[userId];
        // Initialize the merged object with the user data
        const mergedObject = { ...user, ...request };
  
        // Find the corresponding tourist data, if available
        const tourist = touristsArray.find((tourist) => tourist.userId === userId);
        if (tourist) {
          mergedObject.touristData = tourist;
        }
  
        return mergedObject;
      });
  
      // Merge the data based on hotelId
      mergedData.forEach((item) => {
        const hotelId = item.hotelId;
        // Find the corresponding hotel data, if available
        const hotel = hotelDataMap[hotelId];
        if (hotel) {
          item.hotelData = hotel;
        }
      });
  
      // Set the merged data in your state variable
      setMergedData(mergedData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  
  
  useEffect(() => {
    mergeData();
  }, []);
  
  const filteredData = mergedData.filter((item) => {
    return item.hotelData["ownerId"] === ownerId;
  });

  console.log("mergedData:",mergedData);
console.log("filteredData:",filteredData); 

  const rows = filteredData.map((request) => {
    return {
      name: request.userFullname,
      date: request.date,
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
    } else {
      return "Rejected";
    }
  }

  const handleRequestlId = (e) => {
    setRequestId(e.target.value);
  };

  const filteredRequests = filteredData.filter((request) => request.status == null);

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
          {/* <a style={{ color: "inherit" }} href="hotelRequest">
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
          </a> */}
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
            {filteredData.find((request) => request.requestId === requestId) ? (
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
                        {selectedRequest.hotelData["hotelName"]}
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
                      <label className="hotel-popup-label">Gender</label>
                      <br />
                      <div
                        style={{ width: "170px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.touristData["touristGender"]}
                      </div>
                    </div>
                    <div>
                      <label className="hotel-popup-label">Country</label>
                      <br />
                      <div
                        style={{ width: "170px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.touristData["country"]}
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
