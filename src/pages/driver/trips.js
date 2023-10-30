import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import "./../../styles/data-table.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function DriverTrips() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRowData] = useState([]);
  const [requests, setRequests] = useState([]);
  const [request_id, setRequestId] = useState("");
  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";


  const openModal = (request_id) => {
    setIsModalOpen(true);
    setRequestId(request_id);
    setSelectedRowData(requests.find((request) => request.request_id === request_id));
    console.log("requestId: ", request_id);
    console.log("selectedRequest: ", selectedRequest);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });


  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/allTripRequests")
      .then((response) => {
        setRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  console.log(requests)
// for upcoming trips
  const filteredRequests1 = requests.filter((request) => request.status == 1);
  console.log(filteredRequests1)

  const rows1 = filteredRequests1.map((request) => {
    return {
      id: request.request_id,
      name: request.tourist_name,
      Fromdate: request.start_date,
      Todate: request.end_date,
      Pickup: request.pickup,
      Destination: request.destination,
      // number: request.noOfRooms,
      btn: (
        <Link
          key={`view-${request.request_id}`}
          className="view"
          onClick={() => openModal(request.request_id)}
        >
          View More
        </Link>
      ),
    };
  });

// for ongoing trips
  const filteredRequests2 = requests.filter((request) => request.status == 2);
  console.log(filteredRequests2)

  const rows2 = filteredRequests2.map((request) => {
    return {
      id: request.request_id,
      name: request.tourist_name,
      Fromdate: request.start_date,
      Todate: request.end_date,
      Pickup: request.pickup,
      Destination: request.destination,
      // number: request.noOfRooms,
      btn: (
        <Link
          key={`view-${request.request_id}`}
          className="view"
          onClick={() => openModal(request.request_id)}
        >
          View More
        </Link>
      ),
    };
  });


  const requestStartProcess = async(e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateStatus/${request_id}`, {
        status: 2,
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

  const requestFinishProcess = async(e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateStatus/${request_id}`, {
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

    const [showtab , setShowTab] = useState(1);
    const handletab = (e) => {
        setShowTab(e);
    }

    return (
        <div className="d-flex w-100">
            <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
                <div className="d-flex flex-row gap-4 my-3">
                <p
                    style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
                    className="ms-1 m-0">
                    
                    <b>View My All Trips</b>
                </p>
                </div>
                <div className="d-flex flex-row gap-4 my-3 ">
                    <ul className="nav nav-pills mb-3 mt-1" id="pillstab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 1 ? "nav-link active": "nav-link"} onClick={() => handletab(1)}>Upcoming Trips</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 2 ? "nav-link active": "nav-link"} onClick={() => handletab(2)}>Ongoing Trips</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 3 ? "nav-link active": "nav-link"} onClick={() => handletab(3)}>Finished Trips</button>
                        </li>
                    </ul>
                </div>

                <div className="tab-content text-dark" id="pills-tabContent">
                    <div className={showtab === 1 ? "tab-pane fade show active": "tab-pane fade show"}>
                        
                        <p>Upcoming</p>

                        <MDBDataTable
                          striped
                          bordered
                          paging={true}
                          searching={true}
                          data={{
                            columns : [
                              {
                                label: "ID",
                                field: "id",
                                sort: "asc",
                                width: 150,
                              },
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
                                field: "Pickup",
                                sort: "asc",
                                width: 250,
                              },
                              {
                                label: "Destination",
                                field: "Destination",
                                sort: "asc",
                                width: 250,
                              },
                              {
                                label: "More Info",
                                field: "btn",
                                width: 100,
                                btn: "view-button",
                              },
                            ],
                            rows: rows1, // Use the rows you generated
                          }}
                          exportToCSV={true}
                        />

                        <Modal show={isModalOpen} onHide={closeModal}>
                          <Modal.Header closeButton>
                            <Modal.Title>Trip Request</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          {requests.find((request) => request.request_id === request_id) ? ( 
                            <form method="POST" style={{ fontFamily: "Poppins" }}>
                              <input
                              type="hidden"
                              name="hotelId"
                              value={request_id}
                              onChange={handleRequestlId}
                            />
                              <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div>
                                    <label className="hotel-popup-label">Tourist Name</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.tourist_name}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">Contact</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.contact}</div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between ">
                                  <div>
                                    <label className="hotel-popup-label">From Date</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.start_date}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">To Date</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.end_date}</div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                  <div>
                                    <label className="hotel-popup-label">Pickup</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.pickup}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">Destination</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.destination}</div>
                                  </div>
                                </div>
                              <div className="d-flex flex-row justify-content-between ms-4">
                                <div>
                                    <label className="hotel-popup-label">Location</label>
                                    <br />
                                    <div className="mapouter">
                                      <div className="gmap_canvas">
                                        <iframe
                                          className="gmap_iframe"
                                          width= "425px"
                                          height="250vh"
                                          frameborder="0"
                                          scrolling="no"
                                          marginheight="0"
                                          marginwidth="0"
                                          src="https://maps.google.com/maps?width=600&amp;height=1000&amp;hl=en&amp;q=Matara&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        ></iframe>
                                        
                                      </div>
                                      <style>
                                        .mapouter
                                        {"position:relative;text-align:right;width:100%;height:500px;"}
                                        .gmap_canvas{" "}
                                        {
                                          "overflow:hidden;background:none!important;width:100%;height:500px;"
                                        }
                                        .gmap_iframe {"height:500px!important;"}
                                      </style>
                                    </div>
                                  </div>
                                </div>
                                <dic className="d-flex flex-row justify-content-center gap-5">
                                  <button onClick={requestStartProcess} className="hotel-popup-accept p-2">Start Trip</button>
                                </dic>
                              </div>
                            </form>
                            ) : (
                              <p>No room found for Tourist ID: {request_id}</p>
                            )}
                          </Modal.Body>
                        </Modal>
                    </div>
                    <div className={showtab === 2 ? "tab-pane fade show active": "tab-pane fade show"}>
                        <p>Ongoing</p>

                        <MDBDataTable
                          striped
                          bordered
                          paging={true}
                          searching={true}
                          data={{
                            columns : [
                              {
                                label: "ID",
                                field: "id",
                                sort: "asc",
                                width: 150,
                              },
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
                                field: "Pickup",
                                sort: "asc",
                                width: 250,
                              },
                              {
                                label: "Destination",
                                field: "Destination",
                                sort: "asc",
                                width: 250,
                              },
                              {
                                label: "More Info",
                                field: "btn",
                                width: 100,
                                btn: "view-button",
                              },
                            ],
                            rows: rows2, // Use the rows you generated
                          }}
                          exportToCSV={true}
                        />

                        <Modal show={isModalOpen} onHide={closeModal}>
                          <Modal.Header closeButton>
                            <Modal.Title>Trip Request</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          {requests.find((request) => request.request_id === request_id) ? ( 
                            <form method="POST" style={{ fontFamily: "Poppins" }}>
                              <input
                              type="hidden"
                              name="hotelId"
                              value={request_id}
                              onChange={handleRequestlId}
                            />
                              <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div>
                                    <label className="hotel-popup-label">Tourist Name</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.tourist_name}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">Contact</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.contact}</div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between ">
                                  <div>
                                    <label className="hotel-popup-label">From Date</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.start_date}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">To Date</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.end_date}</div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                  <div>
                                    <label className="hotel-popup-label">Pickup</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.pickup}</div>
                                  </div>
                                  <div>
                                    <label className="hotel-popup-label">Destination</label>
                                    <br />
                                    <div
                                    style={{width: "210px"}}
                                      className="hotel-popup-input"
                                    >{selectedRequest.destination}</div>
                                  </div>
                                </div>
                              <div className="d-flex flex-row justify-content-between ms-4">
                                <div>
                                    <label className="hotel-popup-label">Location</label>
                                    <br />
                                    <div className="mapouter">
                                      <div className="gmap_canvas">
                                        <iframe
                                          className="gmap_iframe"
                                          width= "425px"
                                          height="250vh"
                                          frameborder="0"
                                          scrolling="no"
                                          marginheight="0"
                                          marginwidth="0"
                                          src="https://maps.google.com/maps?width=600&amp;height=1000&amp;hl=en&amp;q=Matara&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        ></iframe>
                                        
                                      </div>
                                      <style>
                                        .mapouter
                                        {"position:relative;text-align:right;width:100%;height:500px;"}
                                        .gmap_canvas{" "}
                                        {
                                          "overflow:hidden;background:none!important;width:100%;height:500px;"
                                        }
                                        .gmap_iframe {"height:500px!important;"}
                                      </style>
                                    </div>
                                  </div>
                                </div>
                                <dic className="d-flex flex-row justify-content-center gap-5">
                                  <button onClick={requestFinishProcess} className="hotel-popup-accept p-2">Mark As Completed</button>
                                </dic>
                              </div>
                            </form>
                            ) : (
                              <p>No room found for Tourist ID: {request_id}</p>
                            )}
                          </Modal.Body>
                        </Modal>
                    </div>
                    <div className={showtab === 3 ? "tab-pane fade show active": "tab-pane fade show"}>
                        <p>Finished</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverTrips;