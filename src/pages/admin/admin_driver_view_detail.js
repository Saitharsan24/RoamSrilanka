import React from "react";
import "../../styles/admin/admin_tourist_view_detail.css";
import profile from "../../assets/images/profile.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import Driver from "../driver/dashboard";
import Modal_Driver from "../admin/admin_modal_driver";

function AdminDrivertDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  
  const [driverdetail, setdriverdetail] = useState([]); //usestate hook to set the state of the holiday planner user details
  const [driveruserdetail, setdriveruserdetail] = useState([]);
              //usestate hook to set the state of the holiday planner user details

            const apiBaseUrl = "http://localhost:8080";
              
              const axiosInstance = axios.create({
               baseURL: apiBaseUrl,
               timeout: 5000,
              });

  useEffect(() => {
    axiosInstance.get(`/viewDriver/${userId}`).then((response) => {
      console.log(response.data);
      setdriverdetail(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.log('Error fetching Data',error);
    });
  }, [userId]);

  useEffect(() => {
    axiosInstance.get(`/users/${userId}`).then((response) => {
      console.log(response.data);
      setdriveruserdetail(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.log('Error fetching Data',error);
    });
  }
  , [userId]);

  const [openModal, setOpenModal] = useState(false);  // This is the state variable to control the model(Eable/Disable)
  const [blurBackground, setBlurBackground] = useState(false); // State to control background blur

  // Function to open the modal and blur the background
  const openModalWithBlur = () => {
    setOpenModal(true);
    setBlurBackground(true);
  };

   // Function to close the modal and remove the background blur
   const closeModal = () => {
    setOpenModal(false);
    setBlurBackground(false);
  };
  




  return (
    <React.Fragment>
          <div className="w-100 d-flex justify-content-center  align-items-center">
            <div
              className="  d-flex justify-content-center  align-items-center col-11 mt-5 mb-5 "
              style={{ backgroundColor: "#ffff" }}
            >
              <div className="d-flex flex-column  col-10">
                <div className="d-flex flex-lg-row flex-md-column flex-column  justify-content-center align-content-center me-2 mb-2 mt-4 gap-2  ">
                  <div className=" box-large d-flex flex-column justify-content-center align-items-center col-lg-8 col-md-12 col-sm-12  " style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Basic Information About
                      </span>
                      <span style={{ color: "#004577", fontWeight: "bold" }}>
                         Brad Simmons
                      </span>
                    </p>
                    <table className=" " style={{ textAlign: "center" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "100px" }}>User Name </td>
                          <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                              
                            }}
                          >
                            {driveruserdetail.userName}
                          </td>
                        </tr>

                        <tr style={{ height: "10px" }}></tr>

                        <tr>
                          <td style={{ width: "100px" }}>User ID </td>
                          <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                            }}
                          >
                            {driveruserdetail.userId}
                          </td>
                        </tr>

                        <tr style={{ height: "10px" }}></tr>

                        <tr>
                          <td style={{ width: "100px" }}>User Type </td>
                          <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                            }}
                          >
                            {driveruserdetail.userType}
                          </td>
                        </tr>

                        <tr style={{ height: "20px" }}></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className=" box-large d-flex flex-column justify-content-center align-items-center p-3 col-lg-4 col-md-12 col-sm-12 "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                    <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                      Rating
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#004577",
                        fontSize: "35px",
                      }}
                    >
                      04
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-lg-row flex-md-column flex-column justify-content-center align-content-center  mb-3 col-12  "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                  <div className="d-flex flex-column justify-content-center align-items-center col-lg-3 col-md-10 col-sm-10">
                    <p style={{ fontWeight: "bold", color: "#004577" }}>
                      Personal Information
                    </p>
                    <img
                      src={profile}
                      className=" round-cricle"
                      style={{
                        borderRadius: "50%",
                        width: "10vw",
                        height: "10vw",
                      }}
                    ></img>
                      <a href="/admin/adminvehicledetail">  <button className="mt-3 " style={{background:"#004577",border:"none",color:"#ffffff",borderRadius:"10px",height:"35px",width:"150px"}}>Vehicle Detail</button></a>
                  </div>

                  <table
                    className=" d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Full Name{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Date of Birth </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                        {driveruserdetail.userFullname} 
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                        {driverdetail.dateOfBirth}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          NIC/Passport No{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Phone No </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.nic}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.phoneNo}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Email
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>SLTDA Registration Number </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driveruserdetail.userName}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.SLTDANo}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          License No
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>License Expiration date </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.licenseNo}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.licenseExpDate}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          colSpan="3"
                          style={{ width: "200px", textAlign: "left" }}
                        >
                          Address{" "}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td
                          colSpan="3"
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {driverdetail.address}
                        </td>
                      </tr>

                      <tr style={{ height: "20px" }}></tr>
                      <td colSpan={3} style={{textAlign:"right"}} >
                      
                      {driverdetail.status === null ? (
                          <button
                            style={{
                              backgroundColor: "#d03b3b",
                              color: "#ffff",
                              borderRadius: "10px",
                              borderColor: "#ffff",
                              width: "7rem"
                            }}
                             onClick={openModalWithBlur}
                          >
                            Disable
                          </button>
                        ) : (
                          <button
                            style={{
                              backgroundColor: "#66d03b",
                             color: "#ffff",
                              borderColor: "#ffff",
                              borderRadius: "10px",
                              width: "7rem"
                            }}
                            onClick={openModalWithBlur}
                          >
                            Enable
                          </button>
)}



                    </td>
                          <tr style={{ height: "20px" }}></tr>
                    </tbody>
                  </table>
                  
                </div>
                <div className='vehicle-content d-flex flex-column justify-content-center align-items-center col-10  '>
                     <h4 className='mb-2' style={{ fontWeight: "bold", color: "#004577",fontSize:"25px"}}>License Plate Photo</h4>
                     <img  src={profile}
                     className=" vehicle-pic object-fit-cover img-fluid m-auto"  style={{width:"30vw",height:"50vh"}} />
            </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}

export default AdminDrivertDetails;

