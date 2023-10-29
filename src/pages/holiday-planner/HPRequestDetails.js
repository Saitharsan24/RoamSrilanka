import React, { useState, useEffect } from "react";
// import Headeruser from "../components/headerusers";
// import Sidebar from "../components/holidayplanner-sidebar";
//import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import "./../styles/updatepack.css";
import profile from "../../assets/images/profile_pic.png";
import axios from "axios";

const HPRequestDetails = () => {
  const paraData = useParams();
  console.log(paraData.p_bookingID);
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [requestData, setRequestData] = useState({});
  const [userData, setUserData] = useState({});
  const [packageData, setPackageData] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/request/" + paraData.p_bookingID)
      .then((res) => {
        setRequestData(res.data);
        console.log(res.data);

        axiosInstance
          .get("/users/" + res.data.touristID)
          .then((res2) => {
            setUserData(res2.data);
            console.log(res2.data);
          })
          .catch((err) => {
            console.log(err);
          });

        axiosInstance.get("/packages/" + res.data.packageID).then((res3) => {
          setPackageData(res3.data);
          console.log(res3.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRowClick = (packageID) => {
    navigate(`/holidayPlanner/plannerViewPackage/${packageID}`);
  };

  const [selectedTourGuide, setSelectedTourGuide] = useState([]);

  const handleTourGuideChange = (event) => {
    setSelectedTourGuide(event.target.value);
  };

  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const [selectedHotel, setSelectedHotel] = useState([]);
  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  return (
    <div className="d-flex flex-column">
      {/* <Headeruser /> */}
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        {/* <Sidebar /> */}
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around mt-4">
          <div
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "15px",
              boxShadow:
                "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
            }}
            className="d-flex flex-column gap-3 col-6 p-5"
          >
            <div className="d-lg-flex d-md-flex d-flex flex-lg-row justify-content-between">
              <img
                src={profile}
                className="object-fit-cover img-fluid col-3"
                style={{ borderRadius: "50%" }}
              ></img>
              <button
                className="change_pic col-4"
                style={{ height: "3rem", width: "Auto" }}
              >
                Message to {userData.userFullname}
              </button>
            </div>

            <div>
              <p className="name px-2 justify-content-center">
                {userData.userFullname}
              </p>
              <p className=" bio m-0 p-3">Description</p>
              <div
                className="d-flex align-self-center p-3"
                style={{ borderRadius: "15px", backgroundColor: "#F1F1F2" }}
              >
                <p>
                  10 Lines Essay is considered one of the most enjoyable and
                  fun-filled experiences to express thoughts, enhance spoken and
                  written English Skills.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Request for :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{packageData.package_name}</p>
              </div>
              <button
                className=" change_pic col-4 flex-fill"
                style={{ height: "2rem" }}
                onClick={() =>
                  handleRowClick(packageData.packageID) &
                  console.log(
                    "Clicked View for package ID:",
                    packageData.packageID
                  )
                }
              >
                View package
              </button>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>From Date :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{requestData.fromdate}</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>To Date :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{requestData.todate}</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Hotel :</p>
              </div>
              <div className="col-4 hp-req">
                <select
                  name="hotelSelect"
                  value={selectedHotel}
                  onChange={handleHotelChange}
                >
                  <option value="Hilton">Hilton</option>
                  <option value="Marriot">Marriot</option>
                  <option value="Cinnamon Grand">Cinnamon Grand</option>
                  {/* Add other hotel options as needed */}
                </select>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Vehicle :</p>
              </div>
              <div className="col-4 hp-req">
                <select
                  name="vehicleSelect"
                  value={selectedVehicle}
                  onChange={handleVehicleChange}
                >
                  <option value="Car">Car</option>
                  <option value="Van">Van</option>
                  <option value="Bus">Bus</option>
                  {/* Add other vehicle options as needed */}
                </select>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              {packageData.trip_guide && (
                <div className="d-flex flex-column flex-lg-row justify-content-left  gap-2">
                  <div className="col-8">
                    <p>Tour guide:</p>
                  </div>
                  <div className="col-4 hp-req">
                    <select
                      name="tourGuideSelect"
                      value={selectedTourGuide}
                      onChange={handleTourGuideChange}
                    >
                      <option value="Mr Abeywikrama">Mr Abeywikrama</option>
                      <option value="Mr Smith">Mr Smith</option>
                      <option value="Ms Johnson">Ms Johnson</option>
                      {/* Add other tour guide options as needed */}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-row justify-content-between mx-2">
              <button className="btn-cancel" type="submit">
                Reject
              </button>
              <button className="btn-next" type="submit">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPRequestDetails;
