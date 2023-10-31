import {React,useState} from "react";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "../../styles/tourist/viewguide.css";
import { useEffect } from "react";
import axios from "axios";

import HireGuidePopup from "./hireGuidePopup";

function ToursitGuide() {

    const [tourGuide, setTourGuide] = useState([]);
    const [hireGuide, setHireGuide] = useState(false);
    const [blur, setBlur] = useState(false);

    const showPopUpHandler = () => {
      setHireGuide(!hireGuide);
      setBlur(!blur);
    }
  
    const closePopUpHandler = () => {
      setHireGuide(!hireGuide);
      setBlur(!blur);
    }

    const [guideId,setGuideId] = useState(JSON.parse(localStorage.getItem("guideId")));

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 10000,
    });

    useEffect(() => {
      console.log(guideId);
      axiosInstance
        .get(`/viewGuide/${guideId}`)
        .then((res) => {
          setTourGuide(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },[guideId]);

  return (
    <>
    {
      hireGuide && <HireGuidePopup className="hire-guide-popup" item={tourGuide} closeModal={closePopUpHandler}/>
    }

    <div
      className={`tourist-main d-flex flex-column gap-2 mb-2 
      ${
        blur ? 'blur-background' : '' // Apply blur class conditionally
        }`}
      style={{ width: "inherit" }}
    >

      <div className="tourist-headings w-100">
        <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
          Tour Guide
        </h2>
        <hr style={{ margin: "0px" }} />
      </div>

      <div className="view-guide-card">
        <div className="guide-view-image">
            <div className={`guide-view-image-1 guide-image-count${tourGuide.userId-1}`}></div>
            <div className="guide-detail-row">
              <p>Pricing and Fees (per day):</p>
              <input value={`$ ${tourGuide.fee}`} className="special-guide-input" type="text" disabled/>
            </div>
        </div>
        <div className="guide-view-details">
          <h2>{tourGuide.guideName}</h2>
          <div className="guide-main-details">
            <div className="guide-detail-row">
              <p>Specializations:</p>
              <input value={tourGuide.specialization} type="text" disabled/>
            </div>
            <div className="guide-detail-row sltb-column">
              <p>Experience:</p>
              <input value={tourGuide.experience} type="text" disabled/>
            </div>
            <div className="guide-detail-row">
              <div className="d-flex flex-column">
                  <p>Rating:</p>
                  <p style={{ color: "#DB163A" }}>
                      <AiIcons.AiFillStar /> {tourGuide.rating}
                    </p>
              </div>
              <div className="d-flex flex-column">
                  <p>SLTDA Registration no:</p>
                  <input value={tourGuide.sltdaNo} type="text" disabled/>
              </div>  
            </div>
            <div className="guide-detail-row">
              <p>Description:</p>
             <textarea value={tourGuide.description} className="" name="" id="" cols="30" rows="10" disabled></textarea>
            </div>
            <div className="guide-detail-row">
            <Button
                  className="book-tour-btn special-guide-btn" 
                  variant="primary"
                  style={{
                    backgroundColor: "#004577",
                    border: "none",
                    marginTop: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontSize: "12px",
                  }}
                  onClick={showPopUpHandler}
                >
                  Hire guide
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ToursitGuide;
