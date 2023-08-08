import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../components/holidayplanner-sidebar";
import Headeruser from "../components/headerusers";
import HPDatatablePage from "../components/HPRequest";
import { useNavigate } from "react-router-dom";

function HPPackage() {
    const navigate = useNavigate();
  return (
    <div className="main d-flex flex-column">
      <Headeruser />
      <div className="d-flex">
      <Sidebar />
        <div className="d-flex w-100">
          <div className="d-flex flex-column col-lg-12 p-4 ">
            <div className="d-grid d-md-flex justify-content-md-end">
              <button onClick={() => navigate("/hpupdatepackage1")}
                className=""
                style={{
                  width: "15rem",
                  borderRadius: "11px",
                  border: "1px solid #2254D5",
                  backgroundColor: "#004577",
                  color: "#FFFFFF",
                  fontFamily: "Lato",
                  fontSize: "20px",
                  boxShadow: "0px 4px 40px rgba(0, 69, 119, 0.35)",
                }}
                type="submit"
              >
                Add New Package
              </button>
            </div>

            <p
              style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
              className="ms-5 m-0"
            >
              <b>Existing Packages</b>
            </p>
            <HPDatatablePage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HPPackage;
