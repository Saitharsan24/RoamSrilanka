import React from "react";
import "../../styles/holidayplanner_profile.css";
import profile from "../../assets/images/profile.jpg";
import { Row, Col, Form } from "react-bootstrap";
import { hover } from "@testing-library/user-event/dist/hover";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
  {
    name: "Pg A",
    
    pv: 2400,
    
  },
  {
    name: "Pg B",
   
    pv: 1398,
    
  },
  {
    name: "Pg C",
   
    pv: 9800,
    
  },
  {
    name: "Pg D",
    
    pv: 3908,
    
  },
  {
    name: "Pg E",
   
    pv: 4800,
   
  },
  {
    name: "Pg F",
    
    pv: 3800,
    
  },
  {
    name: "Pg G",
    
    pv: 4300,
    
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


function Holidayprofile() {
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

  return (
    <React.Fragment>
      {/* <div className=" full ">
        <Headeruser />
        <div className="d-flex">
          <Sidebar /> */}
          <div col-10>
            <div className="total d-flex flex-column  flex-md-row flex-lg-row  gap-3 col-12 justify-content-evenly align-items-center align-items-md-start align-items-lg-start">
              <div className=" d-flex flex-column col-11 col-md-4 col-lg-4 gap-4">
                <a href="/saran" className=" account">
                  <div className="Acc d-flex flex-column col-12 p-3">
                    <p>Account Setting</p>
                    <p className=" text-danger">
                      Details about your Peronal information
                    </p>
                  </div>
                </a>
                <a href="/saran" className="account">
                  <div className="Acc2 d-flex flex-column col-12 p-3">
                    <p>Change Password</p>
                    <p className=" text-danger" >Change your account password</p>
                  </div>
                </a>
                <div className="d-flex flex-column col-12 pt-2 pb-2" style={{backgroundColor:'#ffffff',borderRadius:'13px',boxShadow:'2px 4px 7px 0px rgba(0, 0, 0, 0.08)'}} >
                  <p className="d-flex justify-content-center">Order for Our Packages in this month</p>
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
                      dataKey="pv"
                      stroke="#004577"
                      dot={<CustomizedDot />}
                    />
              
                  </LineChart>
                </div>
              </div>
              <div className="d-flex col-11 col-md-6 col-lg-6 gap-3 flex-column">
                <div className="profile d-flex flex-column flex-md-column p-3 ">
                  <div className=" d-lg-flex d-md-flex d-flex flex-column-reverse flex-md-column-reverse flex-lg-row gap-lg-4 gap-md-2 gap-sm-1 justify-content-between p-2 ">
                    <img
                      src={profile}
                      className=" profile-pic object-fit-cover img-fluid m-auto col-3"
                    ></img>


                        <p className="name float-md-start float-lg-start">
                          Manoharan Keethapriya
                        </p>
                  </div>
                  <div>
                    <p className=" bio m-0 p-3">Bio</p>
                    <div className="box1 d-flex align-self-center p-3 ">
                      <p>
                        10 Lines Essay is considered one of the most enjoyable
                        and fun-filled experiences to express thoughts, enhance
                        spoken and written English Skills. Enhance your
                        Vocabulary and Creativity by going through 10 Lines on
                        diverse topics in English.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="details d-flex flex-column align-items-center mb-3 col-12 p-3">
                  <div className="d-flex col-10 p-2">
                    <p className="user align-self-lg-start">User Information</p>
                  </div>
                  <div className=" d-flex">
                    {/* <Container> */}
                    <Row className=" d-flex justify-content-center  ">
                      <Col xs={12} md={6} lg={10}>
                        <Form
                          onSubmit={handleSubmit}
                          className="d-flex flex-column gap-4 align-items-center"
                        >
                          <div className=" d-flex flex-lg-row flex-md-column flex-column col-11 gap-5">
                            <Form.Group controlId="formBasicName">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                                style={{
                                  borderRadius: "5px",
                                  background: "#F1F1F2",
                                  border: "none",
                                }}
                                type="text"
                                placeholder="Keethapriya"
                              />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                                style={{
                                  borderRadius: "5px",
                                  background: "#F1F1F2",
                                  border: "none",
                                }}
                                type="email"
                                placeholder="Manoharan"
                              />
                            </Form.Group>
                          </div>
                          <div className=" d-flex flex-row col-11">
                            <Form.Group
                              className="d-flex flex-column col-12 align-items-lg-start"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                style={{
                                  borderRadius: "5px",
                                  background: "#F1F1F2",
                                  border: "none",
                                }}
                                type="email"
                                placeholder="COlombo"
                              />
                            </Form.Group>
                          </div>
                          <div className="d-flex flex-lg-row flex-md-column flex-column col-11 gap-5">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>NIC Number</Form.Label>
                              <Form.Control
                                style={{
                                  borderRadius: "5px",
                                  background: "#F1F1F2",
                                  border: "none",
                                }}
                                type="email"
                                placeholder="993441798V"
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Contact</Form.Label>
                              <Form.Control
                                style={{
                                  borderRadius: "5px",
                                  background: "#F1F1F2",
                                  border: "none",
                                }}
                                type="email"
                                placeholder="0774320469"
                              />
                            </Form.Group>
                          </div>
                          <div className="d-flex justify-content-end col-11">
                            <button
                              style={{
                                borderRadius: "10px",
                                backgroundColor:"#004577",
                                boxShadow: isHovered ?  '0px 4px 40px 0px rgba(0, 69, 119, 0.35)': 'none',
                                color: "#ffffff",
                                border: "0px",
                                width: "auto"
                              }}
                              className="d-flex col-4 justify-content-center p-2"
                              type="submit"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              Update profile
                            </button>
                          </div>
                        </Form>
                      </Col>
                    </Row>
                    {/* </Container> */}
                  </div>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default Holidayprofile;