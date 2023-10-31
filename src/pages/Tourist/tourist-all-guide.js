import React from 'react'
import * as AiIcons from "react-icons/ai";
import { Button } from "react-bootstrap";

function TouristAllGuide() {
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
            <div className="dashboard-left-top-places d-flex flex-row gap-3 justify-content-center align-items-center">
            <div className="place-01 guide-tile">
            <div className="guide-image"></div>
            <div className="guide-tile-details">
                <p>Galle</p>

                <p style={{ color: "#DB163A" }}>
                  <AiIcons.AiFillStar /> 3.8
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
                >
                  Hire guide
                </Button>
              </div>
          </div>
            </div>
        </div>

    </div>
  )
}

export default TouristAllGuide
