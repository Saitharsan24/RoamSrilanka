import React from "react";
import './../styles/admin/admin_vehicle_reject_modal.css';
import { useState } from "react";
import axios from "axios";

function VehicleRejecttModal({closeModal,vehicleID}){
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });


   
   const [vehiclestatus, setVehiclestatus] = useState([]);
   const [vehiclefeedback, setVehiclefeedback] = useState({
    feedback: '',
   });

   const inputFormdata = (name, value) => {
    setVehiclefeedback((prev) => ({ ...prev, [name]: value}));
  }


   const handleaddplanner = async (e) =>{
    e.preventDefault();

    try {
        const response = await axiosInstance.post("/addPlanner", {
        feedback:vehiclefeedback.feedback,
        });

        if (response.status === 200) {
            //console.log(plannerName);
            console.log("ok");
          }
 
} catch (error) {
  
  console.log(error);
}
}


    const handleUpdateReject =async (e)  => {    
        
            e.preventDefault();

            try {
                const response = await axiosInstance.put(`/vehicleFeedback/${vehicleID}`, {
                feedback:vehiclefeedback.feedback,
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
            .get(`/vehicle/${vehicleID}`)
            .then((response) => {
                const currentStatus = response.data.status;
                   if(currentStatus === null){
                    var newStatus = 0;
                }else{
                    var newStatus = null;
                }
                

                
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

    return(
        <div className="modalBackgroundReject">
            <div className="modalContainerReject">
               <div className="title-modalCloseBtnReject w-75 mt-1 " onClick={()=>closeModal(false)}> <button  >X</button></div>
                <div className="title-modalReject "><h3>If You Want to Reject Vehicle</h3></div>
                <div className="body-modal"><p>Give the feedback</p></div>
                <div className="feedbackform ">
                {/* <input className='w-100' name='dob' type="date" value={formData.dob} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value); }} /> */}
                <form>                         <label for="fname " style={{fontWeight:"bold"}}></label>
                    <input type="text" name="feedback" value={vehiclefeedback.feedback} 
                    onChange={(e)=> {inputFormdata(e.target.name, e.target.value)}}  id="fname" className="form-control" placeholder="Give Your Feedback..." />
                    <div className="footer-modal">
                    <button  id="cancelBtnReject" onClick={()=>closeModal(false)}>Cancel</button>
                    <button  type="submit" method="PUT"  onClick={handleUpdateReject} >Send</button>
                </div>
                </form>

                </div>      
            </div>
        </div>
    )
}

export default VehicleRejecttModal;