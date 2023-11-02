import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function GuideTrip() {
  const [trips, setTrips] = useState([]);
  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const { sessionData , setSessionData  } = useSession();
  const userId = sessionData.userId;


  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewTrips")
      .then((response) => {
        setTrips(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  console.log("userId", userId);

  const filteredGrideTrips = trips.filter((trip) => {
    return trip.guideId == userId;
  });

  const filteredTripsStatus = filteredGrideTrips.filter((trip) => {
    return trip.status != "0";
  });


  const rows = filteredTripsStatus.map((trip) => {
    return {
      bookingid: trip.tripId,
      fromDate: trip.fromDate,
      toDate: trip.toDate,
      status: determineStatus(trip.status),
      btn: <Link to={`/guide/guideTripForm?tripId=${trip.tripId}&touristId=${trip.userId}`}>View More</Link>,
    };
  });

  function determineStatus(status) {
    if (status == 0) {
      return "Pending";
    } else if (status == 1) {
      return "Accepted";
    } else if (status == 2) {
      return "Completed";
    } else {
      return "Rejected";
    }
  }

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
          <a href="guideRequest">
            <button
              type="button"
              style={{
                border: "1px solid #004577",
                backgroundColor: "white",
              }}
              class="btn shadow-md position-relative"
            >
              <Icon.JournalPlus />
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
          data={{
            columns: [
              {
                label: "Booking ID",
                field: "bookingid",
                sort: "asc",
                width: 150,
              },
              {
                label: "From Date",
                field: "fromDate",
                sort: "asc",
                width: 150,
              },
              {
                label: "To Date",
                field: "toDate",
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
      </div>
    </div>
  );
}

export default GuideTrip;
