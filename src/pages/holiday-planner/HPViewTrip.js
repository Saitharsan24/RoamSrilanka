import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function getStatusText(status) {
  switch (status) {
    case 0:
      return { text: "Pending", color: "orange" };
    case 1:
      return { text: "Ongoing", color: "blue" };
    case 2:
      return { text: "Completed", color: "green" };
    case 3:
      return { text: "Rejected", color: "red" };
    default:
      return { text: "Unknown", color: "black" };
  }
}

const HPViewTrip = () => {
  const paraData = useParams();
  console.log("booking id", paraData);

  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const [request, setRequest] = useState([]);
  const [touristDetails, setTouristDetails] = useState([]);
  const [packageName, setPackageName] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/request/${paraData.p_bookingID}`)
      .then((res) => {
        setRequest(res.data);
        console.log("request", request);
        axiosInstance
          .get(`/viewUser/${res.data.touristID}`)
          .then((res2) => {
            setTouristDetails(res2.data);
            console.log(res2.data);
            console.log("tourist details", touristDetails);
            axiosInstance
              .get(`/packages/${res.data.packageID}`)
              .then((res3) => {
                setPackageName(res3.data);
                console.log("package name", res3.data);
                console.log(res3.data);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [guideDetails, setGuideDetails] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/viewUser/${request.guide_id}`)
      .then((res3) => {
        setGuideDetails(res3.data);
        console.log(res3.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [request.guide_id]);

  console.log("guide details", guideDetails);

  const [driverDetails, setDriverDetails] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/viewUser/${request.driver_id}`)
      .then((res4) => {
        setDriverDetails(res4.data);
        console.log(res4.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [request.driver_id]);

  console.log("driver details", driverDetails);

  const [hotelDetails, setHotelDetails] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/viewHotel/${request.hotel_id}`)
      .then((res5) => {
        setHotelDetails(res5.data);
        console.log(res5.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [request.hotel_id]);

  console.log("hotel details", hotelDetails);

  const handleCancelButton = () => {
    window.history.back();
  };

  const handleChatClick = () => {
    navigate(`/holidayPlanner/hpchat`);
  };

  return (
    <div className="d-flex gap-3 w-100 align-items-center justify-content-around ">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 col-6 p-5 mt-5 mb-5"
      >
        <div className="d-lg-flex d-md-flex d-flex flex-lg-row justify-content-between pack">
          <h2 className="m-2 justify-content-center">Trips Information</h2>
          <button
            className="change_pic col-4"
            onClick={() => handleChatClick()}
            style={{ height: "3rem", width: "Auto" }}
          >
            Message to {touristDetails.userFullname}
          </button>
          {/* <Icon.ChatLeftHeartFill className="col-2" size={40} color="#004577"/> */}
        </div>
        <div className="d-flex flex-column flex-lg-row m-2 gap-3">
          <form className="pack">
            <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
              <label style={{ border: "none" }}>
                Tourist Name:
                <input
                  className="p-2"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={touristDetails.userFullname}
                  readOnly
                ></input>
              </label>
              <label>
                Package Name:
                <input
                  className="p-2"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={packageName.package_name}
                  readOnly
                ></input>
              </label>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
              <label>
                Status:
                <input
                  className="p-2"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={getStatusText(request.status).text}
                  readOnly
                ></input>
              </label>
              <label>
                From Date:
                <input
                  className="p-2"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={request.fromdate}
                  readOnly
                ></input>
              </label>
              <label>
                To Date:
                <input
                  className="p-2"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={request.todate}
                  readOnly
                ></input>
              </label>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
              <label>
                Location:
                <input
                  className="p-2"
                  type="text"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={packageName.places}
                  readOnly
                ></input>
              </label>
              <label>
                Hotel:
                <input
                  className="p-2"
                  type="text"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={hotelDetails.hotelName}
                  readOnly
                ></input>
              </label>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between m-2 gap-3">
              <label>
                Driver Name:
                <input
                  className="p-2"
                  type="text"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={driverDetails.userName}
                  readOnly
                ></input>
              </label>
              <label>
                Guide Name:
                <input
                  className="p-2"
                  type="text"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={guideDetails.userName}
                  readOnly
                ></input>
              </label>
            </div>
            <div className="d-flex flex-column flex-row justify-content-justify m-2 gap-3">
              <label>
                Description:
                <textarea
                  className="p-2"
                  type="text"
                  style={{ border: "none", backgroundColor: "#F8F8FF" }}
                  placeholder={packageName.discription}
                  readOnly
                ></textarea>
              </label>
            </div>
            <div className="d-flex flex-lg-row flex-md-column flex-column gap-sm-3 justify-content-center mx-2">
              <button
                className="btn-cancel"
                onClick={handleCancelButton}
                type="submit"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HPViewTrip;
