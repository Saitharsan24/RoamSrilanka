import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import DeleteConfirm from "../../components/DeleteConfirm";
import HPViewItem from "./HPViewItem";

function HPItem() {
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [events, setEvents] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [rowData, setRowData] = useState([]);

  const handleRowClick = (fairId) => {
    navigate(`/holidayPlanner/plannerViewItem/${fairId}`);
  }

  const handleDeleteEvent = (eventId) => {
    setEventToDelete(eventId);
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axiosInstance.delete(
        `/deleteFair/${eventToDelete}`
      );
      if (response.status === 200) {
        const updatedEvents = events.filter(
          (event) => event.id !== eventToDelete
        );
        setEvents(updatedEvents);
        setDialogVisible(false);
        window.location.reload(false);
      } else {
        console.error("Failed to delete event:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get("/getAllFairs")
      .then((res) => {
        const filteredFairs = res.data.filter(
          (fairs) => fairs.status === 0
        );
        setRowData(filteredFairs);
        console.log(filteredFairs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = {
    columns: [
      {
        label: "Item No",
        field: "fairId",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Rent",
        field: "rent",
        sort: "asc",
        width: 50,
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
    rows: rowData.map((event) => ({
      fairId: event.fairId,
      name: event.fairname,
      rent: event.rent,
      button1: (
        <button
          style={{ border: "inherit", width: "50%" }}
          className="hp-accept"
          onClick={() => handleRowClick(event.fairId) & console.log("Clicked View for fair ID:", event.fairId)}
        >
          View
        </button>
      ),
      button2: (
        <button
          style={{ border: "inherit", width: "50%" }}
          onClick={() => handleDeleteEvent(event.fairId)}
          className="hp-reject"
        >
          Remove
        </button>
      ),
    })),
  };

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column col-lg-12 p-4 ">
        {/* {selectedEventId ? (
          <HPViewItem
            fairId={selectedEventId}
            onBack={() => setSelectedEventId(null)}
          />
        ) : ( */}
          <div>
            <div className="d-grid d-md-flex justify-content-md-end">
              <Link to="/holidayPlanner/plannerItem1">
                <button
                  className=""
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
                  Add New Item
                </button>
              </Link>
            </div>

            <p
              style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
              className="ms-5 m-0"
            >
              <b>Existing Items</b>
            </p>
            <MDBDataTable
              striped
              bordered
              //   small
              data={data}
            />

            {isDialogVisible && (
              <DeleteConfirm
                message="Are you sure you want to delete this event?"
                onDialog={(confirmed) => {
                  if (confirmed) {
                    handleConfirmDelete();
                  } else {
                    handleDialogClose();
                  }
                }}
              />
            )}
          </div>
        {/* )} */}
      </div>
    // </div>
  );
}

export default HPItem;
