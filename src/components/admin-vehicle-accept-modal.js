import React from "react";
//import './../styles/admin/admin_modal.css';
import './../styles/admin/admin_vehicle_accept_modal.css';
import { useState } from "react";
import axios from "axios";

function VehicleAcceptModal({closeModal,vehicleID}){
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
   
  const [vehiclestatus, setVehiclestatus] = useState([]);
   const handleUpdateAccept = () => {
    // Fetch the current status 
    axiosInstance
      .get(`/vehicle/${vehicleID}`)
      .then((response) => {
        const currentStatus = response.data.status;
       //  console.log(currentStatus)
        // Determine the new status based on the current status
       // const newStatus = currentStatus === null ? 1 : null;
       if(currentStatus === null){
        var newStatus = 1;
        }else{
          var newStatus = null;
        }
        window.location.reload();
      

        // Make an HTTP PUT request to update the status
        axiosInstance
          .put(`/updateVehicle/${vehicleID}`, { status: newStatus })
          .then((response) => {
            // Handle success, close the modal
            closeModal();
            setVehiclestatus(response.data.status);
            
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating status:", error);
          });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching current status:", error);
      });
  };

  //console.log(holidayPlannerdetailstatus);
      
    return(
        <div className="modalBackgroundAccept">
            <div className="modalContainerAccept">
               <div className="title-modalCloseBtnAccept w-75 mt-1 " onClick={()=>closeModal(false)}> <button  >X</button></div>
                <div className="title-modalAccept "><h3>Are You sure</h3></div>
                <div className="body-modal "><p>Do you want to Accept?</p></div>
                <div className="footer-modal">
                    <button  id="cancelBtnAccept" onClick={()=>closeModal(false)}>Cancel</button>
                    <button onClick={handleUpdateAccept}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default VehicleAcceptModal;