import React from "react";
import Headeruser from "../components/headerusers";
import "../styles/admin_tourist_view_detail.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Adminsidebar from "../components/admin-sidebar";


function Admin_tourist_details() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
      
      <React.Fragment>
      <div className=" full d-flex flex-column">
        <div>
        <Headeruser />
        </div>
      <div className="d-flex">
          <Adminsidebar />
          <div className="w-100 d-flex justify-content-center  align-items-center ">
            <div className="  d-flex  h-75 w-75 bg-white">
            
                <div className="d-flex flex-column col-12 ">
                
                      <div className="d-flex flex  justify-content-around align-content-center">
                           
                                  <div className=" d-flex flex-column justify-content-center align-content-center col-10">
                                    <p>Basic Information About Brad Simmons</p>
                                      <ul>
                                        <li>UserName:</li>
                                        <li>ID:</li>
                                        <li>User Type:</li>
                                      </ul>

                                    </div>
                                  <div className="d-flex col-2">
                                    <p>Rating</p>
                                    </div>

                            
                       
                      </div>

                      <div><p>Personal Information</p></div>
                        
                     
                </div>
               
            </div>
                    
          </div>
        </div>

      </div>
    
    </React.Fragment>
  );
}

export default Admin_tourist_details ;
