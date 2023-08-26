import React, { useState } from 'react';
import './../styles/signup.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";



function Signup() {
  // const apiBaseUrl = "http://localhost:8080";

  // const axiosInstance = axios.create({
  //     baseURL: apiBaseUrl,
  //     timeout: 5000
  //     });


    const [formData, setFormData] = useState({
      fullName: '',
      dob: '',
      gender: '',
      email: '',
      passportNumber: '',
      country: '',
      password: '',
      confirmPassword: ''
    });

    const [errors, setErrors] = useState({});


  return (
    <div className="signup-main d-flex flex-column justify-content-center align-items-end w-100">
      <div className="signup-content-container d-flex flex-column">
        <h4 className='mb-3'>Register with <span> Roam Srilanka</span></h4>
        <div className='signup-content-inputs d-flex flex-column w-100 gap-3'>
            {/* <form action="" method='POST'> */}
              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Full Name</p>
                  <input className='w-100' type="text" placeholder='eg: John Carder' />
                </div>
                <div className='w-50'>
                  <p>Date of Birth</p>
                  <input className='w-100' type="date"/>
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Gender</p>
                  {/* <input className='w-100' type="text" /> */}
                  <select className='w-100' name="" id="">
                    <option disabled>Choose gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Preferred not to say</option>
                  </select>
                </div>
                <div className='w-50'>
                  <p>Email address</p>
                  <input className='w-100' type="text" placeholder='eg: johncarder@mail.com'/>
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Passport Number</p>
                  <input className='w-100' type="text" placeholder='eg: johncarder@mail.com'/>
                </div>
                <div className='w-50'>
                  <p>Country</p>
                  <input className='w-100' type="text" placeholder='eg: johncarder@mail.com'/>
                </div> 
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Password</p>
                  <input className='w-100' type="password" />
                </div>
                <div className='w-50'>
                  <p>Confirm password</p>
                  <input className='w-100' type="password" />
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <Button 
                  className='w-100 signup-input-row-btn'
                  style={{
                    backgroundColor: '#004577',
                    fontWeight:'500', 
                  }}
                >Register</Button>
              </div>
            {/* </form>       */}
          <div className="already-have-account d-flex flex-row w-100 gap-4 justify-content-center">
              <p style={{fontSize:"17px", fontWeight:"500"}}>Already have an account? <Link to="/login">Login</Link></p>
          </div> 

          <div className="signup-input-row-registerlinks d-flex flex-column justify-content-center align-items-center gap-1 w-100">
              <Link>Register as a hotel</Link>
              <Link>Register as a driver</Link>
              <Link>Register as a your guide</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup
