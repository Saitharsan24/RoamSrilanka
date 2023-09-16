import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/tourist/tour_packages.css";

function ToursitGuide() {
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

      <div className="tourist-packages-view d-flex flex-column guide-top mt-2 align-items-center p-4">
          <div className="view-package-row-01 d-flex flex-row">
            <div className="package-view-image">

            </div>
            <div className="d-flex flex-column">
              <h3>Luxury Escape to Sri Lanka 5 Nights</h3>
              <p><span>$500</span> per adult</p>
              <div className="package-details-list">
                <p className="mt-2"><span>Accomodation:</span></p>
                <p><span>Tour guide:</span></p>
                <p><span>Places included:</span>
                  <ul style={{marginLeft:"80px"}}>
                    <li>Place 1</li>
                    <li>Place 2</li>
                    <li>Place 3</li>
                  </ul>
                </p>
              </div>
              
            </div>
          </div>
          <div className="view-package-row-02 mt-3 d-flex flex-row gap-4">
              <div className="row-2-description">
                <h4>
                  Description
                </h4>
                <p className="mt-2">
                  Lorem ipsum dolo Lorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum dolo
                  Lorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum dolo
                  Lorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum dolo
                </p>
              </div>
              <div className="row-2-itinerary d-flex align-items-end justify-content-center">
                <Button
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop: "3px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "17px",
                  fontWeight: "500",
                  width:"80%"
                  }}>Book</Button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ToursitGuide;
