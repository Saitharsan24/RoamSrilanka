import React from "react";
import "./../../styles/Homepage/flashElement.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

function FlashElement() {
  return (
    <div className="main-div">
      <div className="container mb-6 d-flex-column ">
        <div className="main-text container-fluid">
          <h1>
            Dare to live <span className="redText">the life</span> <br />
            you've always <br />
            <span className="redText"> wanted.</span>
          </h1>
        </div>
        <div className="sub-text m-lg-3 container-fluid">
          <p>
          Life is short and the world is wide. So, better get started.
          </p>
        </div>
        <div className="explore-btn m-3 mt-5 container-fluid">
          <Button variant="primary bg-#DB163A" size="lg">Let's Explore</Button>
        </div>  
      </div>
    </div>
  );
}

export default FlashElement;
