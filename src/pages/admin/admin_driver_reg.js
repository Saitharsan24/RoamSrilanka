import React from "react";
import Headeruser from "../../components/headerusers";
import "../../styles/admin/admin_driver.css";
import profile from "../../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Adminsidebar from "../../components/admin-sidebar";

function AdminDiverReg() {
  

  return (
    <React.Fragment>
      <div className="driver-reg d-flex flex-column" >
        <div className="d-flex" style={{backgroundColor:"#F1F1F2"}}>
          
          
          <div className="w-100 d-flex justify-content-center  align-items-center">
          
            <div
              className=" d-flex justify-content-center  align-items-center col-11 mt-5 mb-5" style={{ backgroundColor: "#ffff" }}    >
              <section class="h-100 " style={{backgroundColor:"#F1F1F2"}}>
              <div className="d-flex justify-content-center  align-items-center " style={{color:"#004577",fontSize:"30px",fontWeight:"bold"}} > Driver Registration</div>
  <div class="container py-5 h-100">
    
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2"  >
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="p-5">
                <h3 class="fw-normal mb-5" style={{color:"#004577"}}>General Infomation</h3>
                  <div class="row">
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev2" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev2">First name</label>
                                </div>
                            </div>  

                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Last name</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Phone Number</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">NIC Number/Passport Number</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="email" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Email</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">SLTDA Registration Number</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Bank Account number</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">License number</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="date" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Expiration date of License</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                                <div class="form-outline">
                                    <input type="file" id="form3Examplev3" class="form-control form-control-lg" />
                                    <label class="form-label" for="form3Examplev3">Upload License Plate Photo</label>
                                </div>
                            </div>

                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline">
                      <input type="text" id="form3Examplev4" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplev4">Address</label>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-lg-6 bg-indigo text-white">
                <div class="p-5">
                  <h3 class="fw-normal mb-5">Vehicle Information  </h3>

                  {/* <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Vehicle Type</label>
                    </div>
                  </div> */}

                  {/* <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                      <input type="text" id="form3Examplea3" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea3">Vehicle Make and Model</label>
                    </div>
                  </div> */}

                  <div class="row">

                  <div class="col-md-5 mb-4 pb-2">

                                <div class="form-outline form-white">
                                <input type="text" id="form3Examplea4" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Examplea4">Vehicle Type</label>
                                </div>

                                </div>
                                <div class="col-md-7 mb-4 pb-2">

                                <div class="form-outline form-white">
                                <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Examplea5">Vehicle Make and Model</label>
                                </div>
                    </div>
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea4" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea4">Vehicle Year</label>
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea5">Seating Capacity</label>
                      </div>
                    </div>

                    <div class="col-md-5 mb-4 pb-2">

                                <div class="form-outline form-white">
                                <input type="text" id="form3Examplea4" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Examplea4">Vehicle Colour</label>
                                </div>

                                </div>
                                <div class="col-md-7 mb-4 pb-2">

                                <div class="form-outline form-white">
                                <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                                <label class="form-label" for="form3Examplea5">Vehicle Number</label>
                                </div>
                                </div>

                    <h3 class="fw-normal mb-5">Insurance Information</h3>
                  </div>

                  <div class="mb-4 pb-2">
                    <div class="form-outline form-white">
                      <input type="text" id="form3Examplea6" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea6">Company Name</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-5 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea7" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea7">Policy Expiration Date</label>
                      </div>

                    </div>
                    <div class="col-md-7 mb-4 pb-2">

                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea8" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea8">Insurance Policy Number</label>
                      </div>

                    </div>
                  </div>


                 
                  <button type="button" class="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
            
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminDiverReg;

