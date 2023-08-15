import React from "react";
import "../../styles/admin/admin_change_password.css";
import profile from "../../assets/images/profile.jpg";

function AdminChangePassword() {
    
  return (
    <React.Fragment>
          <div className="w-100 d-flex justify-content-center mt-5 p-5">
          <div className="  d-flex justify-content-center  align-items-center bg-white w-50 mt-0 " style={{borderRadius:"15px"}}>
              <div className="d-flex flex-column justify-content-around  align-items-center mt-5">
               
              <img
                                  src={profile}
                                  className="  object-fit-cover img-fluid m-auto  round-cricle"  style={{width:"11vw",height: "11vw",borderRadius: "50%"}} ></img>
                                   <h6>Change Password</h6>
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
    
      
    </React.Fragment>
  );
}

export default AdminChangePassword;
