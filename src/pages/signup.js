import React, { useState } from 'react';
import './../styles/signup.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";
import SignupPopup from './../components/signupPopup';


function Signup() {
  //state management for popup
  // const [showPopup, setShowPopup] = useState(false);

  //state management for form
  const [formData, setFormData] = useState({
      fullName: '',
      dob: '',
      gender: '',
      username: '',
      passportNumber: '',
      country: '',
      password: '',
      confirmPassword: ''
  });
  
    const inputFormdata = (name, value) => {
      setFormData((prev) => ({ ...prev, [name]: value}));
    }

  //Error message 
  const [errors, setErrors] = useState({
    fullName: "",
    dob: "",
    gender: "",
    username: "",
    passportNumber: "",
    country: "",
    password: "",
    confirmPassword: ""
  });

  //mail validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  // password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  //DOB validation
  const is18OrOlder = (dobString) => {
    const dob = new Date(dobString);
    const eighteenthBirthday = new Date(dob);
    eighteenthBirthday.setFullYear(dob.getFullYear() + 18);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return eighteenthBirthday <= currentDate;
  };

  //inline validation for checking empty fields
  const validateField = (name, value) => {
    let error = "";
    
    switch(name) {
      case "fullName":
        error = value.trim() === "" ? "Full name is required." : "";
        break;
      case "dob":
        console.log("hi");
        error = !is18OrOlder(value) ? "age should be above 18." : "";
        break;
      case "gender":
        error = value === "" || value === "disabled" ? "Gender is required." : "";
        break;
      case "username":
        error = !validateEmail(value) ? "Invalid email address." : "";
        break;
      case "passportNumber":
        error = value.trim() === "" ? "Passport number is required." : "";
        break;
      case "country":
        error = value.trim() === "" ? "Country is required." : "";
        break;
      case "password":
        error = !validatePassword(value) ? "Password must meet criteria." : "";
        break;
      case "confirmPassword":
        error = formData.password !== value ? "Passwords must match." : "";
        break;
      default:
        error = value.trim() === "" ? "This field is required." : "";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    console.log(formData)
  }

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000
  }); 

  const handleSignup = async (e) => {

    e.preventDefault();

    try {
      
      const response = await axiosInstance.post("/tourist", {
        fullName:formData.fullName,
        dob:formData.dob,
        gender:formData.gender,
        username:formData.username, // This is the email.
        passportNumber:formData.passportNumber,
        country:formData.country,
        password:formData.password
      });

      if (response.status === 200) {
        console.log("ok");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup-main d-flex flex-column justify-content-center align-items-end w-100">

      <form onSubmit={handleSignup} method='POST'>
      <div className="signup-content-container d-flex flex-column">
        <h4 className='mb-3'>Register with <span> Roam Srilanka</span></h4>
        <div className='signup-content-inputs d-flex flex-column w-100 gap-2'>
              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Full Name</p>
                  <input className='w-100' name='fullName' type="text" placeholder='eg: John Carder' value={formData.fullName} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.fullName}</p>
                </div>
                <div className='w-50'>
                  <p>Date of Birth</p>
                  <input className='w-100' name='dob' type="date" value={formData.dob} onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.dob}</p>
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Gender</p>
                  {/* <input className='w-100' type="text" /> */}
                  <select className='w-100' name='gender' onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}>
                    <option disabled selected>Choose gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Preferred not to say</option>
                  </select>
                  <p className="signup-error-text">{errors.gender}</p>
                </div>
                <div className='w-50'>
                  <p>Email address</p>
                  <input className='w-100' name='username' type="text" placeholder='eg: johncarder@mail.com' value={formData.username} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.username}</p>
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Passport Number</p>
                  <input className='w-100' name='passportNumber' type="text" placeholder='eg: johncarder@mail.com' value={formData.passportNumber} onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.passportNumber}</p>
                </div>
                <div className='w-50'>
                  <p>Country</p>
                  <input className='w-100' name='country' type="text" placeholder='eg: johncarder@mail.com' value={formData.country} onChange={(e)=>{inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.country}</p>
                </div> 
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <div className='w-50'>
                  <p>Password</p>
                  <input className='w-100' name='password' type="password" value={formData.password} onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.password}</p>
                </div>
                <div className='w-50'>
                  <p>Confirm password</p>
                  <input className='w-100' name='confirmPassword' type="password" value={formData.confirmPassword} onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                  <p className="signup-error-text">{errors.confirmPassword}</p>
                </div>
              </div>

              <div className="signup-input-row d-flex flex-row w-100 gap-4">
                <Button 
                  className='w-100 signup-input-row-btn'
                  style={{
                    backgroundColor: '#004577',
                    fontWeight:'500', 
                  }}
                  type='submit'
                >Register</Button>
              </div>
               
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
      </form>   
    </div>
  );
}

export default Signup
