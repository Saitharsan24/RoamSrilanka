import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { MDBDataTable } from "mdbreact";
import axios from "axios";

function HPEvent() {
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/getAllEvents"); // Replace with your backend endpoint
        if (response.status === 200) {
          setEvents(response.data);
        } else {
          console.error("Failed to fetch data:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteEvent = async (eventId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmed) {
      try {
        const response = await axiosInstance.delete(`/deleteEvent/${eventId}`);
        if (response.status === 200) {
          // Filter out the deleted event from the events array
          const updatedEvents = events.filter((event) => event.id !== eventId);
          setEvents(updatedEvents);
          window.location.reload();
        } else {
          console.error("Failed to delete event:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  const data = {
    columns: [
      {
        label: "Event No",
        field: "eventId",
        sort: "dsc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 50,
      },
      {
        label: "Location",
        field: "places",
        sort: "asc",
        width: 150,
      },
      {
        label: "View",
        field: "button1",
        width: 50,
        btn: "accept-button",
      },
      {
        label: "Remove",
        field: "button2",
        width: 50,
        btn: "reject-button",
      },
    ],
    rows: events.map((event) => ({
      eventId: event.eventId,
      name: event.name,
      date: event.date,
      places: event.places,
      button1: (
        <Link to={`/holidayPlanner/plannerViewEvent`}>
          <button style={{ border: "inherit" }}>View</button>
        </Link>
      ),
      button2: (
        <button
          style={{ border: "inherit" }}
          onClick={() => handleDeleteEvent(event.eventId)}
        >
          Remove
        </button>
      ),
    })),
  };

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column col-lg-12 p-4 ">
        <div className="d-grid d-md-flex justify-content-md-end">
          <Link to="/holidayPlanner/plannerEvent1">
            <button
              style={{
                width: "15rem",
                borderRadius: "11px",
                border: "1px solid #004577",
                backgroundColor: "#004577",
                color: "#FFFFFF",
                fontFamily: "Lato",
                fontSize: "20px",
                boxShadow: "0px 4px 40px rgba(0, 69, 119, 0.35)",
              }}
              type="submit"
            >
              Add New Event
            </button>
          </Link>
        </div>

        <p
          style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
          className="ms-5 m-0"
        >
          <b>Existing Events</b>
        </p>
        <MDBDataTable
          striped
          bordered
          //   small
          data={data}
        />
      </div>
    </div>
  );
}

export default HPEvent;
