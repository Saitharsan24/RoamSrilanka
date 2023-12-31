import React from "react";
import '../../styles/admin/admin_driver_vechicle_view_details.css';

function AdminVehicleDetails() {
  

  return (
    <React.Fragment>
          <div className="w-100 d-flex justify-content-center  align-items-center">
            <div
              className="  d-flex justify-content-center  align-items-center col-10 mt-5 mb-5 "  style={{ backgroundColor: "#ffff" }} >
              <div className="d-flex flex-column align-items-center col-10 mt-3">

                <div className="d-flex flex justify-content-center align-content-center  mb-3 col-12  "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                  <div className="d-flex flex-column justify-content-center align-items-center col-10 mt-3 w-100">
                    <p style={{ fontWeight: "bold", color: "#004577",fontSize:"15px"}}>
                    Vehicle Information Information 
                    </p>
                    <table
                    className=" d-flex flex-column justify-content-center align-items-center w-100 col-7 "
                    style={{ textAlign: "left", overflowX:'auto', borderCollapse:'collapse' }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Vehicle Type
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Make and Model </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Color </td>
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
                        Vehicle Year
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Seating Capacity </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Number </td>
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
 
                      <tr style={{ height: "20px" }}></tr>
                    </tbody>
                  </table>

                  <p style={{ fontWeight: "bold", color: "#004577",fontSize:"15px"}}>
                    Insurance Information Information 
                    </p>
                    <table
                    className=" d-flex flex-column justify-content-center align-items-center w-100 col-7 "
                    style={{ textAlign: "left", overflowX:'auto', borderCollapse:'collapse' }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Company Name
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Make and Model </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Color </td>
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

                      <tr style={{ height: "40px" }}></tr>
                      </tbody>
                        </table>
                    
                  
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
 
      
    </React.Fragment>
  );
}

export default AdminVehicleDetails;

