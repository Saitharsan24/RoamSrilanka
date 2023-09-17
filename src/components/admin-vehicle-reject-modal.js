import React from "react";
import './../styles/admin/admin_vehicle_reject_modal.css';
import { useState } from "react";
import axios from "axios";

function VehicleRejecttModal({closeModal}){
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });

  

   

    return(
        <div className="modalBackgroundReject">
            <div className="modalContainerReject">
               <div className="title-modalCloseBtnReject w-75 mt-1 " onClick={()=>closeModal(false)}> <button  >X</button></div>
                <div className="title-modalReject "><h3>Are You sure</h3></div>
                <div className="body-modal"><p>Do you want to  Account?</p></div>
                <div className="feedbackform ">
                    <form>                  
                         <label for="fname ">Reason</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your reason.."/>
                    <div className="footer-modal">
                    <button  id="cancelBtnReject" onClick={()=>closeModal(false)}>Cancel</button>
                    <button type="submit">Send</button>
                </div>
                    </form>

                </div>
                
            </div>
        </div>
    )
}

export default VehicleRejecttModal;