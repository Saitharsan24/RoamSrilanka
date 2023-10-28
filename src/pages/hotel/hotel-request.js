import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Headeruser from "../../components/headerusers";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function HotelRequest() {
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
  
      // Fetch data from your backend API for viewTourists
      const touristsResponse = await axiosInstance.get("/viewTourists");
      const touristsArray = touristsResponse.data;
  
      // Fetch data from your backend API for viewHotels
      const hotelsResponse = await axiosInstance.get("/viewHotels");
      const hotelsArray = hotelsResponse.data;
  
      // Fetch data from your backend API for users
      const usersResponse = await axiosInstance.get("/users");
      const usersArray = usersResponse.data;
  
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
    return item.ownerId === ownerId;
  });

  const filteredRequests = filteredData.filter(
    (request) => request.status == null
  );

  const rows = filteredRequests.map((request) => {
    return {
      name: request.userFullname,
      date: request.date,
      number: request.touristData["touristContact"],
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

  const requestAcceptProcess = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/addStatus/${requestId}`, {
        status: 1,
      });

      if (response.status === 200) {
        closeModal();
        window.location.reload();
        console.log("okkkk");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestRejectProcess = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/addStatus/${requestId}`, {
        status: 3,
      });

      if (response.status === 200) {
        closeModal();
        window.location.reload();
        console.log("okkkk");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestlId = (e) => {
    setRequestId(e.target.value);
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
                label: "Contact Number",
                field: "number",
                sort: "asc",
                width: 100,
              },
              {
                label: "",
                field: "btn",
                width: 100,
              },
            ],
            rows: rows, // Use the rows you generated
          }}
          exportToCSV={true}
        />

        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hotel Request</Modal.Title>
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
                      <label className="hotel-popup-label">Country</label>
                      <br />
                      <div
                        style={{ width: "170px" }}
                        className="hotel-popup-input"
                      >
                        {selectedRequest.touristData["country"]}
                      </div>
                    </div>
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
                  </div>
                  <dic className="d-flex flex-row justify-content-center gap-5">
                    <button
                      onClick={requestRejectProcess}
                      className="hotel-popup-reject p-2"
                    >
                      Reject
                    </button>
                    <button
                      onClick={requestAcceptProcess}
                      className="hotel-popup-accept p-2"
                    >
                      Accept
                    </button>
                  </dic>
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

export default HotelRequest;
