import React from "react";
import Headeruser from "../components/headerusers";
import "../styles/admin_profile.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Adminsidebar from "../components/admin-sidebar";

function Adminprofile() {
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
              <div className="d-flex flex-column ">
                <div className=" d-flex flex-column flex-md-row flex-sm-row justify-content-around  align-items-center gap-5 ">
                              <img
                                  src={profile}
                                  className=" profile-pic object-fit-cover img-fluid m-auto col-3 round-cricle"   ></img>
                      
                              <div className="d-flex flex-column w-75">
                                      <p style={{fontSize:"32px",fontWeight:"bold",color:"#004577",}}>Manokaran Keethapriya</p>
                                      <div className="d-flex flex-column flex-md-row flex-sm-row gap-3">
                                              <button className=" change_pic col-4 " style={{ height: "3rem", width: "Auto" }} >
                                                Change Profile Picture
                                              </button>
                                              <div className="Acc2 d-flex flex-column " >
                                              <p>Change Password</p>
                                              <p className=" text-danger"> Change your account password </p>
                                              </div>
                                      </div>
                              

                      </div>
                      
                </div>

                {/* form */}
                         <div className="d-flex flex-column align-items-center justify-content-around mt-5 ">
                                  
                                                <table class="tbl-square">
                                            <tr>
                                                <td class="type1">Username :</td>
                                                <td class="type2">Keethapriya</td>
                                            </tr>
                                            <tr>
                                                <td class="type1">Email :</td>
                                                <td class="type2">keethapriya@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td class="type1">NIC Number :</td>
                                                <td class="type2">991710876V</td>
                                            </tr>
                                            <tr>
                                                <td class="type1">Contact Number :</td>
                                                <td class="type2">0775695689</td>
                                            </tr>

                                        </table> 
                              </div>

                              <div className="d-flex flex-colum align-items-center justify-content-center mt-4 mb-5">
                                  <button className="update-button">Update Details</button>
                              </div>

              </div>
                   
              
            </div>
                    
          </div>
        </div>

      </div>
    
    </React.Fragment>
  );
}

export default Adminprofile ;
