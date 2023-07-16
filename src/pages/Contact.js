import React from 'react';
import "./../styles/contact.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/footer';
import Header from '../components/Header';

function Contact() {
    return (
    <div>
        <Header/>
    <div className='body d-flex justify-content-center align-items-center'>
        <h1 className='text-white' style={{fontSize:"128px",fontWeight:"bold"}}>Contact</h1>
    </div>
    <div className="shadow p-5">
    <p className="ser_title text-center">Home / Contact</p>
      <h2 className="text-center heading1">We are more than happy </h2>
      <h2 className="text-center heading2">to help you.</h2>
        <div className="row p-5">
            <div className="col-md-4 p-5 text-black info">
                <div className="d-flex flex-row py-1">
                  <Icon.Envelope color="black" size={30}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.Envelope>
                  <p class="mt-3 ms-3">info@yourdomain.com</p>
                </div>
                <div className="d-flex flex-row py-1">
                  <Icon.Telephone color="black" size={30}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.Telephone>
                  <p className="mt-3 ms-3">+1 (378) 400-1234</p>
                </div>
                <div className="d-flex flex-row py-1">
                  <Icon.GlobeAmericas color="black" size={30}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.GlobeAmericas>
                  <p className="mt-3 ms-3">www:yourdomain.com</p>
                </div>
                <div className="d-flex flex-row gap-4 py-4 px-2">
                  <Icon.Facebook color="#023047" size={20}/>
                  <Icon.Twitter color="#023047" size={20}/>
                  <Icon.Linkedin color="#023047" size={20}/>
                  <Icon.Instagram color="#023047" size={20}/>
                </div>
            </div>    
            <div className="col-md-8 p-5"> 
                <Form>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label style={{fontSize: '22px',}}>Name</Form.Label>
                          <Form.Control type="text" style={{
                                    border: 'none',
                                    borderBottom: '1px solid black',
                                    borderRadius:0,
                            }} required/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label style={{fontSize: '22px',}}>Email</Form.Label>
                          <Form.Control type="email" style={{
                                    border: 'none',
                                    borderBottom: '1px solid black',
                                    borderRadius:0,
                            }} required/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label style={{fontSize: '22px',}}>Subject</Form.Label>
                          <Form.Control type="text" style={{
                                    border: 'none',
                                    borderBottom: '1px solid black',
                                    borderRadius:0,
                            }} required/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label style={{fontSize: '22px',}}>Phone</Form.Label>
                          <Form.Control type="number" style={{
                                    border: 'none',
                                    borderBottom: '1px solid black',
                                    borderRadius:0,
                            }} required/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label style={{fontSize: '22px',}}>Hello I'm Intrested in..</Form.Label>
                        <Form.Control as="textarea"style={{
                                    border: 'none',
                                    borderBottom: '1px solid black',
                                    borderRadius:0,
                            }}/>
                      </Form.Group>
                    </Row>
                    <Button className='mt-5 d-flex flex-column justify-content-center align-items-center p-4 gap-2 w-249 h-82' 
                        style={{borderRadius: '18px',background: '#DB163A',boxShadow: '0px 10px 20px rgba(192, 192, 192, 0.35)'}}>
                        Send Now
                    </Button>
                </Form>
            </div>
        </div>    
        <div className="row p-5">
            <div className="location d-flex justify-content-center align-items-center col-md-4 p-5 text-black"></div>
            <div className="col-md-8 p-5">
                <div>
                    <span className="detail">Location</span>
                    <span className="data">14, 3/2, Pereira lane, Colombo 06.</span>
                </div>
                <div className="mt-5">
                    <span className="detail">Working hours</span>
                    <span className="data">Week days 8 a.m to 6 p.m</span>
                    <span className="data">Week-ends 8 a.m to 12 p.m</span>
                </div>
            </div>
        </div>     
    </div> 
    <Footer />
    </div>
  );
};


export default Contact