import React, { useEffect } from "react";
import "../../styles/admin/admin_package.css";
import { MDBDataTable } from "mdbreact";
import { useState } from "react";
import axios from "axios";
import PackageAcceptModal from "../../components/admin-package-accept-modal";
import PackageRejectModal from "../../components/admin-package-reject-modal";


function AdminPackageAccept() {
     
   const urlParams = new URLSearchParams(window.location.search);
    const packageID = urlParams.get("packageId");
    console.log(packageID)

    const [packages, setPackage] = useState([]);

    const apiBaseUrl = "http://localhost:8080";

   const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });

   useEffect(() => {
      // Make an HTTP GET request to fetch data from the API
      axiosInstance.get(`/packages/${packageID}`).then((response) => {
        //handle success
        setPackage(response.data);
        console.log(response.data);
       
      })
      .catch((error) => {
        //handle error
        console.log(error);
       
      })  
    }, [packageID]);


    function getStatusText(status) {
      if (status == null) {
        return <div style={{color:"#d0c96e",fontWeight:"bolder"}}>Pending</div>;
      } else if (status== 0) {
        return <div style={{color:"#d03b3b",fontWeight:"bolder"}}>Rejected</div>;
      } else if (status == 1) {
        return <div style={{color:"#66d03b",fontWeight:"bolder"}}>Accepted</div>;
      } else {
        return "Unknown";
      }
    }  // function of status

    function getButtonTr(status){
      if(status==null){
        return(
          <tr>
          
          <td style={{ width: "200px", textAlign: "center" }}>
          <button 
           onClick={openModalpackageReject}
                  style={{
                    backgroundColor: "#d03b3b",
                  color: "#ffff",
                    borderColor: "#ffff",
                    borderRadius: "10px",
                    borderColor: "#ffff",
                    width: "7rem"
                  }}
                  
                >
                  Reject
          </button>
          </td>
          <td style={{ width: "50px" }}></td>
          <td style={{ width: "200px", textAlign: "center" }}>
          <button 
          onClick={openModalpackageAccept}
                  style={{
                    backgroundColor: "#66d03b",
                  color: "#ffff",
                    borderColor: "#ffff",
                    borderRadius: "10px",
                    borderColor: "#ffff",
                    width: "7rem"
                  }}
                  
                >
                  Accept
          </button>
          </td>
          </tr>
        );
    }  else if(status==0||status==1){
      return (
      <tr>
                          <td >
                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: "200px", textAlign: "right" }}>
                          Vehicle Status
                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: "200px", textAlign: "left" }}>
                            {getStatusText(packages.status)}
                          {/* {getStatusText(vehicledetail.status)} */}
                          </td>
      </tr>)
    } else{
      return "Unknown"
    }
  }  //function to get button tr


  
  const [modalpackageAccept,setOpenModalAccept] = useState(false);  //modal for accept
  const [blurBackground,setBlurBackground]=useState(false);

  const openModalpackageAccept =() =>{
    setOpenModalAccept(true);
    setBlurBackground(true);
  }            //open modal to accept

  const closeModalpackageAccept = () =>{
    setOpenModalAccept(false);
    setBlurBackground(false);
  }  //close modal to reject


  const [modalpackageReject,setOpenModalReject] = useState(false);  //modal for reject
  

  const openModalpackageReject =() =>{
    setOpenModalReject(true);
    setBlurBackground(true);
  }         //open modal to reject

  const closeModalpackageReject = () =>{
    setOpenModalReject(false);
    setBlurBackground(false);
  }

  

  return (
    <React.Fragment>
      {modalpackageAccept && <PackageAcceptModal closeModal={closeModalpackageAccept} packageID={packageID}/>}
      {modalpackageReject && <PackageRejectModal closeModal={closeModalpackageReject} packageID={packageID}/>}
      {/* <PackageAcceptModal/> */}
      <div  className={`w-100 d-flex justify-content-center align-items-center 
          ${
          blurBackground ? 'blur-background' : '' // Apply blur class conditionally
          }`
        }>
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
                            {packages.packageID}
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
                            {packages.package_name}
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
                    {packages.price}
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
                        Places
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
                          {packages.places}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                           {packages.hotel_rating}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                         {packages.days}
                        </td>
                      </tr>

                      <tr style={{ height: "10px" }}></tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Number of members
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle facility </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Guide facility</td>
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
                          {packages.no_of_people}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {packages.vehicle ? "Available" : "Not Available"}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {packages.trip_guide ? "Available" : "Not Available"}
                          
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
                        Description
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
                          {packages.discription}
                        </td>
                      </tr>

                      <tr style={{ height: "40px" }}></tr>
                      </tbody>

</table>

<table className=" d-flex flex-column justify-content-center align-items-center w-100  ">
            {getButtonTr(packages.status)}
            </table>

                
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}

export default AdminPackageAccept;

