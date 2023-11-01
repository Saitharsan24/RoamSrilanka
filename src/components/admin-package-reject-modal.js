import React from "react";
import './../styles/admin/admin_package_reject_modal.css';
import { useState } from "react";
import axios from "axios";

function PackageRejectModal({closeModal,packageID}){


    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000,
     });
  
     const [packagestatus, setpackagestatus] = useState([]);
   const [packagefeedback, setpackagefeedback] = useState({
    feedback: '',
   });

    const inputFormdata = (name, value) => {
        setpackagefeedback((prev) => ({ ...prev, [name]: value}));
        }

        const handleUpdateReject =async (e)  => {
            e.preventDefault();

            try {
                const response = await axiosInstance.put(`/packageFeedback/${packageID}`, {
                feedback:packagefeedback.feedback,
                });

                if (response.status === 200) {
                    window.location.reload();
                    console.log("ok");
                    }

            } catch (error) {
                console.log(error);
            }


             // Fetch the current status
        axiosInstance
        .get(`/packages/${packageID}`)
        .then((response) => {
            const currentStatus = response.data.status;
               if(currentStatus === null){
                var newStatus = 0;
            }else{
                var newStatus = null;
            }
            // Update the status
            axiosInstance
            .put(`/updatePackage/${packageID}`, {
                status: newStatus,
            })
            .then((response) => {
                closeModal();
                setpackagestatus(response.data.status);  
                window.location.reload();
            })
            .catch((error) => {
                // Handle errors
                console.error("Error updating status:", error);
            });

            

        });
        
            
        }


   return(
    <div className="modalBackgroundReject-pc">
            <div className="modalContainerReject-pc">
               <div className="title-modalCloseBtnReject-pc w-75 mt-1 " onClick={()=>closeModal()}> <button  >X</button></div>
                <div className="title-modalReject-pc "><h3>If You Want to Reject Vehicle</h3></div>
                <div className="body-modal-pc"><p>Give the feedback</p></div>
                <div className="feedbackform-pc ">
                {/* <input className='w-100' name='dob' type="date" value={formData.dob} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value); }} /> */}
                <form >  
                         <label for="fname " style={{fontWeight:"bold"}}></label>
                    <input type="text" name="feedback" value={packagefeedback.feedback}  onChange={(e)=> {inputFormdata(e.target.name, e.target.value)}} id="fname" className="form-control" placeholder="Give Your Feedback..." />
                    <div className="footer-modal-pc">
                    <button  id="cancelBtnReject-pc" onClick={()=>closeModal()}>Cancel</button>
                    <button  type="submit" method="PUT"  onClick={handleUpdateReject} >Send</button>
                </div>
                </form>
                </div>      
            </div>
        </div>
    )
         
}

export default PackageRejectModal;