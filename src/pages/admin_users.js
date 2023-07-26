import React from "react";
import Headeruser from "../components/headerusers";
import "../styles/admin_users.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Adminsidebar from "../components/admin-sidebar";

function Adminusers() {
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
          <div className="col-lg-10 ">
                        <div className="d-flex flex-column justify-content-around  align-items-center gap-5">
                               <div className="d-flex flex-row justify-content-around  align-items-center gap-5 mt-5 w-75">
                                         <box className="box d-flex flex-row justify-content-around  align-items-center mt-5 w-25  gap-3" >
                                          <img src={profile}         className=" profile-pic object-fit-cover img-fluid m-auto col-3 round-cricle"   ></img><p style={{fontSize:"36",fontWeight:"bold",color:"#004577",marginTop:"20px"}}>Tourist</p></box>
                                         <box className=""><p>Hotel</p></box>
                               </div>
                               <div className="d-flex flex-row justify-content-around  align-items-center gap-5 mt-5 w-75">
                                         <box className=""> <p>Tour Guide</p></box>
                                         <box className=""><p>Driver</p></box>
                               </div>
                               <div className="d-flex flex-row justify-content-around  align-items-center gap-5 mt-5 w-100">
                               <box className=""><p>Holidayplanner</p></box>
                               </div>

                                
                        </div>

                       

         </div>
     </div>
  </div>
    
    </React.Fragment>
  );
}

export default Adminusers ;
