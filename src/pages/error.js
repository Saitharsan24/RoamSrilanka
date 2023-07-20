import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import { Link } from 'react-router-dom'
import Header from "../components/Header";
import "./../styles/error.css";

export default function Error() {
  return (
    <div>
      <Header />
      <div className='error-bg'>
        <div className='container'>
          <div className='column'>
            <h2>404</h2>
            <h4>We are sorry, but the page you requested was not found</h4>
            <button type="submit" className="btn btn-primary mt-3" style={{width:'50%', backgroundColor: '#004577', height: '50px'}}>Back To Home </button>
          </div>
          <div className='column'>
            <img src="../assets/img/bg3.png" alt="error" />
          </div>
        </div>
      </div>
    </div>
  )
}
