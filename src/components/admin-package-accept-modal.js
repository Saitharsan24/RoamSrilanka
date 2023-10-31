import React from "react";
import './../styles/admin/admin_package_accept_modal.css';
import { useState } from "react";
import axios from "axios";

function PackageAcceptModal({closeModal,packageID}){
    const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
   const [packagestatus, setpackagestatus] = useState([]);

   const handleUpdateAccept = () => {
    // Fetch the current status 
    axiosInstance
      .get(`/packages/${packageID}`)
      .then((response) => {
        const currentStatus = response.data.status;
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
          .put(`/updatePackage/${packageID}`, { status: newStatus })
          .then((response) => {
            // Handle success, close the modal
            //closeModal();
            setpackagestatus(response.data.status);
            
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
            <div className="modalBackground-package-ac">
                <div className="modalContainer-package-ac">
                   <div className="title-modalCloseBtn-package-ac w-75 mt-1" onClick={()=>closeModal()} > <button>X</button></div>
                    <div className="title-modal-package-ac "><h3>Are You sure</h3></div>
                    <div className="body-modal-package-ac "><p>Do you want to Accept Account?</p></div>
                    <div className="footer-modal-package-ac">
                        <button  id="cancelBtn-package-ac" onClick={()=>closeModal()}>Cancel</button>
                        <button onClick={handleUpdateAccept}>Yes</button>
                    </div>
                </div>
            </div>
        )  
}

export default PackageAcceptModal;