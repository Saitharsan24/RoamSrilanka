import React, { useState,useEffect } from "react";
// import Headeruser from "../components/headerusers";
// import Sidebar from "../components/holidayplanner-sidebar";
//import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import "./../styles/updatepack.css";
import profile from "../../assets/images/profile_pic.png";
import axios from "axios";

const HPFairDetails = () => {
  const paraData = useParams();
  console.log(paraData.fairrequestID);
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [requestData, setRequestData] = useState({});
  const [userData, setUserData] = useState({});
  const [fairData, setFairData] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/getAllFairrequest/" + paraData.fairrequestID)
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

        axiosInstance
          .get("/getParticularFair/" + res.data.fair_no)
          .then((res3) => {
            setFairData(res3.data);
            console.log(res3.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRowClick = (fairId) => {
    navigate(`/holidayPlanner/plannerViewItem/${fairId}`);
  };

  const handleChatClick = () => {
    navigate(`/holidayPlanner/hpchat`);
  };

  const editFairRequestStatus = () => {
    axiosInstance
      .put("/updateFairRequestStatus/" + paraData.fairrequestID)
      .then((res) => {
        console.log(res.data);
        navigate("/holidayPlanner/plannerRequest");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
                onClick={() => handleChatClick()}
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
                <p>{fairData.fairname}</p>
              </div>
              <button
                className=" change_pic col-4 flex-fill"
                style={{ height: "2rem" }}
                onClick={() =>
                  handleRowClick(fairData.fairId) &
                  console.log("Clicked View for Fair ID:", fairData.fairId)
                }
              >
                View fair
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
            <div className="d-flex flex-row justify-content-end mx-2">
              <button className="btn-cancel" type="submit"
              method = " PUT"
              onClick={editFairRequestStatus}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPFairDetails;
