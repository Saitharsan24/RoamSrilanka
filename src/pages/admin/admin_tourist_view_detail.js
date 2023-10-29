import React from "react";
import "../../styles/admin/admin_tourist_view_detail.css";
import profile from "../../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";


function AdminTouristDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');

  

  const [touristdetail, setTouristdetail] = useState([]);
  const [touristuserdetail, setTouristuserdetail] = useState([]);
  console.log(touristdetail);
 
  
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
   baseURL: apiBaseUrl,
   timeout: 5000,
  });
 // Make an HTTP GET request using axiosInstance
 // Make an HTTP GET request to fetch the details of the holiday planner using userId
 useEffect(() => {
  axiosInstance.get(`/viewTourist/${userId}`)
    .then((response) => {
      // Handle the response and set the state with the details
      setTouristdetail(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.log('Error fetching Data',error);
    });
}, [userId]);

//console.log(touristdetail);

useEffect(() => {
  axiosInstance.get(`/viewUser/${userId}`)
    .then((response) => {
      // Handle the response and set the state with the details 
      setTouristuserdetail(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.log('Error fetching Data',error);
    });
}, [userId]);


 
  return (
    <React.Fragment>
      
    
          <div className="w-100 d-flex justify-content-center  align-items-center">
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
                            {touristuserdetail.userName}
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
                            {touristuserdetail.userId}
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
                            {touristuserdetail.userType}
                          </td>
                        </tr>

                        <tr style={{ height: "20px" }}></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className=" box-3 box-large d-flex flex-column justify-content-center align-items-center p-3 col-lg-4 col-md-12 col-sm-12 ">
                    <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                      Number Of Trip
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
                        <td style={{ width: "200px" }}>Gender </td>
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
                          {touristuserdetail.userFullname}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {touristdetail.touristGender}
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
                        {touristdetail.touristPassport}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {touristdetail.touristContact}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Email{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Nationality </td>
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
                      {touristuserdetail.userName}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {touristdetail.country}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Emergency Person
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Emergency Relationship </td>
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
                          {touristdetail.emergencyPerson}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {touristdetail.emergencyRelation}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Emergency Contact
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}></td>
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
                          {touristdetail.emergencyContact}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          
                        >
                         
                        </td>
                      </tr>

                      <tr style={{ height: "20px" }}></tr>
                      <tr >

                       <td colSpan={3} style={{textAlign:"right"}} ><button style={{backgroundColor:"#004577",color:"#ffff",borderRadius:"10px",width:"7rem"}}>Disable</button> </td>
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

export default AdminTouristDetails;

