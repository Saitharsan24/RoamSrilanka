import React from "react";
import "./../styles/contact.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import { Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column w-100">
        <div className="contact col-12 text-white d-flex flex-column justify-content-center barlow-text">
          <h1
            className="text-white"
            style={{
              fontFamily: "Barlow",
              fontSize: "7rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact
          </h1>
        </div>
        <div className="d-flex flex-column col-12 contact-list text-center">
          <a href="#link">
            <p style={{ color: "#004577", fontSize: "1rem" }} className="mt-4">
              Home/Contact
            </p>
          </a>
          <br />
          <h2 className="text-center jost-text heading1">
            We are more than happy{" "}
          </h2>
          <h2 className="text-center jost-text heading2">to help you.</h2>
          <div className="d-flex flex-column col-12  flex-md-row flex-lg-row p-5 justify-content-evenly gap-5">
            <div className="d-flex flex-column col-12 col-lg-3 col-md-5 p-5 text-black info">
              <div className="d-flex flex-column flex-md-row flex-sm-row align-items-center py-1">
                <Icon.Envelope
                  color="black"
                  size={30}
                  className="mt-3 border rounded-circle p-1 bg-white"
                ></Icon.Envelope>
                <p className="ms-3 info-text mb-0">info@yourdomain.com</p>
              </div>
              <div className="d-flex flex-column flex-md-row flex-sm-row align-items-center py-1">
                <Icon.Telephone
                  color="black"
                  size={30}
                  className="mt-3 border rounded-circle p-1 bg-white"
                ></Icon.Telephone>
                <p className="ms-3 info-text mb-0">+1(378)400-1234</p>
              </div>
              <div className="d-flex flex-column flex-md-row flex-sm-row align-items-center py-1">
                <Icon.GlobeAmericas
                  color="black"
                  size={30}
                  className="mt-3 border rounded-circle p-1 bg-white"
                ></Icon.GlobeAmericas>
                <p className="ms-3 info-text mb-0">www:yourdomain.com</p>
              </div>
              <div className="d-flex flex-row justify-content-center gap-3 py-4">
                <Icon.Facebook color="#023047" size={20} />
                <Icon.Twitter color="#023047" size={20} />
                <Icon.Linkedin color="#023047" size={20} />
                <Icon.Instagram color="#023047" size={20} />
              </div>
            </div>
            <div className="d-flex col-12 col-lg-7 col-md-8 ">
              <Form className="d-flex flex-column" style={{ width: "100%" }}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ fontSize: "22px" }}>Name</Form.Label>
                      <Form.Control
                        type="text"
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                          borderRadius: 0,
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ fontSize: "22px" }}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                          borderRadius: 0,
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ fontSize: "22px" }}>
                        Subject
                      </Form.Label>
                      <Form.Control
                        type="text"
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                          borderRadius: 0,
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ fontSize: "22px" }}>
                        Phone
                      </Form.Label>
                      <Form.Control
                        type="number"
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                          borderRadius: 0,
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label style={{ fontSize: "22px" }}>
                      Hello I'm Intrested in..
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        borderRadius: 0,
                      }}
                    />
                  </Form.Group>
                </Row>
                <Button
                  className="d-flex flex-column justify-content-center align-items-center mt-4 p-3 ms-auto "
                  style={{
                    borderRadius: "18px",
                    background: "#DB163A",
                    border: "none",
                    width: "15rem",
                  }}
                >
                  Send Now
                </Button>
              </Form>
            </div>
          </div>
          <div className="d-flex flex-column col-12 flex-md-row flex-lg-row gap-3 justify-content-evenly p-3">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  width="100%"
                  height="350vh"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=1000&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://connectionsgame.org/">Connections Game</a>
              </div>
              <style>
                .mapouter
                {"position:relative;text-align:right;width:100%;height:1000px;"}
                .gmap_canvas{" "}
                {
                  "overflow:hidden;background:none!important;width:100%;height:1000px;"
                }
                .gmap_iframe {"height:1000px!important;"}
              </style>
            </div>
            <div
              className="d-flex flex-column p-5 col-12 col-md-6 col-lg-4"
              style={{ textAlign: "left" }}
            >
              <div>
                <span className="detail d-flex">Location</span>
                <span className="data d-flex">
                  14, 3/2, Pereira lane, <br />
                  Colombo 06.
                </span>
              </div>
              <div className="mt-5">
                <span className="detail d-flex">Working hours</span>
                <div className="row">
                  <div className="col-md-4">
                    <span className="data">
                      Week days <br />8 a.m to 6 p.m
                    </span>
                  </div>
                  <div className="col-md-4">
                    <span className="data d-flex">
                      Week-ends <br />8 a.m to 12 p.m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;