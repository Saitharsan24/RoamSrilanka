import React from "react";
import './../styles/admin/admin_package_reject_modal.css';
import { useState } from "react";
import axios from "axios";

function PackageRejectModal({closeModal}){
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
                    <input type="text" name="feedback"   id="fname" className="form-control" placeholder="Give Your Feedback..." />
                    <div className="footer-modal-pc">
                    <button  id="cancelBtnReject-pc" onClick={()=>closeModal()}>Cancel</button>
                    <button  type="submit" >Send</button>
                </div>
                </form>
                </div>      
            </div>
        </div>
    )
         
}

export default PackageRejectModal;