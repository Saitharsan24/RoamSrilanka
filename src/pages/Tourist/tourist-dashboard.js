import React from "react";
import { Button } from "react-bootstrap";
import '../../styles/tourist/touristdashboard.css'
import ResponsiveCalendar from "../../components/calender.js";
import profile_pic from "./../../assets/images/profile_pic.png";
import galle_tower from "./../../assets/images/galle_tower.jpeg";


function TouristDashboard() {
  return (
    <div className='tourist-main d-flex flex-row gap-2 mb-2' style={{width:"inherit"}}>
      
      <div className="dashboard-left d-flex flex-column gap-2">
        <div className="dashboard-left-top">

          <h4>Famous places to visit</h4>
          <div className="dashboard-left-top-places d-flex flex-row gap-3 justify-content-center align-items-center">

            <div className="place-01">
              <div className="place-image">
              </div>
              <p>Galle</p>
              <Button
                className="book-tour-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "12px",
                }}
              >
                Book tour
              </Button>
            </div>

            <div className="place-01">
              <div className="place-image">
                
              </div>
              <p>Galle</p>
              <Button
                className="book-tour-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "12px",
                }}
              >
                Book tour
              </Button>
            </div>

            <div className="place-01">
              <div className="place-image">
                
              </div>
              <p>Galle</p>
              <Button
                className="book-tour-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "12px",
                }}
              >
                Book tour
              </Button>
            </div>

            <div className="place-01">
              <div className="place-image">
                
              </div>
              <p>Galle</p>
              <Button
                className="book-tour-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "12px",
                }}
              >
                Book tour
              </Button>
            </div>

          </div>
        </div>  

        <div className="dashboard-left-bottom d-flex flex-row gap-2 h-100">
          <div className="dashboard-left-bottom-message">
            <h4>Pending requests</h4>
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
              <div className="new-request-one d-flex flex-row gap-3">
                <div className="request-div d-flex flex-column">
                  <p>Tour guide request #12</p>
                  <p>28.10.2023</p>
                </div>
                <div className="request-view-div d-flex align-items-center">View request</div>
              </div>
              

            </div>
          </div>

          <div className="dashboard-left-bottom-message">
            <h4>New Messages</h4>
            <div className="new-message d-flex flex-column align-items-start gap-2">
              
              <div className="new-message-one d-flex flex-row gap-3">
                <div className="message-image"></div>
                <div className="message-content d-flex flex-column justify-content-center">
                  <h5>Fat Mat Boy</h5>
                  <div className="new-message-content">
                  <p>Hi Madam, your tour plan is ready.</p>
                  <span className="d-flex justify-content-end" style={{fontSize:"14px", color:"#DB163A"}}><p>10.39 pm</p></span>
                  </div>
                </div>
              </div>
              <div className="new-message-one d-flex flex-row gap-3">
                <div className="message-image"></div>
                <div className="message-content d-flex flex-column justify-content-center">
                  <h5>Fat Mat Boy</h5>
                  <p>Hi Madam, your tour plan is ready.</p>
                  <span className="d-flex justify-content-end" style={{fontSize:"14px", color:"#DB163A"}}><p>10.39 pm</p></span>
                </div>
              </div>
              <div className="new-message-one d-flex flex-row gap-3">
                <div className="message-image"></div>
                <div className="message-content d-flex flex-column justify-content-center">
                  <h5>Fat Mat Boy</h5>
                  <div className="new-message-content">
                  <p>Hi Madam, your tour plan is ready.</p>
                  <span className="d-flex justify-content-end" style={{fontSize:"14px", color:"#DB163A"}}><p>10.39 pm</p></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>

      <div className="dashboard-right d-flex flex-column gap-4">
        <div className="dashboard-right-calender d-flex flex-column align-items-center"><ResponsiveCalendar/></div>
        <div className="dashboard-right-trips d-flex flex-column justify-content-start">
          <h4>My Trips on <span>28.09.2023</span></h4>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  )
}

export default TouristDashboard;
