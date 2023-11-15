import React from "react";
import { useEffect, useState } from "react";
import img1 from "./../../assets/images/front-car.png";
import img2 from "./../../assets/images/back-car.png";
import img3 from "./../../assets/images/side1-car.png";
import img4 from "./../../assets/images/side2-car.png";
import '../../styles/admin/admin_driver_vechicle_view_details.css';
import axios from "axios";
import VehicleAcceptModal from "../../components/admin-vehicle-accept-modal";
import VehicleRejecttModal from "../../components/admin-vehicle-reject-modal";
import profile from "../../assets/images/insur.jpeg";


function AdminVehicleDetail_1() {

  const urlParams = new URLSearchParams(window.location.search);
  const vehicleId = urlParams.get('vehicleId'); 

  const [vehicledetail, setVehicledetail] = useState([]);

  const apiBaseUrl = "http://localhost:8080";

   const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });

   // Make an HTTP GET request to fetch the details of the holiday planner using userId
  useEffect(() => {
    axiosInstance.get(`/vehicle/${vehicleId}`)
      .then((response) => {
        // Handle the response and set the state with the details
        setVehicledetail(response.data);
        //console.log(response.data);
        
      })
      .catch((error) => {
        // Handle errors
        console.log('Error fetching Data',error);
      });
  }, [vehicleId]);



  const images = [
    {id:0, value:img1},
    {id:1, value:img2},
    {id:2, value:img3},
    {id:3, value:img4}
]
  const [sliderData, setSliderData] = useState(images[0]);
  const handleClick = (index) => {
      console.log(index);
      const slider = images[index];
      setSliderData(slider);
  }

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
              <button  onClick={openModalWithBlurReject}
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
              <button  onClick={openModalWithBlurAccept}
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
                              {getStatusText(vehicledetail.status)}
                              </td>
          </tr>)
        } else{
          return "Unknown"
        }
  }  //function to get button tr

  //popup model to Accept the vehicle

  const [openModalAccept, setOpenModalAccept] = useState(false);  // This is the state variable to control the model(Eable/Disable)
  const [blurBackground, setBlurBackground] = useState(false); // State to control background blur

    // Function to open the modal and blur the background
    const openModalWithBlurAccept = () => {
      setOpenModalAccept(true);
     setBlurBackground(true);
    };

    // Function to close the modal and remove the background blur
   const closeModalAccept = () => {
    setOpenModalAccept(false);
   setBlurBackground(false);
  };

  //popup model to Reject the vehicle

  const [openModalReject, setOpenModalReject] = useState(false);  // This is the state variable to control the model(Eable/Disable)
  // Function to open the modal and blur the background
  const openModalWithBlurReject = () => {
    setOpenModalReject(true);
    setBlurBackground(true);
  };

  const closeModalReject = () => {
    setOpenModalReject(false);
    setBlurBackground(false);
  };

  return (
    <React.Fragment>
        {openModalAccept && <VehicleAcceptModal closeModal={closeModalAccept} vehicleID={vehicleId}/>}
        {openModalReject && <VehicleRejecttModal closeModal={closeModalReject} vehicleID={vehicleId}/>}
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
                   
                    <p style={{ fontWeight: "bold", color: "#004577",fontSize:"15px"}}>Images of Vehicle</p>
                    <div class="card">
                     
                                        <div class="card-body">
                                            <div className="d-flex align-items-center">
                                                {
                                                    images.map((data, i) =>
                                                    <div className="thumbnail rounded mx-auto d-block shadow-lg" key={i}>
                                                        <img className={sliderData.id===i?"clicked":""}  src={data.value} onClick={() => handleClick(i)} width="100px" height="100px" />
                                                    </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                    
                   
                  </div>

                  <div className=" box-large d-flex flex-column justify-content-center align-items-center p-3 col-lg-4 "  style={{backgroundColor:"#F1F1F2",borderRadius:"20px"}}>
                  <div className="card mt-3 border-danger ">
                                        <img className="big" src={sliderData.value} height="150" width="250"/>
                                    </div>
                  </div>
                </div>

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
                        Vehicle Number
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>Vehicle Model </td>
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
                          {vehicledetail.vehicleID}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.model}
                           
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.color}
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
                        <td style={{ width: "200px" }}>Company Name</td>
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
                          {vehicledetail.year}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.seats}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.company}
                        </td>
                      </tr>
                     
                      <tr style={{ height: "20px" }}></tr>
                    </tbody>
                   </table>
                   <p style={{ fontWeight: "bold", color: "#004577",fontSize:"15px"}}>Vehicle Insurance Details</p>
                   <table
                    className=" d-flex flex-column justify-content-center align-items-center w-100 col-7 "
                    style={{ textAlign: "left", overflowX:'auto', borderCollapse:'collapse' }}
                  >
                    <tbody>
                      <tr style={{ height: "10px" }}></tr>
                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Insurance Number
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}> Start Date </td>
                        <td style={{ width: "50px" }}></td>
                        <td style={{ width: "200px" }}>End Date </td>
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
                          {vehicledetail.insurance_no}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.insurance_sdate}
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td
                          style={{
                            width: "200px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "5px",
                          }}
                        >
                          {vehicledetail.insurance_edate}
                        </td>
                      </tr>

                      <tr>
                        <td style={{ width: "200px", textAlign: "left" }}>
                        Insurance Company
                        </td>
                        <td style={{ width: "50px" }} colSpan={4}></td>
                      
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
                          {vehicledetail.insurance_company}
                        </td>
                        <td style={{ width: "50px" }} colSpan={3}></td>
                        
                                               
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                     
                      </tbody>

                   </table>

                   <div className='vehicle-content d-flex flex-column justify-content-center align-items-center col-10  '>
               <h4 className='mb-2' style={{ fontWeight: "bold", color: "#004577",fontSize:"25px"}}>Insurance Plate Photo</h4>
               <img  src={profile}
                     className=" vehicle-pic object-fit-cover img-fluid m-auto"  style={{width:"30vw",height:"50vh"}} />
             </div>

            <table className=" d-flex flex-column justify-content-center align-items-center w-100  ">
            {getButtonTr(vehicledetail.status)}
            </table>
                    
                  
                  </div>
                 
                </div>
                
              </div>
                
            </div>

          </div>
 
      
    </React.Fragment>
  );
}

export default AdminVehicleDetail_1;

