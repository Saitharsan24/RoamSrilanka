import React from "react";
import './../styles/admin/admin_modal.css';
import { useState } from "react";
import axios from "axios";

    


function Modal_driver({closeModal,userId}){
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
   
   const [touristdetailstatus, setDriverstatus] = useState([]);
   const handleUpdate = () => {
    // Fetch the current status 
    axiosInstance
      .get(`/viewDriver/${userId}`)
      .then((response) => {
        const currentStatus = response.data.status;
       //  console.log(currentStatus)
        // Determine the new status based on the current status
        const newStatus = currentStatus === null ? 1 : null;
        window.location.reload();
      

        // Make an HTTP PUT request to update the status
        axiosInstance
          .put(`/updateDriver/${userId}`, { status: newStatus })
          .then((response) => {
            // Handle success, close the modal
            closeModal();
            setDriverstatus(response.data.status);
            
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

      
    return(
        <div className="modalBackground-planner">
            <div className="modalContainer-planner">
               <div className="title-modalCloseBtn-planner w-75 mt-1 " onClick={()=>closeModal(false)}> <button  >X</button></div>
                <div className="title-modal-planner "><h3>Are You sure</h3></div>
                <div className="body-modal-planner "><p>Do you want to  Account?</p></div>
                <div className="footer-modal-planner">
                    <button  id="cancelBtn-planner" onClick={()=>closeModal(false)}>Cancel</button>
                    <button onClick={handleUpdate }>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal_driver;