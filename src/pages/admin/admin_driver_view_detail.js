import React from "react";
import Headeruser from "../../components/headerusers";
import "../../styles/admin/admin_tourist_view_detail.css";
import profile from "../../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Adminsidebar from "../../components/admin-sidebar";

function AdminDrivertDetails() {
  

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
                            Laxshan_19
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
                            003
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
                            Driver
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
                          First Name{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Last Name </td>
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
                          Laxshan
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          Panchavarnan{" "}
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
                          991756432
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          0779656689{" "}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          Email{" "}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Familier Languages </td>
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
                          laxshan1906@gmail.com
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          Tamil{" "}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                          SLTDA Registration Number{" "}
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
                          998833
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          19/06/1999{" "}
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
                          Annasilayady,Karanavai,Karaveddy.
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

export default AdminDrivertDetails;

