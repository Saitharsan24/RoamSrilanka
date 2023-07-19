import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import "../styles/holidayplanner_dashboard.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

function HolidayDashboard() {
  return (
    <React.Fragment>
      <div className=" full">
        <Header />

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
                <p>Account Setting</p>
                <p className=" text-danger">
                  Details about your Peronal information
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

                <p className="name float-md-start float-lg-start">Manoharan Keethapriya</p>

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
                    10 Lines Essay is considered one of the most enjoyable and
                    fun-filled experiences to express thoughts, enhance spoken
                    and written English Skills. Enhance your Vocabulary and
                    Creativity by going through 10 Lines on diverse topics in
                    English.
                  </p>
                </div>
              </div>
            </div>
            <div className="details d-flex flex-column align-items-center mb-3 col-12 p-3">
              <p className="user">User Information</p>
              <div className=" d-flex w-100">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontSize: "18px" }}>
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:"#F1F1F2"
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontSize: "18px" }}>
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="email"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:"#F1F1F2"
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontSize: "18px" }}>
                          Address
                        </Form.Label>
                        <Form.Control
                          type="text"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:"#F1F1F2"
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label style={{ fontSize: "18px" }}>
                          NIC Number
                        </Form.Label>
                        <Form.Control
                          type="number"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:"#F1F1F2"
                          }}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group>
                      <Form.Label style={{ fontSize: "18px" }}>
                        Contact Number
                      </Form.Label>
                      <Form.Control

                        style={{
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor:"#F1F1F2"
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Button
                    className="update_prof mt-5 d-flex flex-column float-end p-2 gap-2"
                
                  >
                    Update Profile
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default HolidayDashboard;
