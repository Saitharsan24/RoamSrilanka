import React from "react";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "../../styles/tourist/tourist_guide.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSession } from '../../Context/SessionContext';
import { useEffect } from "react";
import { useState } from "react";

function ToursitGuide() {

  const [tourGuide, setTourGuide] = useState([]);
  const [topGuide,setTopGuide] = useState([]);

  const hireGuideHandler = (guideId, imageName) => 
    {
        localStorage.setItem("guideImage", JSON.stringify(imageName));
        localStorage.setItem("guideId", JSON.stringify(guideId));
        window.location.href = '/tourist/touristGuideView';
    }

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  useEffect(() => {
    axiosInstance
      .get("/viewGuides")
      .then((res) => {
        setTourGuide(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div
      className="tourist-main d-flex flex-column gap-2 mb-2"
      style={{ width: "inherit", height: "100%" }}
    >
      <div className="tourist-headings w-100">
        <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
          Tour Guide
        </h2>
        <hr style={{ margin: "0px" }} />
      </div>

      <div
        className="search-bar d-flex flex-row justify-content-between align-items-center"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "2rem",
          marginTop: ".5rem",
          marginBottom: ".5rem",
          width: "25rem",
          height: "2.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Search accessories"
          style={{
            margin: "0rem",
            paddingLeft: "1.3rem",
            fontWeight: "500",
            fontSize: "1rem",
            border: "none",
            width: "22rem",
            height: "2.5rem",
            borderRadius: "2rem",
          }}
        />
      </div>

      <div className="dashboard-left-top guide-top">
        <div className="d-flex flex-row align-items-center justify-content-between" style={{paddingRight:'35px'}} >  
          <h4 className="our-guide-class" style={{marginLeft:"20px"}}>Our tour guides</h4>
          <Link to={"/tourist/touristAllGuide"}>
          <p style={{margin:'0px', color:'#DB163A', fontSize:'15px',fontWeight:'500'}}>View all</p>
          </Link>
        </div>
        <div className="dashboard-left-top-places d-flex flex-row gap-3 justify-content-center align-items-center">


        {tourGuide.slice(0, 5).map((guide, index) => (
          <div key={index} className="place-01 guide-tile">
            <div className={`guide-image guide-image-count${index}`}></div>
            <div className="guide-tile-details">
                <p>{guide.guideName}</p>

                <p style={{ color: "#DB163A" }}>
                  <AiIcons.AiFillStar />{guide.rating}
                </p>
                <Button
                  className="book-tour-btn" 
                  variant="primary"
                  style={{
                    backgroundColor: "#004577",
                    border: "none",
                    marginTop: "3px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontSize: "12px",
                  }}
                  onClick={()=>hireGuideHandler(guide.userId,`guide-image-count${index}`)}
                >
                  Hire guide
                </Button>
              </div>
          </div>
            ))}

        </div>  
      </div>
      
      <div className="guide-bottom d-flex flex-row justify-content-center gap-2">
        <div className="guide-bottom-left d-flex flex-column">
          <div className="guide-bottom-left-heading dashboard-left-top d-flex flex-row justify-content-between">
            <h4 className="our-guide-class">My reviews</h4>
            <p className="margin-right-view" style={{margin:'0px'}}>View all</p>
          </div>

        </div>

        <div className="guide-bottom-right">
          <div className="guide-bottom-left-heading dashboard-left-top d-flex flex-row justify-content-between">
              <h4 className="our-guide-class">My requests</h4>
              <p className="margin-right-view" style={{margin:'0px'}}>View all</p>
              
          </div>


          <div className="new-message d-flex flex-column align-items-start gap-2">
              
                <div className="new-request-one d-flex flex-row gap-3">
                  <div className="request-div d-flex flex-column">
                    <p>Tour guide request #12</p>
                    <p>28.10.2023</p>
                  </div>
                  <div className="request-view-div d-flex align-items-center">View request</div>
                </div>

                <div className="new-request-one d-flex flex-row gap-3">
                  <div className="request-div d-flex flex-column">
                    <p>Tour guide request #12</p>
                    <p>28.10.2023</p>
                  </div>
                  <div className="request-view-div d-flex align-items-center">View request</div>
                </div>

                <div className="new-request-one d-flex flex-row gap-3">
                  <div className="request-div d-flex flex-column">
                    <p>Tour guide request #12</p>
                    <p>28.10.2023</p>
                  </div>
                  <div className="request-view-div d-flex align-items-center">View request</div>
                </div>
              
          </div>
        </div>
      </div>

    </div>
  );
}

export default ToursitGuide;

