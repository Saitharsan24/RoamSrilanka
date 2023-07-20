import React from 'react'
import { Component } from "react";
import { Link } from 'react-router-dom'
import "./../styles/login.css";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Login() {
        
  return (
    <div>
        <div className='login-bg' >
            <Header />
            <div className='row'>
                <div className='col-md-6 offset-md-1 p-5 mt-5 shadow' style={{ 
                    position: 'absolute',
                    top: '20%',
                    left: '0%',
                    width: '35%',
                    height: 'auto',
                    backgroundColor: '#D9D9D9', 
                    opacity: 0.8,
                    borderRadius: '10%'
                     }}>

                    <h2 className='text-left m-2' style={{ color: '#004577' , fontWeight: '300'}}>Welcome to</h2>
                    <h2 className='text-left m-2' style={{ color: '#004577', fontWeight: '700'}}>Roam Sri Lanka</h2>
                    <form>
                    
                    <div className="mb-3">
                        <label htmlFor="UserName" className="form-label">Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Username" name="username"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type={"password"} className="form-control" placeholder="Enter your Password" name="password"/>
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
        </div>
        <Footer />
    </div>
  )
}


