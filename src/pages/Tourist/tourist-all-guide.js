import React from 'react'
import * as AiIcons from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSession } from '../../Context/SessionContext';
import { useEffect } from "react";
import { useState } from "react";

function TouristAllGuide() {


    const [tourGuide, setTourGuide] = useState([]);

    // Split the tourGuide array into groups of 5
    const tourGuideRows = [];
    for (let i = 0; i < tourGuide.length; i += 5) {
    tourGuideRows.push(tourGuide.slice(i, i + 5));
    }

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
        // console.log(res.data);
        setTourGuide(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  });

  return (
    <div
        className="tourist-main d-flex flex-column gap-2 mb-2"
        style={{ width: "inherit" }}
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
            </div>
            <div className="dashboard-left-top-places d-flex gap-3 justify-content-center align-items-center">

                    {tourGuideRows.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((guide, index) => (
                        <div className="place-01 guide-tile mb-4" key={index}>
                            <div className={`guide-image guide-image-count${rowIndex}-${index}`}></div>
                            <div className="guide-tile-details">
                            <p>{guide.guideName}</p>
                            <p style={{ color: "#DB163A" }}>
                                <AiIcons.AiFillStar /> {guide.rating}
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
                                onClick={()=>hireGuideHandler(guide.userId,`guide-image-count${rowIndex}-${index}`)}
                                >
                                Hire guide
                                </Button>

                            </div>
                        </div>
                        ))}
                    </div>
                    ))}
            </div>
        </div>

    </div>
  )
}

export default TouristAllGuide
