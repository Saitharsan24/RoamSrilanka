import React ,{ useState } from 'react';
import "../../styles/admin/admin_holidayplanner_reg.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import axios from "axios";

function AdminGuideReg() {

    
                const [formData, setFormData] = useState( {
                    fullName: '',
                    usertype: '',
                    sltda: '',
                    username: '',
                    nictNumber: '',
                    contactNo: '',
                    password: '',
                    confirmPassword: '',
                    address: '',
            } );

            const inputFormdata = (name, value) => {
            setFormData((prev) => ({ ...prev, [name]: value}));
            }

                  //Error message 
                const [error, setError] = useState({
                    fullName: '',
                        usertype: '',
                        sltda: '',
                        username: '',
                        nicNumber: '',
                        contactNo: '',
                        password: '',
                        confirmPassword: '',
                        address: '',
                });

                 //mail validation
                    const validateEmail = (email) => {
                        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                        return emailRegex.test(email);
                    };
                    
                    // password validation
                    const validatePassword = (password) => {
                        // At least 6 characters, at least one letter, and at least one number
                        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
                        return passwordRegex.test(password);
                    };

                    const validateField = (name, value) => {
                        let error = "";
                        
                        switch(name) {
                          case "fullName":
                            error = value.trim() === "" ? "Full name is required." : "";
                            break;
                          case "sltda":
                            error = value === "" || value === "disabled" ? "sltda is required." : "";
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
                            case "address":
                            error = value.trim() === "" ? "Address is required." : "";
                          default:
                            error = value.trim() === "" ? "This field is required." : "";
                        }
                        setError((prev) => ({ ...prev, [name]: error }));
                        console.log(formData)
                      }



            const apiBaseUrl = "http://localhost:8080";

            const axiosInstance = axios.create({
            baseURL: apiBaseUrl,
            timeout: 5000
            }); 

            const handleaddguide = async (e) =>{
                console.log(formData)
                e.preventDefault();

                try{
                    const response = await axiosInstance.post("/addUser", {
                        userFullname: formData.fullName,
                        userName: formData.username,
                        userType: formData.usertype,
                        password: formData.password,
                        
                    });
                    console.log(response)
                    if(response.status === 200){
                        console.log(response.data)

                                    try{
                                        const response2 = await axiosInstance.post("/addGuide", {
                                            userId: response.data.userId,
                                            sltdaNo: formData.sltda,
                                            nic: formData.nictNumber,
                                            phoneNo: formData.contactNo,
                                            address: formData.address,
                                        });
                                        if(response2.status === 200){
                                            alert("Guide added successfully");
                                            window.location.reload();
      
                                        }}
                                        catch(error){
                                            console.log(error);
                                        }
                    }
                }
                catch(error){
                    console.log(error);
                }
            }




  return (
    <React.Fragment >
          
          <div className="w-100 d-flex justify-content-center  align-items-center">
          
              <section class="h-100 " style={{backgroundColor:"#"}}>
              <div className="holi-main d-flex flex-column justify-content-center align-items-end w-100">

                    <form onSubmit={handleaddguide} method='POST'>
                    <div className="holi-content-container d-flex flex-column">
                    <h4 className='mb-3'>Register <span> Tour guide</span></h4>
                    <div className='holi-content-inputs d-flex flex-column w-100 gap-2'>
                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Full Name</p>
                                <input className='w-100' name='fullName' type="text" placeholder='eg: John Carder' value={formData.fullName} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}  />
                                <p className="holi-error-text">{error.fullName}</p>
                            </div>
                            <div className='w-50'>
                                <p>User Type</p>
                                <select className='w-100' name='usertype' value={formData.gender} onChange={(e)=> {inputFormdata(e.target.name, e.target.value); validateField(e.target.name, e.target.value);}}>
                                {/* <option disabled selected>Choose gender</option> */}
                                <option value="male">guide</option>
                                </select>
                                <p className="holi-error-text">{error.userType}</p>
                            </div>
                            </div> 

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>SLTDA Number</p>
                                <input className='w-100' name='sltda' type="text" placeholder='eg: SL 123' value={formData.sltda} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{error.sltda}</p>
                            </div>
                            <div className='w-50'>
                                <p>Email address</p>
                                <input className='w-100' name='username' type="text" placeholder='eg: johncarder@mail.com' value={formData.username} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}} />
                                <p className="holi-error-text">{error.username}</p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>NIC Number</p>
                                <input className='w-100' name='nictNumber' type="text" placeholder='99xxxxxxxxxV' value={formData.nictNumber} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{error.nic}</p>
                            </div>
                            <div className='w-50'>
                                <p>Contact Number</p>
                                <input className='w-100' name='contactNo' type="number" placeholder='eg: 077xxxxxxx' value={formData.contactNo} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{error.contactNo}</p>
                            </div> 
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-50'>
                                <p>Password</p>
                                <input className='w-100' name='password' type="password" value={formData.password} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{error.password}</p>
                            </div>
                            <div className='w-50'>
                                <p>Confirm password</p>
                                <input className='w-100' name='confirmPassword' type="password" value={formData.confirmpassword} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}}/>
                                <p className="holi-error-text">{error.confirmpassword}</p>
                            </div>
                            </div>

                            <div className="holi-input-row d-flex flex-row w-100 gap-4">
                            <div className='w-100'>
                                <p>Address</p>
                                <input className='w-100' name='address' type="text" value={formData.address} onChange={(e)=> {inputFormdata(e.target.name, e.target.value);validateField(e.target.name, e.target.value);}} />
                                <p className="holi-error-text">{error.address}</p>
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

export default AdminGuideReg;

