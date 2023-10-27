import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./../../styles/hotel/hotel-dashboard.css";
import * as Icon from "react-bootstrap-icons";
import { Calendar } from "react-modern-calendar-datepicker";
import axios from "axios";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

export const data = {
  labels: ["Occuoancy", "Vacancy"],
  datasets: [
    {
      label: "Revenue",
      data: [2500, 7500],
      backgroundColor: ["#085D9B", "#6BABD9"],
      borderWidth: 0,
    },
  ],
};

export const data1 = {
  labels: ["Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022"],
  datasets: [
    {
      label: "Revenue",
      data: [900, 1200, 1800, 1400, 2500],
      backgroundColor: [
        "linear-gradient(180deg, #004577 0%, #81A1DF 100%)",
        "linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #818ADF 100%)",
        "linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #9081DF 100%)",
        "linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #A781DF 100%)",
        "linear-gradient(180deg, #004577 0%, #81D0DF 100%)",
      ],
      borderWidth: 0,
    },
  ],
};

const data2 = [
  {
    name: "Jan",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Feb",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Mar",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Apr",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Jun",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const HotelDashboard = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  const [requests, setRequests] = useState([]);
  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get("/viewRequest")
      .then((response) => {
        setRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const filteredRequests = requests.filter((request) => request.status == null);

  const currentOccupants = requests.filter((request) => request.status == 1);

  return (
    <div className="d-flex flex-column gap-2 w-100">
      <div className="d-flex flex-lg-row flex-md-column flex-column gap-md-3 justify-content-evenly my-2">
        <div
          style={{ backgroundColor: "#FFF", borderRadius: "5px" }}
          className="d-flex flex-column gap-lg-1 col-lg-4 col-md-11 col-10 p-1"
        >
          <p style={{ fontSize: "1rem" }}>
            <b>Incoming requests</b>
          </p>
          <div className="d-flex flex-column align-items-center gap-lg-3 gap-md-2">
            {filteredRequests.map((request)=>
            <div
              className="d-flex shadow-lg col-10 p-2 justify-content-center"
              style={{ borderRadius: "1rem", backgroundColor: "#FFF" }}
            >
              <div className="d-flex col-3">
                <img
                  className="object-fit-cover img-fluid m-auto"
                  src={require("./../../assets/img/DQ.jpeg")}
                  style={{
                    borderRadius: "5rem",
                    // width: "40px",
                    // height: "40px"
                  }}
                ></img>
              </div>
              <div
                style={{ color: "" }}
                className="d-flex flex-column col-12 col-md-8 col-lg-7 gap-2 align-items-center justify-content-center "
              >
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  {request.hotelName}
                </p>
                <p className="m-0" style={{ fontSize: "0.75rem" }}>
                  {request.date}
                </p>
              </div>
            </div>
            )}
          </div>
        </div>
        <div
          style={{ backgroundColor: "#FFF", borderRadius: "5px" }}
          className="d-flex flex-column gap-lg-1 col-lg-4 col-md-11 p-1"
        >
          <p style={{ fontSize: "1rem" }}>
            <b>Current occupants</b>
          </p>
          <div className="d-flex flex-column align-items-center gap-lg-3 gap-md-2">
          {currentOccupants.map((request)=>
            <div
              className="d-flex flex-row col-10 shadow-lg p-2 justify-content-evenly"
              style={{ borderRadius: "1rem", backgroundColor: "white" }}
            >
              <div className="d-flex col-3">
                <img
                  className="object-fit-cover img-fluid m-auto"
                  src={require("./../../assets/img/DQ.jpeg")}
                  style={{
                    borderRadius: "5rem",
                  }}
                ></img>
              </div>
              <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  {request.hotelName}
                </p>
                <p className="m-0" style={{ fontSize: "0.75rem" }}>
                  {request.date}
                </p>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="d-flex col-lg-3 col-md-11 justify-content-md-center ">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            colorPrimary="#0fbcf9" // added this
            colorPrimaryLight="rgba(75, 207, 250, 0.4)"
            shouldHighlightWeekends
          />
        </div>
      </div>
      <div className="d-flex flex-lg-row flex-md-column flex-column justify-content-evenly">
        <div
          style={{ backgroundColor: "#FFF", borderRadius: "5px" }}
          className="d-none d-md-none d-lg-flex flex-column col-lg-7  shadow-lg p-2"
        >
          <p style={{ fontSize: "1rem" }}>
            <b>Revenue</b>
          </p>
          <ComposedChart
            width={670}
            height={330}
            data={data2}
            margin={{
              top: 20,
              left:20
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </div>
        <div
          style={{ backgroundColor: "#FFF", borderRadius: "5px" }}
          className="d-flex flex-column col-lg-4 col-11 shadow-lg p-2"
        >
          <p style={{ fontSize: "1rem" }}>
            <b>Analytics</b>
          </p>
          <div className="d-flex col-md-11 mx-lg-3 mx-md-4 justify-content-md-center">
          <PieChart width={400} height={350}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;
