import React from "react";
//import './../styles/admin/admin_modal.css';
import { useState } from "react";
import axios from "axios";
import Driver from "../driver/dashboard";

    


function Modal_Driver({closeModal,userId}){
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
   
   const [driverdetailstatus, setdriverstatus] = useState([]);
   const handleUpdate = () => {
    // Fetch the current status 
    axiosInstance
      .get(`/viewHolidayplanner/${userId}`)
      .then((response) => {
        const currentStatus = response.data.status;
       //  console.log(currentStatus)
        // Determine the new status based on the current status
        const newStatus = currentStatus === null ? 1 : null;
        window.location.reload();
      

        // Make an HTTP PUT request to update the status
        axiosInstance
          .put(`/updateHolidayplanner/${userId}`, { status: newStatus })
          .then((response) => {
            // Handle success, close the modal
            closeModal();
          //  setHolidayPlannerstatus(response.data.status);
            
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
        <div className="modalBackground-driver">
            <div className="modalContainer-driver">
               <div className="title-modalCloseBtn-driver w-75 mt-1 "> <button onClick={()=>closeModal(false)} >X</button></div>
                <div className="title-modal-driver "><h3>Are You sure</h3></div>
                {/* <div className="body-modal-driver "><p>Do you want to {holidayPlannerdetailstatus===null?("Enable"):("Disable")}  Account?</p></div> */}
                <div className="footer-modal-driver">
                    <button onClick={()=>closeModal(false)} id="cancelBtn-driver">Cancel</button>
                    <button onClick={handleUpdate }>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal_Driver;