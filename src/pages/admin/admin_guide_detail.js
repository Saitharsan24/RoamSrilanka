import React from "react";
import "../../styles/admin/admin_tourist_view_detail.css";
import profile from "../../assets/images/profile.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal_guide from "../../components/admin_guide_modal";



function AdminGuideDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  
  const [guidedetail, setguidedetail] = useState([]);  
             //usestate hook to set the state of the holiday planner details
  const [guideuserdetail, setguideuserdetail] = useState([]);
              //usestate hook to set the state of the holiday planner user details
  


  const apiBaseUrl = "http://localhost:8080";
              
   const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });

  // Make an HTTP GET request to fetch the details of the holiday planner using userId
  useEffect(() => {
    axiosInstance.get(`/viewGuide/${userId}`)
      .then((response) => {
        // Handle the response and set the state with the details
        setguidedetail(response.data);
        
      })
      .catch((error) => {
        // Handle errors
        console.log('Error fetching Data',error);
      });
  }, [userId]);

  // Make an HTTP GET request to fetch the details of the holiday planner user using userId
  useEffect(() => {
    axiosInstance.get(`/users/${userId}`)
      .then((response) => {
        // Handle the response and set the state with the details
        setguideuserdetail(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.log('Error fetching Data',error);
      });
  }, [userId]);

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
      
      {openModal && <Modal_guide closeModal={closeModal} userId={userId} />}
      <div  className={`w-100 d-flex justify-content-center align-items-center 
          ${
          blurBackground ? 'blur-background' : '' // Apply blur class conditionally
          }`
        }>
            <div
              className=" d-flex justify-content-center  align-items-center col-11 mt-5 mb-5" style={{ backgroundColor: "#ffff" }}    >
              <div className="d-flex flex-column  col-lg-10 col-md-10 ">
                <div className="d-flex flex-lg-row flex-md-row flex-column  justify-content-center align-content-center me-2 mb-2 mt-4 gap-2  ">
                  <div className="box-2 box-large d-flex flex-column justify-content-center align-items-center col-lg-8 col-md-8 col-sm-12   ">
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Basic Information About
                      </span>
                      <span style={{ color: "#004577", fontWeight: "bold" }}>
                      {guideuserdetail.userFullname}
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
                            {guideuserdetail.userName}
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
                           {guideuserdetail.userId}

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
                            {guideuserdetail.userType}
                         </td>
                        </tr>

                        <tr style={{ height: "20px" }}></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className=" box-3 box-large d-flex flex-column justify-content-center align-items-center p-3 col-lg-4 col-md-12 col-sm-12 ">
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
                       {guidedetail.rating}
                    </p>
                  </div>
                </div>

                <div className=" box-4  d-flex flex-lg-row flex-md-column flex-column justify-content-center align-content-center  mb-3 col-12  ">
                  <div className="d-flex flex-column justify-content-center align-items-center col-lg-3 col-md-12 col-sm-12  ">
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
                        <td style={{ width: "200px" ,textAlign: "left"}}>Phone No  </td>
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
                          {guideuserdetail.userFullname}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                        {guidedetail.phoneNo}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          NIC/Passport No{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px",textAlign: "left" }}>Email</td>
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
                          {guidedetail.nic}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                         {guideuserdetail.userName}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                     

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        sltda Number
                       
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px",textAlign: "left" }}>Address </td>
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
                         {guidedetail.sltdaNo}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {guidedetail.address}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                     
                      <tr style={{ height: "20px" }}></tr>
                      <tr >
                        
                       <td colSpan={3} style={{textAlign:"right"}} >
                      
                          {guidedetail.status === null ? (
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
                       
                       </tr>
                       <tr style={{ height: "20px" }}></tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>

          </div>     
    
    </React.Fragment>
  );
}

export default AdminGuideDetails;

