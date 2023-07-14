import React from 'react';
import "./../styles/contact.css";
import "bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/footer';

function Contact() {
    return (
    <div>
    <div class="mt-5 shadow p-5">
      <h2 class="text-center heading1">We are more than happy </h2>
      <h2 class="text-center heading2">to help you.</h2>
        <div class="row ">
            <div class="col-md-4 p-5 text-black info">
                <div className="d-flex flex-row">
                  <Icon.Envelope color="black" size={25}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.Envelope>
                  <p class="mt-3 ms-3">info@yourdomain.com</p>
                </div>
                <div className="d-flex flex-row">
                  <Icon.Telephone color="black" size={25}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.Telephone>
                  <p class="mt-3 ms-3">+1 (378) 400-1234</p>
                </div>
                <div className="d-flex flex-row">
                  <Icon.GlobeAmericas color="black" size={25}
                    className="mt-3 border rounded-circle p-1 bg-white"
                  ></Icon.GlobeAmericas>
                  <p class="mt-3 ms-3">www:yourdomain.com</p>
                </div>
                <div className="d-flex flex-row gap-4 py-4 px-2">
                  <Icon.Facebook color="black" />
                  <Icon.Twitter color="white" />
                  <Icon.Linkedin color="white" />
                  <Icon.Instagram color="white" />
                </div>
            </div>    
        </div>
    </div> 
    <Footer />
    </div>
  );
};


export default Contact