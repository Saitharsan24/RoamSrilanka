import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Headeruser from "../../components/headerusers";
import DriverSidebar from "./../../components/driver-sidebar";
import * as Icon from "react-bootstrap-icons";
import Calendar from "react-calendar";
import { useState } from "react";

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
       data: [12,15,16,17,18,19] 
    }],
    label: 'Trips',
}
const options = {}

function Driver() {
    const [value, setValue] = useState(new Date());
    return(
        <div>
            <Headeruser />
            <div style={{ backgroundColor: "#ECECEC" }} className="d-flex flex-row column-gap-2 col-12">
                <DriverSidebar />
                <div className="d-flex w-100 gap-3 p-2 flex-row ms-5" >
                    <div className="d-flex col-8 gap-3 p-2 flex-lg-row flex-md-column flex-column">
                        <div className="d-flex w-100 gap-3 p-3 flex-column ms-5" >
                            <div className="box d-flex col-lg-2 col-sm-8 flex-row align-items-center gap-3 p-2 justify-content-around"
                                style={{ backgroundColor: "#76AACF", borderRadius: "12px" }} >
                                <div className=" d-flex flex-column ">
                                    <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "1em" }}>
                                        TRIPS
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <Icon.ChevronRight />
                                </div>
                            </div>
                            <div className=" box d-flex col-lg-2 col-sm-8 flex-row align-items-center gap-3 p-2 justify-content-around"
                                style={{ backgroundColor: "#FFFFF", borderRadius: "12px" }} >
                                <div className=" d-flex flex-column ">
                                    <p style={{ fontSize: "15px", fontWeight: "bold" , marginTop: "1em"}}>
                                        KM's
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <Icon.ChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex col-3 gap-3 p-2 flex-lg-row flex-md-column flex-column">
                        {/* hello */}
                        <div className="col-3 col-md-12 ">
                            <Calendar
                            value={value}
                            onChange={(d) => setValue(d)}
                            style={{ borderRadius: "12px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Driver;