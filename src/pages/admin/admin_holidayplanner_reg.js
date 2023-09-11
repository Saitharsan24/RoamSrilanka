import React ,{ useState } from 'react';
import "../../styles/admin/admin_holidayplanner_reg.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import axios from "axios";

function AdminPlannerReg() {

    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        username: '',
        nicNumber: '',
        contactNo: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const inputFormdata = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value}));
      }

      //Error message 
  const [errors, setErrors] = useState({
    fullName: '',
        dob: '',
        gender: '',
        username: '',
        nicNumber: '',
        contactNo: '',
        address: '',
        password: '',
        confirmPassword: ''
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
          case "nicNumber":
            error = value.trim() === "" ? "nic number is required." : "";
            break;
          case "contactNo":
            error = value.trim() === "" ? "ContactNo is required." : "";
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

    const handleaddplanner = async (e) =>{
        e.preventDefault();

        try {
            const response = await axiosInstance.post("/addPlanner", {
            plannerName:formData.fullName,
            date:formData.dob,
            contactNo:formData.contactNo,
            email:formData.username, // This is the email.
            nic:formData.nictNumber,
            gender:formData.gender,
            password:formData.password,
            address:formData.address
            });

            if (response.status === 200) {
                //console.log(plannerName);
                console.log("ok");
              }
     
    } catch (error) {
      
      console.log(error);
    }
    }

  return (
    <React.Fragment>
      
          
          <div className="w-100 d-flex justify-content-center  align-items-center">
          
              <section class="h-100 " style={{backgroundColor:"#"}}>
              <div className="holi-main d-flex flex-column justify-content-center align-items-end w-100">

                    <form onSubmit={handleaddplanner} method='POST'>
                    <div className="holi-content-container d-flex flex-column">
                    <h4 className='mb-3'>Register <span> HolidayPlanner</span></h4>
                    <div className='holi-content-inputs d-flex flex-column w-100 gap-2'>
                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Full Name</p>
                                <input className='w-100' name='fullName' type="text" placeholder='eg: John Carder' value={formData.fullName} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.fullName}</p>
                            </div>
                            <div className='w-50'>
                                <p>Date of Birth</p>
                                <input className='w-100' name='dob' type="date" value={formData.dob} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value); }} />
                                <p className="holi-error-text">{errors.dob}</p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Gender</p>
                                {/* <input className='w-100' type="text" /> */}
                                <select className='w-100' name='gender' value={formData.gender} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}>
                                <option disabled selected>Choose gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Preferred not to say</option>
                                </select>
                                <p className="holi-error-text">{errors.gender}</p>
                            </div>
                            <div className='w-50'>
                                <p>Email address</p>
                                <input className='w-100' name='username' type="text" placeholder='eg: johncarder@mail.com' value={formData.username} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}} />
                                <p className="holi-error-text">{errors.username}</p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>NIC Number</p>
                                <input className='w-100' name='nictNumber' type="text" placeholder='99xxxxxxxxxV' value={formData.nic} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.nicNumber}</p>
                            </div>
                            <div className='w-50'>
                                <p>Contact Number</p>
                                <input className='w-100' name='contactNo' type="number" placeholder='eg: 077xxxxxxx' value={formData.contactNo} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.contactNo}</p>
                            </div> 
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Password</p>
                                <input className='w-100' name='password' type="password" value={formData.password} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.password}</p>
                            </div>
                            <div className='w-50'>
                                <p>Confirm password</p>
                                <input className='w-100' name='confirmPassword' type="password" value={formData.confirmPassword} onChange={(e)=>{inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.confirmPassword}</p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-100'>
                                <p>Address</p>
                                <input className='w-100' name='address' type="text" value={formData.address} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{errors.address}</p>
                            </div>
                            
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <Button 
                                className='w-100 holi-input-row-btn'
                                style={{
                                backgroundColor: '#004577',
                                fontWeight:'500', 
                                }}
                                type='submit'
                            >Register</Button>
                            </div>
                            
                    </div>
                    </div>
                    </form>   
               </div>
             </section>          
            </div>
       
    </React.Fragment>
  );
}

export default AdminPlannerReg;

