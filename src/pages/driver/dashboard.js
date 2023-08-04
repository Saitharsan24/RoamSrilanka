import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Headeruser from "../../components/headerusers";
import DriverSidebar from "./../../components/driver-sidebar";

function driver() {
    return(
        <div>
            <Headeruser />
            <div style={{ backgroundColor: "#ECECEC" }} className="d-flex flex-row column-gap-2 col-12">
                <DriverSidebar />
            </div>
        </div>
    );
}

export default driver;