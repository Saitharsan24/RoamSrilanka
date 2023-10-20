import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./../styles/login.css";
import axios from "axios";
import { useSession } from '../Context/SessionContext';

    export default function Login() {
        const apiBaseUrl = "http://localhost:8080";

        const axiosInstance = axios.create({
            baseURL: apiBaseUrl,
            timeout: 5000
            }); 

        const [userName, setUsername] = React.useState("");
        const [password, setPassword] = React.useState("");
        const { setSessionData } = useSession();

        const navigate =useNavigate();

        const handleLogin = async (e) => {
            e.preventDefault();

            try {
                const response = await axiosInstance.post("/login", {
                    userName: userName,
                    password: password
                });

                if (response.status === 200) {
                    console.log(response.data);
                    
                    setSessionData({
                        loggedIn: true,
                        userType: response.data.userType,
                        userName: response.data.userName,
                        userId: response.data.userId,
                        userFullName: response.data.userFullname
                    })

                    const userType = response.data.userType;

                    if (userType === "admin") {
                        navigate("/admin");
                    }
                    else if (userType === "tourist") {
                        navigate("/tourist");
                    }
                    else if (userType === "hotel") {
                        navigate("/hotel");
                    }
                    else if (userType === "guide") {
                        navigate("/guide");
                    }
                    else if (userType === "driver") {
                        navigate("/driver");

                    }
                    
                }


                // console.log(response.data);
            } catch (error) {
                console.log(error);
            }

        }
    
        
  return (
           <div className='login-bg'>

                <div className='col-md-6 p-5 shadow' style={{ 
                    width: '35%',
                    height: 'auto',
                    backgroundColor: '#D9D9D9', 
                    opacity: 0.8,
                    borderRadius: '10%',
                    margin:'80px 0px 80px 200px'
                     }}>

                    <h2 className='text-left m-2' style={{ color: '#004577' , fontWeight: '300'}}>Welcome to</h2>
                    <h2 className='text-left m-2' style={{ color: '#004577', fontWeight: '700'}}>Roam Sri Lanka</h2>
                    <form onSubmit={handleLogin} method='POST'>
                    
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Username" value={userName} onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type={"password"} className="form-control" placeholder="Enter your Password" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                        {/* <div class="col-md-6"> */}
                            <a class="forgot-password-link" style={{marginRight: '0em', color: '#004577', textDecoration:'none', cursor: 'pointer', textAlign:'right'}}>Forgot password ?</a>
                        {/* </div> */}
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-3" style={{width:'100%', backgroundColor: '#004577'}}>Login</button>
                    {/* <Link className="btn btn-outline-danger mx-4" to="/">Cancel</Link> */}
                    </form>
                    
                    <label class="form-check-label mt-2" for="flexCheckDefault">Don't have an account</label>
                    <a class="forgot-password-link" style={{marginRight: '0', color: '#004577', textDecoration:'none', cursor: 'pointer'}}>  Register</a>
                    
                </div>

            </div>
  )
}


