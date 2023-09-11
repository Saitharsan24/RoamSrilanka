import React from "react";
import "../styles/HpPopup.css";

function DeleteConfirm({ message, onDialog, nameProduct }) {
  return (
    <div className="popup-container">
      <div
        className="popup1 d-flex flex-lg-column align-items-center gap-2 p-4"
        onClick={() => onDialog(false)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <h3 style={{fontSize: "20px" }}>{message}</h3>
          <h1 style={{ color: "blue", fontSize: "24px" }}>{nameProduct}</h1>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="justify-content-center gap-5"
          >
            <button
              onClick={() => onDialog(true)}
              style={{
                background: "#90ee90",
                color: "white",
                border: "none",
                borderRadius: "5px",
                width: "50px",
              }}
            >
              Yes
            </button>
            <button
              onClick={() => onDialog(false)}
              style={{
                background: "#DB163A",
                color: "white",
                border: "none",
                borderRadius: "5px",
                width: "50px",
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteConfirm;
