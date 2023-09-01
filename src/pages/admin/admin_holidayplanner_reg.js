import React from "react";
import "../../styles/admin/admin_holidayplanner_reg.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

function AdminPlannerReg() {

  return (
    <React.Fragment>
      
          
          <div className="w-100 d-flex justify-content-center  align-items-center">
          
              <section class="h-100 " style={{backgroundColor:"#"}}>
              <div className="holi-main d-flex flex-column justify-content-center align-items-end w-100">

                    <form >
                    <div className="holi-content-container d-flex flex-column">
                    <h4 className='mb-3'>Register <span> HolidayPlanner</span></h4>
                    <div className='holi-content-inputs d-flex flex-column w-100 gap-2'>
                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Full Name</p>
                                <input className='w-100' name='fullName' type="text" placeholder='eg: John Carder' />
                                <p className="holi-error-text"></p>
                            </div>
                            <div className='w-50'>
                                <p>Date of Birth</p>
                                <input className='w-100' name='dob' type="date" />
                                <p className="holi-error-text"></p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Gender</p>
                                {/* <input className='w-100' type="text" /> */}
                                <select className='w-100' name='gender' >
                                <option disabled selected>Choose gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Preferred not to say</option>
                                </select>
                                <p className="holi-error-text"></p>
                            </div>
                            <div className='w-50'>
                                <p>Email address</p>
                                <input className='w-100' name='username' type="text" placeholder='eg: johncarder@mail.com' />
                                <p className="holi-error-text"></p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>NIC Number</p>
                                <input className='w-100' name='nictNumber' type="text" placeholder='99xxxxxxxxxV' />
                                <p className="holi-error-text"></p>
                            </div>
                            <div className='w-50'>
                                <p>Contact Number</p>
                                <input className='w-100' name='contactNo' type="text" placeholder='eg: 077xxxxxxx' />
                                <p className="holi-error-text"></p>
                            </div> 
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Password</p>
                                <input className='w-100' name='password' type="password" />
                                <p className="holi-error-text"></p>
                            </div>
                            <div className='w-50'>
                                <p>Confirm password</p>
                                <input className='w-100' name='confirmPassword' type="password" />
                                <p className="holi-error-text"></p>
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

