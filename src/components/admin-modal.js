import React from "react";
import './../styles/admin/admin_modal.css';
//import "bootstrap/dist/css/bootstrap.css";


function Modal({closeModal}){

      

    return(
        <div className="modalBackground">
            <div className="modalContainer">
               <div className="title-modalCloseBtn w-75 mt-1 "> <button onClick={()=>closeModal(false)} >X</button></div>
                <div className="title-modal "><h3>Are You sure</h3></div>
                <div className="body-modal "><p>Do you want to disable Account?</p></div>
                <div className="footer-modal">
                    <button onClick={()=>closeModal(false)} id="cancelBtn">Cancel</button>
                    <button>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;