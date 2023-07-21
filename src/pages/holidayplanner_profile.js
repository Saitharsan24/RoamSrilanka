import React from "react";
import Headeruser from "../components/headerusers";
import Footer from "../components/footer";
import "../styles/holidayplanner_profile.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form } from "react-bootstrap";
import Sidebar from "../components/holidayplanner-sidebar";

function Holidayprofile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <React.Fragment>
      <div className=" full d-flex flex-column">
        <Headeruser />
        <div className="d-flex">
          <Sidebar />
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
                    <p className=" text-danger">
                    Change your account password
                    </p>
                  </div>
                </a>
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

                    <button
                      className=" change_pic col-4 "
                      style={{ height: "3rem", width: "Auto" }}
                    >
                      Change Profile Picture
                    </button>
                  </div>
                  <div>
                    <p className=" bio m-0 p-3">Bio</p>
                    <div className="box d-flex align-self-center p-3 ">
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
                            className="d-flex flex-column gap-4"
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
                                  placeholder="Enter your name"
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
                                  placeholder="Enter email"
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
                                  placeholder="Enter email"
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
                                  placeholder="Enter email"
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
                                  placeholder="Enter email"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex justify-content-end col-11">
                              <button
                                style={{
                                  borderRadius: "10px",
                                  backgroundColor: "#004577",
                                  color: "#ffffff",
                                  border: "0px",
                                  width: "auto",
                                }}
                                className=" d-flex col-4 justify-content-center  p-1"
                                type="submit"
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
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default Holidayprofile;
