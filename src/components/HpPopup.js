import React from "react";

import "../styles/HpPopup.css";
import * as Icon from "react-bootstrap-icons";

const close = () => {
  window.location.reload();
};

function HpPopup({ onClose }) {
  return (
    <div className="popup-container">
      <div className="popup1 d-flex flex-lg-column align-items-center p-4">
        <Icon.SendCheckFill size={40} color="#19c37d"/>
        <p>Sent to Confirmation</p>
        <button onClick={onClose && close} className="close_btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default HpPopup;
