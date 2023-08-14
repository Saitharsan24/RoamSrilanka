import React from "react";
import Headeruser from "../../components/headerusers";
import "../../styles/admin/admin_profile.css";
import profile from "../../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import AdminSidebar from "../../components/admin-sidebar";

function AdminProfile() {
  

  return (
      
      <React.Fragment>
          <div className="admin-profile w-100 d-flex justify-content-center  align-items-center ">
          <div className="  d-flex justify-content-center  align-items-center bg-white mt-5 mb-5 w-75" style={{borderRadius:"20px"}} >
              <div className="d-flex flex-column justify-content-around  align-items-center ">
                <div className=" d-flex flex-column flex-md-row flex-sm-row justify-content-around  align-items-center gap-5  ">
                            <div className=" d-flex flex-column flex-md-row flex-sm-row justify-content-around  align-items-center mt-5 ">
                                  <img
                                  src={profile}
                                  className=" profile-pic object-fit-cover img-fluid m-auto  round-cricle"   ></img>
                                  </div>
                                  <div className="d-flex flex-column justify-content-around  align-items-center w-75 mt-5">
                                          <p style={{fontSize:"32px",fontWeight:"bold",color:"#004577",}}>Manokaran Keethapriya</p>
                                          <div className="d-flex flex-column flex-md-row flex-sm-row justify-content-around  align-items-center gap-3">
                                              <button className=" btn-change-pic  " style={{ height: "3rem", width: "Auto",color: "#FFFFFF" }} >
                                                Change Profile Picture
                                              </button>
                                              <div className="Acc-1 d-flex flex-column justify-content-around  align-items-center p-1" style={{backgroundColor:"rgb(200, 200, 200)"}} >
                                            <a href="/admin/adminchangepassword">  <span className="text-dark">Change Password</span><br/>
                                              <span className=" text-danger"> Change your account password </span></a>
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
                              <button className="btn-update">Update Details</button>
                              </div>

              </div>     
            </div>
            </div>         
    </React.Fragment>
  );
}

export default AdminProfile ;
