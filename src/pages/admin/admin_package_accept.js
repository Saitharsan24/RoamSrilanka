import React from "react";
import "../../styles/admin/admin_package.css";
import { MDBDataTable } from "mdbreact";


function AdminPackageAccept() {
  return (
    <React.Fragment>
          <div className="w-100 d-flex justify-content-center  align-items-center">
            <div
              className="  d-flex justify-content-center  align-items-center col-10 mt-5 mb-5 "  style={{ backgroundColor: "#ffff" }} >
              <div className="d-flex flex-column align-items-center col-10">
                <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-center col-12  align-content-center  me-2 mb-2 mt-4 gap-2  ">
                  <div className=" d-flex flex-column justify-content-center align-items-center col-lg-8   p-2 " style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                      Basic Information About Package
                      </span>
                    </p>
                    <table style={{ textAlign: "center", boxShadow: "none" }}>
                        <tbody>
                            <tr >
                                <td style={{ width: "200px" }}>Package ID:</td>
                                <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                              
                            }}
                          >
                            001
                          </td>
                          
                            </tr>

                            <tr style={{ height: "10px" }}></tr>
                            <tr >
                                <td style={{ width: "200px" }}>Package Name:</td>
                                <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                              
                            }}
                          >
                            Robert Johnson
                          </td>
                            </tr>
                            <tr style={{ height: "10px" }}></tr>
                            <tr >
                                <td style={{ width: "200px" }}>Package Type</td>
                                <td
                            style={{
                              width: "200px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "5px",
                              
                            }}
                          >
                            Amont Base
                          </td>
                            </tr>
                            <tr style={{ height: "10px" }}></tr>
                        </tbody>
                    </table>
                  </div>

                  <div className=" box-large d-flex flex-column justify-content-center align-items-center p-3 col-lg-4 "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                    <p className="fw-bold fs-5 ">
                    Total Cost of the Package
                    </p>
                    <p className="fs-4 fw-bold"
                      style={{
                        // fontWeight: "bold",
                        color: "#004577",
                        // fontSize: "25px",
                      }}
                    >
                    7 000/=
                    </p>
                  </div>
                </div>

                <div className="d-flex flex justify-content-center align-content-center  mb-3 col-12  "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                  <div className="d-flex flex-column justify-content-center align-items-center col-10 mt-3 w-100">
                    <p style={{ fontWeight: "bold", color: "#004577",fontSize:"15px"}}>
                    Package Details
                    </p>
                    <table
                    className=" d-flex flex-column justify-content-center align-items-center w-100 col-7 "
                    style={{ textAlign: "left", overflowX:'auto', borderCollapse:'collapse' }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        District
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Hotel Type </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Number of days </td>
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
                          Kandy,Nuwara Eliya,Padula
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                           3 star 
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                         3 days
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Number of members
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Type </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Seating Capacity</td>
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
                          04
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                            Car
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          05
                        </td>
                      </tr>
 
                      <tr style={{ height: "20px" }}></tr>
                    </tbody>
                  </table>

                    <table
                    className=" d-flex flex-column justify-content-center align-items-center w-100 col-7 "
                    style={{ textAlign: "left", overflowX:'auto', borderCollapse:'collapse' }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Discription
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}> </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}></td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr style={{height:"80px"}}>
                        <td colSpan={5}
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                            
                          }}
                        >
                          
                        </td>
                      </tr>

                      <tr style={{ height: "40px" }}></tr>
                      </tbody>

</table>
                 <div className="d-flex flex justify-content-end gap-4 w-75 mb-5">   
                 <button style={{backgroundColor:"#004577",color:"#ffff",borderRadius:"10px",width:"7rem"}}>Reject</button>  
                 <button style={{backgroundColor:"#004577",color:"#ffff",borderRadius:"10px",width:"7rem"}}>Publish</button>  
                 </div> 
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}

export default AdminPackageAccept;

