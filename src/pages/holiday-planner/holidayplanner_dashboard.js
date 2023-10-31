import React, { PureComponent, useState, useEffect } from "react";
import axios from "axios";
import {
  RadialBarChart,
  RadialBar,
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

import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import * as Icon from "react-bootstrap-icons";

import "../../styles/holidayplanner_dashboard.css";
// import HPPackage from "./HPPackage";

const data = [
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

const data2 = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function Holiday_dashboard() {
  const apiBaseUrl ="http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [packages, setPackages] = useState();
  const [eventCount, setEventCount] = useState();
  const [fairCount, setFairCount] = useState();
  const [requestCount, setRequestCount] = useState();
  const [frequestCount, setFRequestCount] = useState();

  useEffect(() => {
    axiosInstance
      .get("/packages/count")
      .then((res) => {
        setPackages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/event/count")
      .then((res) => {
        setEventCount(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/fair/count")
      .then((res) => {
        setFairCount(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/request/count")
      .then((res) => {
        setRequestCount(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/frequest/count")
      .then((res) => {
        setFRequestCount(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  }, []);

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  return (
    <React.Fragment>
      {/* <div className="d-flex flex-column">
      <Header />
        <div className="d-flex flex-row col-12" style={{ backgroundColor: "#F4F4F5" }}>
          <Sidebar /> */}

      <div className="d-flex w-100 gap-3 p-1 flex-column ms-3">
        <div className="d-flex w-100 gap-2 p-1 flex-lg-row flex-md-column flex-column">
          <div className="d-flex flex-column col-4 gap-3 p-2 ">
            <a
              href="plannerPackage"
              className=" box d-flex col-lg-11 col-sm-8  flex-row align-items-center gap-3 p-2 justify-content-around"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className=" d-flex flex-column ">
                <p style={{ color: "#98A3B2", fontSize: "30px" }}>Packages</p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Total Packages - {packages}
                </p>
              </div>
              <div className="d-flex">
                <Icon.ChevronRight />
              </div>
            </a>
            <a
              href="plannerEvent"
              className=" box d-flex col-lg-11 col-sm-8 flex-row align-items-center gap-3 p-3 justify-content-around "
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className=" d-flex flex-column justify-content-between ">
                <p style={{ color: "#98A3B2", fontSize: "28px" }}>Events</p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Total Events - {eventCount}
                </p>
              </div>
              <div className=" d-flex">
                <Icon.ChevronRight />
              </div>
            </a>
          </div>
          <div className="d-flex flex-column col-3 gap-3 p-2">
            <a
              href=""
              className=" box d-flex col-lg-12 col-sm-8  flex-row align-items-center gap-3 p-2 justify-content-around"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className=" d-flex flex-column ">
                <p style={{ color: "#98A3B2", fontSize: "30px" }}>Requests</p>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Packages - {requestCount}
                </p>
                <div style={{ width: '48px' }}></div>
                <p style={{ fontSize: "15px", fontWeight: "bold"}}>
                  Fairs - {frequestCount}
                </p>
                </div>
              </div>
              <div className="d-flex">
                <Icon.ChevronRight />
              </div>
            </a>
            <a
              href="plannerItem"
              className=" box d-flex col-lg-12  col-sm-8 flex-row align-items-center gap-3 p-3 justify-content-around"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className=" d-flex flex-column justify-content-between ">
                <p style={{ color: "#98A3B2", fontSize: "28px" }}>Fairs</p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Total Fairs - {fairCount}
                </p>
              </div>
              <div className="d-flex">
                <Icon.ChevronRight />
              </div>
            </a>
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "13px",
              boxShadow: "0px 4px 4px 0px #004577",
            }}
            className="d-flex ms-lg-4 col-4 flex-column"
          >
            <p style={{ color: "#98A3B2", fontSize: "30px" }} className="d-flex justify-content-center">Fair Revenue</p>{" "}
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={data2}
              >
                <RadialBar
                  minAngle={15}
                  // label={{ position: "insideStart", fill: "#fff" }}
                  background
                  clockWise
                  dataKey="uv"
                  width={100}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="d-flex  w-100 flex-lg-row flex-md-column align-items-center 
             gap-2 flex-column"
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              height: "Auto",
            }}
            className="d-flex flex-column gap-3 col-8 col-sm-12 col-md-7 p-3 ms-2 chart"
          >
            <p
              style={{ color: "#98A3B2", fontSize: "28px" }}
              className="d-flex fw-semibold"
            >
              Anual Statistics
            </p>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
              width={600}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            {/* </ResponsiveContainer> */}
          </div>
          <div className="d-none d-md-flex d-lg-flex col-4 justify-content-center">
            <Calendar
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              colorPrimary="#0fbcf9" // added this
              colorPrimaryLight="rgba(75, 207, 250, 0.4)"
              shouldHighlightWeekends
            />
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </React.Fragment>
  );
}

export default Holiday_dashboard;
