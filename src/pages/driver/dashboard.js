import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { hover } from "@testing-library/user-event/dist/hover";
import { PureComponent } from "react";
import { useSession } from '../../Context/SessionContext';
import axios from "axios";

import {
    LineChart,
    Line,
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

const data = [
  {
    name: "Jan",
    
    km: 2400,
    
  },
  {
    name: "Feb",
   
    km: 1398,
    
  },
  {
    name: "Mar",
   
    km: 9800,
    
  },
  {
    name: "Apr",
    
    km: 3908,
    
  },
  {
    name: "May",
   
    km: 4800,
   
  },
  {
    name: "Jun",
    
    km: 3800,
    
  },
  {
    name: "Jul",
    
    km: 4300,
    
  },
];

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 2500) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  }

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    </svg>
  );
};

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
      .get("/allTripRequests")
      .then((response) => {
        setRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const filteredRequests = requests.filter((request) => request.status == 1);
  console.log("My requests : " + filteredRequests.length);
  //Initiating sessoin data
  const { sessionData , setSessionData  } = useSession();

  const Username = sessionData.userFullName;
  console.log(Username);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () =>{
    setIsHovered(true);
  }
  const handleMouseLeave = () =>{
    setIsHovered(false);
  }

  const [value, setValue] = useState(new Date());
  return (
    <div  >
      <div
        style={{ backgroundColor: "#ECECEC" }}
        className="d-flex flex-row column-gap-2 col-12"
      >
        <div className="d-flex flex-column flex-lg-row col-lg-9 col-md-8 col-12 p-2 mt-5 w-100">
          <div className="d-flex col-lg-7 col-md-12 gap-3 flex-lg-column flex-md-column flex-column">
            <div class="card mb-2" >
              <div class="card-body" style={{backgroundColor:"76AACF"}}>
                  <h5 class="card-title">Welcome Back {Username}!</h5>
                  {/* <div class="row mt-4">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Total Km's</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card border-danger">
                            <div class="card-body">
                                <h6 class="card-title">Trips</h6>
                            </div>
                        </div>
                    </div>
                  </div> */}
              </div>
            </div>
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
                  height: "20rem",
                }}
                className="d-flex gap-3 col-lg-10 col-sm-12 col-md-7 p-2 ms-2 chart"
              >
                <LineChart
                     width={400}
                     height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid  />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="km"
                      stroke="#004577"
                      dot={<CustomizedDot />}
                    />
              
                  </LineChart>
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
              <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">Vehicle Rate</h5>
                    {/* <ReactStars {...ratingExample} /> */}
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">Next Trip</h5>
                    <h4 style={{color:"red"}}>23/05/2023</h4>
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-body ml-3 align-items-center">
                    <h5 class="card-title" style={{color:"#004577"}}>Upcoming Trips</h5>
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
    </div>
  );
}

export default Driver;