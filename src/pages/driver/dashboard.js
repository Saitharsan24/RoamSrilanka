import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Headeruser from "../../components/headerusers";
import DriverSidebar from "./../../components/driver-sidebar";
import * as Icon from "react-bootstrap-icons";
import Calendar from "react-calendar";
import { useState } from "react";

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export const data1 = [
    {
        name: "JAN",
        income: 4000
    },
    {
        name: "FEB",
        income: 2000
    },
    {
        name: "MAR",
        income: 3000
    },
    {
        name: "APR",
        income: 1000
    },
    {
        name: "MAY",
        income: 6000
    }
];


function Driver() {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <Headeruser />
      <div
        style={{ backgroundColor: "#ECECEC" }}
        className="d-flex flex-row column-gap-2 col-12"
      >
        <div className="col-lg-3 col-md-4 col-12">
          <DriverSidebar />
        </div>
        <div className="d-flex flex-column flex-lg-row col-lg-9 col-md-8 col-12 p-2 mt-5">
          <div className="d-flex col-lg-7 col-md-12 gap-3 flex-lg-column flex-md-column flex-column">
            <div className="d-flex col-lg-10 col-md-12 gap-3 flex-lg-row flex-md-column flex-column">
                <div
                    className="box d-flex col-lg-6 col-md-6 col-sm-12 flex-row align-items-center gap-3 p-2 justify-content-around"
                    style={{ backgroundColor: "#76AACF", borderRadius: "12px" }}
                >
                <div className="d-flex flex-column">
                    <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "1em", width: "50%" }}>
                    TRIPS
                    </p>
                </div>
                <div className="d-flex">
                    <Icon.ChevronRight />
                </div>
                </div>
                <div
                className="box d-flex col-lg-6 col-md-6 col-sm-12 flex-row align-items-center gap-3 p-2 justify-content-around"
                style={{ backgroundColor: "#FFFFF", borderRadius: "12px" }}
                >
                <div className="d-flex flex-column">
                    <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "1em" }}>
                    KM's
                    </p>
                </div>
                <div className="d-flex">
                    <Icon.ChevronRight />
                </div>
                </div>
            </div>
            <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  height: "12rem",
                }}
                className="d-flex gap-3 col-lg-10 col-sm-12 col-md-7 p-2 ms-2 chart"
              >
                <ResponsiveContainer>
                  <BarChart data={data1}>
                    <Bar dataKey="income" fill="#004577" barSize={35}/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                  </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="box d-flex col-lg-6 col-md-6 col-sm-12 flex-row align-items-center gap-3 p-2 justify-content-around"
                style={{ backgroundColor: "#FFFFF", borderRadius: "12px" }}>
                <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "5px" }}>
                    Monthly Income
                </p>
            </div>
            <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  height: "12rem",
                }}
                className="d-flex gap-3 col-lg-10 col-sm-12 col-md-7 p-2 ms-2 chart"
              >
                <ResponsiveContainer>
                  <BarChart data={data1}>
                    <Bar dataKey="income" fill="#004577" barSize={35}/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
          <div className="d-flex col-lg-5 col-md-12 col-sm-12 gap-3 flex-lg-row flex-md-row flex-row">
            <div className="right" style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="box d-flex flex-column align-items-left gap-3 p-2 justify-content-around"
                style={{ backgroundColor: "#FFFFF", borderRadius: "12px", marginBottom: "10px", width: "80%" }}
              >
                <div className="d-flex flex-column">
                  <p style={{ fontSize: "25px", fontWeight: "bold", marginTop: "5px" }}>
                    Next Trip
                  </p>
                </div>
                <div className="d-flex">
                  <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px", color: "red" }}>
                    25/08/2023
                  </p>
                </div>
              </div>
              <div className="col-12">
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
    </div>
  );
}

export default Driver;
