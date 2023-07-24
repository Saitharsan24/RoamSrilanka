import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/holidayplanner-sidebar";
import * as Icon from "react-bootstrap-icons";
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

import "../styles/holidayplanner_dashboard.css";
import Calendar from "react-calendar";

export const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Holiday_dashboard() {
  const [value, setValue] = useState(new Date());
  return (
    <React.Fragment>
      <div className="d-flex flex-column">
      <Header />
        <div className="d-flex flex-row col-12" style={{ backgroundColor: "#F4F4F5" }}>
          <Sidebar />
          <div
            className="d-flex w-100 gap-3 p-2 flex-column ms-5"
          >
            <div className="d-flex col-12 gap-3 p-2 flex-lg-row flex-md-column flex-column">
              <div
                className=" box d-flex col-lg-3 col-sm-8  flex-row align-items-center gap-3 p-2 justify-content-around"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
              >
                <div className=" d-flex flex-column ">
                  <p style={{ color: "#98A3B2", fontSize: "30px" }}>Packages</p>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Total Packages - 25
                  </p>
                </div>
                <div className="d-flex">
                  <Icon.ChevronRight />
                </div>
              </div>
              <div
                className=" box d-flex col-lg-3 col-sm-8 flex-row align-items-center gap-3 p-3 justify-content-around "
                style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <p style={{ color: "#98A3B2", fontSize: "28px" }}>
                    Update Events
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Events of This Month - 7
                  </p>
                </div>
                <div className=" d-flex">
                  <Icon.ChevronRight />
                </div>
              </div>
              <div
                className=" box d-flex col-lg-2 col-sm-8  flex-row align-items-center gap-3 p-2 justify-content-around"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
              >
                <div className=" d-flex flex-column ">
                  <p style={{ color: "#98A3B2", fontSize: "30px" }}>Reviews</p>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    New Reviews - 20
                  </p>
                </div>
                <div className="d-flex">
                  <Icon.ChevronRight />
                </div>
              </div>
              <div
                className=" box d-flex col-lg-3  col-sm-8 flex-row align-items-center gap-3 p-3 justify-content-around"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}
              >
                <div className=" d-flex flex-column justify-content-between ">
                  <p style={{ color: "#98A3B2", fontSize: "28px" }}>
                    Update Fairs
                  </p>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Total Fairs - 20
                  </p>
                </div>
                <div className="d-flex">
                  <Icon.ChevronRight />
                </div>
              </div>
            </div>
            <div className="d-flex  col-12 flex-lg-row flex-md-column align-items-center 
             gap-2 flex-column">
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  height: "25rem",
                }}
                className="d-flex gap-3 col-8 col-sm-12 col-md-7 p-2 ms-2 chart"
              >
                <ResponsiveContainer>
                  <BarChart data={data}>
                    <Bar dataKey="pv" fill="#004577" />
                    <Bar dataKey="uv" fill="#DB163A" />
                    <Bar dataKey="amt" fill="#00B087" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="d-none d-md-flex d-lg-flex col-4 col-md-5 ">
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
    </React.Fragment>
  );
}

export default Holiday_dashboard;
