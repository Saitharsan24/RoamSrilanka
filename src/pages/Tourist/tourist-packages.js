import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/tourist/tour_packages.css";
import * as BsIcons from 'react-icons/bs'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function ToursitGuide() {

  const [tourPackages, setTourPackages] = useState([]);

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  // useEffect(() => {
  //   axiosInstance
  //     .get("/viewTourPackages")
  //     .then((res) => {
  //       setTourPackages(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <div
      className="tourist-main d-flex flex-column gap-2 mb-2"
      style={{ width: "inherit" }}
    >
      <div className="tourist-headings w-100">
        <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
          Tour Packages
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
        <div className='d-flex justify-content-center align-items-center' style={{width:"50px", height:"50px", borderRadius:"25px", backgroundColor:"#004577", cursor:"pointer"}}>
            <BsIcons.BsSearch style={{color:"#ffffff"}} />
        </div>
      </div>

      <div className="all-tourist-packages d-flex flex-column guide-top mt-2">
        <div className="package-row d-flex flex-row gap-4 justify-content-around">
         
          <div className="package-card">
            <div className="package-card-image">
              <img src="" alt="" />
            </div>
            <h5>
              Luxury Escape to Sri Lanka 5 Nights
            </h5>
            <div className="package-name-price">
              <p><span>$500</span> per adult</p>
              <a href="./touristPackageView">
              <Button
              style={{
                backgroundColor: "#004577",
                border: "none",
                marginTop: "3px",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: "17px",
                fontWeight: "500"
                }}>
                  Book
              </Button>
              </a>
            </div>
          </div>

        </div>
      </div>
        
        

    </div>
  );
}

export default ToursitGuide;
