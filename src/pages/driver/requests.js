// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.css";
// // import { Button, Table } from "react-bootstrap";
// // import { BsSearch } from "react-icons/bs";
// // import DriverDatatablePage from "../../components/driver-data-table";
// // import Popup from 'reactjs-popup';
// // import 'reactjs-popup/dist/index.css';

// // function HotelRequest() {
// //   return (
// //     <div className="main d-flex flex-column">
// //       <div
// //         // style={{ backgroundColor: "#ECECEC" }}
// //         className="d-flex flex-row column-gap-2 col-12"
// //       >
// //         <div className="d-flex w-100">
// //           <div className="d-flex flex-column col-lg-12 p-4">
// //             <p
// //               style={{ fontFamily: "Poppins", fontSize: "1.5rem"}}
// //               className="ms-5 m-0"
// //             >
// //               <b>All Requests</b>
// //             </p>
// //             <DriverDatatablePage />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HotelRequest;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import Modal from "react-bootstrap/Modal";
// // import { Link } from 'react-router-dom';
// import axios from "axios";
// // import { Button, Table } from "react-bootstrap";
// // import { BsSearch } from "react-icons/bs";
// // import Headeruser from "../../components/headerusers";
// import { MDBDataTable } from "mdbreact";
// import "./../../styles/data-table.css";

// function DriverRequest() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState([]);
//   const [requestId, setRequestId] = useState("");
//   const [requests, setRequests] = useState([]);
  
//   const [inputValue, setInputValue] = useState("");
  
//   const openModal = (requestId) => {
//     // setSelectedRowData(rowData);
//     setIsModalOpen(true);
//     setRequestId(requestId);
//     setSelectedRowData(requests.find((request) => request.requestId === requestId));
//     console.log(requestId);
//     console.log(selectedRowData);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };


//   const apiBaseUrl = "http://localhost:8080";

//   const axiosInstance = axios.create({
//     baseURL: apiBaseUrl,
//     timeout: 10000,
//   });

//   useEffect(() => {
//     // Fetch data from backend API
//     axiosInstance
//       .get("/allTripRequests")
//       .then((response) => {
//         setRequests(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching data:", error);
//       });
//   }, []);


//   const filteredRequests = requests.filter((request) => request.requestId == null);

//   const rows = filteredRequests.map((request) => {
//     return {
//       name: request.tourist_name,
//       Fromdate: request.start_date,
//       Todate: request.end_date,
//       Pickup: request.pickup,
//       Destination: request.destination,
//       btn: (
//         <Link
//           key={`view-${request.requestId}`}
//           className="view"
//           onClick={() => openModal(request.requestId)}
//         >
//           View More
//         </Link>
//       ),
//     };
//   });
 
//   const handleRequestlId = (e) => {
//     setRequestId(e.target.value);
//   };

//   return (
//     <div className="d-flex w-100">
//       <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
//         <div className="d-flex flex-row gap-4 my-3 justify-content-between">
//             <p
//             style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
//             className="ms-1 m-0"
//             >

//               <b>Requests</b>
//             </p>
//             <Link to="/driver/driverTrips">
//               <button style={{
//                 width:"10vw", 
//                 borderRadius: "8px",
//                 border: "1px solid #004577",
//                 backgroundColor: "#004577",
//                 color: "#FFFFFF",
//                 fontFamily: "Lato",
//                 fontSize: "20px",
//                 // boxShadow: "0px 4px 40px rgba(0, 69, 119, 0.35)"
//               }}>My Trips</button>
//             </Link>
//         </div>
//         <MDBDataTable
//         striped
//         bordered
//         paging={true}
//         searching={true}
//         //   small
//           data={{
//             // ...data,
//             // rows: data.rows.map((row) => {
//             //   return {
//             //     ...row,
//             //     btn: (
//             //       <button onClick={() => openModal(row)} className="view">
//             //         View More
//             //       </button>
//             //     ),
//             //   };
//             // }),
//             columns : [
//               {
//                 label: "Tourist Name",
//                 field: "name",
//                 sort: "asc",
//                 width: 150,
//               },
//               {
//                 label: "From Date",
//                 field: "Fromdate",
//                 sort: "asc",
//                 width: 150,
//               },
//               {
//                 label: "To Date",
//                 field: "Todate",
//                 sort: "asc",
//                 width: 150,
//               },
//               {
//                 label: "Pickup",
//                 field: "Pickup",
//                 sort: "asc",
//                 width: 250,
//               },
//               {
//                 label: "Destination",
//                 field: "Destination",
//                 sort: "asc",
//                 width: 250,
//               },
//               {
//                 label: "",
//                 field: "btn",
//                 width: 100,
//                 btn: "view-button",
//               },
//             ],
//             rows: rows,
//           }}
//           exportToCSV={true}
//         />
        
//         <Modal show={isModalOpen} onHide={closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Driver Request</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           {requests.find((request) => request.requestId === requestId) ? (
//             <form style={{ fontFamily: "Poppins" }}>
//               <input
//               type="hidden"
//               name="requestId"
//               value={requestId}
//               onChange={handleRequestlId}
//               />
//               <div className="d-flex flex-column gap-3">
//                 <div className="d-flex flex-row justify-content-around ">
//                   <div>
//                     {console.log(requestId)}
//                     <label className="hotel-popup-label">Tourist Name</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       value={selectedRowData?.name}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.name})`}
//                       disabled
//                     ></input>
//                     <div>{selectedRowData?.name}</div>
//                   </div>
//                   <div>
//                     <label className="hotel-popup-label">Phone Number</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       placeholder="076 263 9672"
//                       disabled
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="d-flex flex-row justify-content-around ">
//                   <div>
//                     <label className="hotel-popup-label">From</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "190px" }}
//                       value={selectedRowData?.Fromdate}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.Fromdate})`}
//                       disabled
//                     ></input>
//                   </div>
//                   <div>
//                     <label className="hotel-popup-label">To</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "190px" }}
//                       value={selectedRowData?.Todate}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.Todate})`}
//                       disabled
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="d-flex flex-row justify-content-around ">
//                   <div>
//                     <label className="hotel-popup-label">Pickup</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "190px" }}
//                       value={selectedRowData?.startPlace}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.startPlace})`}
//                       disabled
//                     ></input>
//                   </div>
//                   <div>
//                     <label className="hotel-popup-label">Destination</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "190px" }}
//                       value={selectedRowData?.endPlace}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.endPlace})`}
//                       disabled
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="d-flex flex-row justify-content-between ms-4">
//                 <div>
//                     <label className="hotel-popup-label">Location</label>
//                     <br />
//                     <div className="mapouter">
//                       <div className="gmap_canvas">
//                         <iframe
//                           className="gmap_iframe"
//                           width= "425px"
//                           height="250vh"
//                           frameborder="0"
//                           scrolling="no"
//                           marginheight="0"
//                           marginwidth="0"
//                           src="https://maps.google.com/maps?width=600&amp;height=1000&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//                         ></iframe>
                        
//                       </div>
//                       <style>
//                         .mapouter
//                         {"position:relative;text-align:right;width:100%;height:500px;"}
//                         .gmap_canvas{" "}
//                         {
//                           "overflow:hidden;background:none!important;width:100%;height:500px;"
//                         }
//                         .gmap_iframe {"height:500px!important;"}
//                       </style>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="d-flex flex-row justify-content-around ">
//                   <div>
//                     <label className="hotel-popup-label">Date</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "190px" }}
//                       value={selectedRowData?.date}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder={`(${selectedRowData?.date})`}
//                       disabled
//                     ></input>
//                   </div>
//                   <div>
//                     <label className="hotel-popup-label">Email Address</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       type="email"
//                       placeholder="saran@gmail.com"
//                       disabled
//                     ></input>
//                   </div>
//                 </div> */}
//                 {/* <div className="d-flex flex-row justify-content-around ">
//                   <div>
//                     <label className="hotel-popup-label">Message</label>
//                     <br />
//                     <input
//                       className="hotel-popup-input"
//                       style={{ width: "425px", height: "100px" }}
//                       type="text"
//                       placeholder="eg: Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem EpsumLorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum"
//                       disabled
//                     ></input>
//                   </div>
//                 </div> */}
//                 <dic className="d-flex flex-row justify-content-center gap-5">
//                   <button className="hotel-popup-accept p-2">Accept</button>
//                   <button className="hotel-popup-reject p-2">Reject</button>
//                 </dic>
//               </div>
//             </form>
//             ):(<p>No Data</p>)}
//           </Modal.Body>
//         </Modal>
        
//       </div>
//     </div>
//   );
// }

// export default DriverRequest;



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

function HotelRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRowData] = useState([]);
  const [requests, setRequests] = useState([]);
  const [request_id, setRequestId] = useState("");
  const [inputValue, setInputValue] = useState("");

  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });


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

  const filteredRequests = requests.filter((request) => request.status == null);

  const rows = filteredRequests.map((request) => {
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

  // const requestAcceptProcess = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.put(`/addStatus/${requestId}`, {
  //       status: 1,
  //     });

  //     if (response.status === 200) {
  //       closeModal();
  //       window.location.reload();
  //       console.log("okkkk");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const requestRejectProcess = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.put(`/addStatus/${requestId}`, {
  //       status: 3,
  //     });

  //     if (response.status === 200) {
  //       closeModal();
  //       window.location.reload();
  //       console.log("okkkk");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            rows: rows, // Use the rows you generated
          }}
          exportToCSV={true}
        />

        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hotel Request</Modal.Title>
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
                <dic className="d-flex flex-row justify-content-center gap-5">
                  <button /*onClick={requestRejectProcess}*/ className="hotel-popup-reject p-2">Reject</button>
                  <button /*onClick={requestAcceptProcess}*/ className="hotel-popup-accept p-2">Accept</button>
                </dic>
              </div>
            </form>
            ) : (
              <p>No room found for Tourist ID: {request_id}</p>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default HotelRequest;
