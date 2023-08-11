import React from "react";
import Headeruser from "../../components/headerusers";
import "../../styles/admin/admin_change_password.css";
import profile from "../../assets/images/profile.jpg";
import { Container, Row, Col, Form } from "react-bootstrap";
import Adminsidebar from "../../components/admin-sidebar";

function Admin_change_password() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
           
  return (
    <React.Fragment>
      <div className=" full ">
        <Headeruser />
        <div className="d-flex">
        <Adminsidebar />
          <div className="w-100 d-flex justify-content-center  align-items-center">
          <div className="  d-flex justify-content-center  align-items-center bg-white w-50">
              <div className="d-flex flex-column justify-content-around  align-items-center mt-5">
              <img
                                  src={profile}
                                  className=" profile-pic object-fit-cover img-fluid m-auto  round-cricle"  style={{width:"11vm",height:"11vm"}} ></img>
                {/* form */}
                         <div className="d-flex flex-column align-items-center justify-content-around mt-5 ">
                                  
                                                <table class="tbl-square" style={{padding:"20px"}}>
                                            <tr>
                                                <td class="type1">Current password :</td>
                                                <td class="type2"></td>
                                            </tr>
                                            
                                            <tr>
                                                <td class="type1">New Password :</td>
                                                <td class="type2"></td>
                                            </tr>
                                            <tr>
                                                <td class="type1">Confirm Password :</td>
                                                <td class="type2"></td>
                                            </tr>
                                            

                                        </table> 
                              </div>

                              <div className="d-flex flex-colum align-items-center justify-content-center mt-4 mb-5">
                              <button className="btn-update">Change Password</button>
                              </div>

              </div>
                   
              
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default Admin_change_password;
