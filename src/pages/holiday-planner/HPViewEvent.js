import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/updatepack.css";

function HPViewEvent({ eventId, onBack }) {
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await axiosInstance.get(
          `/getParticularEvent/${eventId}`
        );
        if (response.status === 200) {
          setSelectedEvent(response.data);
        } else {
          console.error("Failed to fetch data:", response.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchEventById();
  }, []);

  if (!selectedEvent) {
    return <div>No Record</div>;
  }

  const handleDeleteEvent = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmed) {
      try {
        const response = await axiosInstance.delete(`/deleteEvent/${eventId}`);
        if (response.status === 200) {
          const updatedEvents = events.filter(
            (event) => event.eventId !== eventId
          );
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

  return (
    <div>
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 m-5 justify-content-around"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontWeight: "700",
            fontSize: "auto",
            color: "#DB163A",
          }}
          className="d-flex m-5"
        >
          Event Name: {selectedEvent.name}
        </h1>
        <div className="d-flex align-items-center justify-content-around flex-column flex-md-row flex-lg-row col-12">
          <div
            className="d-flex flex-column col-md-4 col-lg-4 gap-4"
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "11px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="d-flex flex-column col-12">
              <div className="d-none d-sm-flex d-md-flex d-lg-flex flex-row justify-content-evenly">
                <img
                  className="img-fluid"
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "11px",
                  }}
                  src={require("../../assets/images/Event1.png")}
                ></img>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-6 col-lg-6 gap-3 flex-column">
            <form className="pack">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column justify-content-center m-2">
                  <h2>Event Information</h2>
                  <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
                    <label>
                      Name:
                      <input
                        className="p-2"
                        type="text"
                        value={selectedEvent.name}
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Days:
                      <input
                        className="p-2"
                        type="number"
                        value={selectedEvent.days}
                        readOnly
                      ></input>
                    </label>
                  </div>
                  <div className="d-flex flex-column justify-content-center m-2">
                    <label>
                      Date:
                      <input
                        className="p-2"
                        value={selectedEvent.date}
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Location:
                      <input
                        className="p-2"
                        type="text"
                        value={selectedEvent.places}
                        readOnly
                      ></input>
                    </label>
                    <label>
                      Description:
                      <textarea
                        className="p-2"
                        type="text"
                        value={selectedEvent.description}
                        readOnly
                        style={{ minHeight: "50px" }}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between mx-5 mb-5">
          <button className="btn-cancel" onClick={handleDeleteEvent}>
            Delete
          </button>
          <button className="btn-next" onClick={onBack}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HPViewEvent;
