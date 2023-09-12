import React from "react";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
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
              <p><span>$500</span>per adult</p>
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
            </div>
          </div>
          <div className="package-card">x</div>
          <div className="package-card">x</div>
        </div>
      </div>
        
        

    </div>
  );
}

export default ToursitGuide;
