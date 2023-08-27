import React from "react";

import "../styles/HpPopup.css";
import * as Icon from "react-bootstrap-icons";

function HpPopup({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup1 d-flex flex-lg-column align-items-center gap-2 p-4">
        <Icon.CheckCircle size={40} color="#19c37d"/>
        <p>Successfully Posted</p>
        <button onClick={onClose} className="close_btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default HpPopup;
