import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "./../styles/error.css";
import err from '../assets/img/bg3.png';

export default function SystemError() {
  return (
    <div className='error-main-div'>
      <div className='error-bg'>
        <div className='d-flex flex-column flex-md-row flex-lg-row p-5 justify-content-evenly'>
          <div className='d-flex flex-column p-5 text-black info'>
            <h2>404</h2>
            <h4>We are sorry, but the page you requested was not found</h4>
            <button type="submit" className="btn btn-primary mt-3" style={{width:'50%', backgroundColor: '#004577', height: '50px'}}>Back To Home </button>
          </div>
          <div className='d-flex flex-column p-5 text-black info'>
            <img className="img_2 img-fluid" src={err}></img>
          </div>
        </div>
          {/* <div className='container'>
            <div className='column'>
              <h2>404</h2>
              <h4>We are sorry, but the page you requested was not found</h4>
              <button type="submit" className="btn btn-primary mt-3" style={{width:'50%', backgroundColor: '#004577', height: '50px'}}>Back To Home </button>
            </div>
            <div className='column'>
              <img className="img_2 img-fluid" src={err}></img>
            </div>
          </div> */}
      </div>
    </div>
  )
}
