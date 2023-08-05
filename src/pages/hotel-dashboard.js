import React from "react";
import HotelSidebar from "../components/hotel-sidebar";
import "./../styles/hotel-dashboard.css";
import Headeruser from "../components/headerusers";
import * as Icon from "react-bootstrap-icons";
import Chart from 'chart.js/auto';
import ResponsiveCalendar from "../components/calender";
import { Bar, Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export const data = {
    labels: ['Occuoancy', 'Vacancy'],
    datasets: [
        {
            label: 'Revenue',
            data: [2500, 7500],
            backgroundColor: [
            '#085D9B',
            '#6BABD9',
            ],
            borderWidth:0,
    },
],
};

export const data1 = {
  labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022'],
  datasets: [
      {
          label: 'Revenue',
          data: [900, 1200, 1800, 1400, 2500],
          backgroundColor: [
          'linear-gradient(180deg, #004577 0%, #81A1DF 100%)',
          'linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #818ADF 100%)',
          'linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #9081DF 100%)',
          'linear-gradient(180deg, rgba(0, 69, 119, 0.80) 0%, #A781DF 100%)',
          'linear-gradient(180deg, #004577 0%, #81D0DF 100%)'
          ],
          borderWidth:0,
  },
],
};

const HotelDashboard = () => {

  return (
    <div className="d-flex flex-column">
      <Headeruser />
      <div
        style={{ backgroundColor: "#ECECEC" }}
        className="d-flex flex-row column-gap-3 col-12"
      >
        <HotelSidebar />
        <div className="d-flex flex-column w-100 flex-md-row flex-lg-row p-4 gap-5 justify-content-evenly">
          <div className="d-flex flex-column col-10 col-md-8 col-lg-6 gap-4 mt-2">
            <div style={{}}>
              <input
                style={{ backgroundColor: "#ECECEC" }}
                className="p-1 occupation col-6 col-md-6 col-lg-11"
                type="text"
                placeholder="Search hotel occupants"
              ></input>
              <Icon.Search className="col-1" style={{ color: "#087592" }} />
            </div>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Incoming requests</b>
              </p>
              <div className="d-flex flex-column flex-md-row flex-lg-row gap-3 col-12 justify-content-evenly">
                <div
                  className="d-flex col-12 col-md-8 col-lg-5 column-gap-3 flex-column flex-md-column flex-lg-row p-2 col-12"
                  style={{ borderRadius: "1rem", backgroundColor: "#24628F" }}
                >
                  <div className="d-flex col-12 col-md-8 col-lg-3 flex-column justify-content-center align-items-center p-1">
                    <img
                      className="object-fit-cover img-fluid m-auto"
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                        // width: "40px",
                        // height: "40px"
                      }}
                    ></img>
                  </div>
                  <div
                    style={{ color: "white" }}
                    className="d-flex flex-column col-12 col-md-8 col-lg-7 align-items-center justify-content-center "
                  >
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Jonathan D.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Tourist
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex col-12 col-md-8 col-lg-5 column-gap-3 flex-column flex-md-column flex-lg-row p-2 col-12"
                  style={{ borderRadius: "1rem", backgroundColor: "#ffff"}}
                >
                  <div className="d-flex col-12 col-md-8 col-lg-3 flex-column justify-content-center align-items-center p-1">
                    <img
                      className="object-fit-cover img-fluid m-auto"
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                        // width: "40px",
                        // height: "40px"
                      }}
                    ></img>
                  </div>
                  <div
                    style={{}}
                    className="d-flex flex-column col-12 col-md-8 col-lg-7 align-items-center justify-content-center "
                  >
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Jonathan D.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Tourist
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "1rem" }}>
                <b>Current occupants</b>
              </p>
              <div className="d-flex flex-column row-gap-3 col-12">
                <div
                  className="d-flex flex-column flex-md-column flex-lg-row column-gap-6 p-2 justify-content-evenly"
                  style={{ borderRadius: "1rem", backgroundColor: "white" }}
                >
                  <div className="d-flex col-12 col-md-6 col-lg-2">
                    <img
                      className="object-fit-cover img-fluid m-auto"
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                      }}
                    ></img>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-items-center col-12 col-md-6 col-lg-3 ">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Lilliana M.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                  <hr style={{ border: "1px solid Black" }} />
                  <div className="d-flex flex-column col-12 col-md-6 col-lg-3 justify-content-evenly align-items-center">
                    <p className="m-0" style={{ fontSize: "1.5rem" }}>
                      <b>$150</b>
                    </p>
                    <p
                      className="m-0"
                      style={{ color: "#4CAF50", fontSize: "0.75rem" }}
                    >
                      <b>Paid</b>
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column flex-md-column flex-lg-row column-gap-6 p-2 justify-content-evenly"
                  style={{ borderRadius: "1rem", backgroundColor: "white" }}
                >
                  <div className="d-flex col-12 col-md-6 col-lg-2">
                    <img
                      className="object-fit-cover img-fluid m-auto"
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                      }}
                    ></img>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-items-center col-12 col-md-6 col-lg-3 ">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Lilliana M.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                  <hr style={{ border: "1px solid Black" }} />
                  <div className="d-flex flex-column col-12 col-md-6 col-lg-3 justify-content-evenly align-items-center">
                    <p className="m-0" style={{ fontSize: "1.5rem" }}>
                      <b>$150</b>
                    </p>
                    <p
                      className="m-0"
                      style={{ color: "#4CAF50", fontSize: "0.75rem" }}
                    >
                      <b>Paid</b>
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column flex-md-column flex-lg-row column-gap-6 p-2 justify-content-evenly"
                  style={{ borderRadius: "1rem", backgroundColor: "white" }}
                >
                  <div className="d-flex col-12 col-md-6 col-lg-2">
                    <img
                      className="object-fit-cover img-fluid m-auto"
                      src={require("./../assets/img/DQ.jpeg")}
                      style={{
                        borderRadius: "5rem",
                      }}
                    ></img>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-items-center col-12 col-md-6 col-lg-3 ">
                    <p className="m-0" style={{ fontSize: "1rem" }}>
                      <b>Lilliana M.</b>
                    </p>
                    <p className="m-0" style={{ fontSize: "0.75rem" }}>
                      Feb 12 - Feb 14
                    </p>
                  </div>
                  <hr style={{ border: "1px solid Black" }} />
                  <div className="d-flex flex-column col-12 col-md-6 col-lg-3 justify-content-evenly align-items-center">
                    <p className="m-0" style={{ fontSize: "1.5rem" }}>
                      <b>$150</b>
                    </p>
                    <p
                      className="m-0"
                      style={{ color: "#4CAF50", fontSize: "0.75rem" }}
                    >
                      <b>Paid</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column col-10 col-md-8 col-lg-4 row-gap-3">
            <div className="d-none d-md-flex d-lg-flex w-100 align"><ResponsiveCalendar/></div>
            <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Analytics</b>
              </p>
              <div className="d-flex flex-column flex-md-row flex-lg-row">
                <div className="d-flex row-cols-4"><Doughnut data={data}/></div>
                <div className="d-flex flex-column justify-content-center">
                  <p className="occup_list" style={{ fontSize: "0.75rem" }}>
                    Occupancy rate: 75%
                  </p>
                  <p className="occup_list" style={{ fontSize: "0.75rem" }}>
                    Vacancy: 25%
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="d-flex flex-column">
              <p style={{ fontSize: "1rem" }}>
                <b>Monthly Revenue</b>
              </p>
              <div className="d-flex flex-row gap-4">
                <Bar data={data1}/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;
