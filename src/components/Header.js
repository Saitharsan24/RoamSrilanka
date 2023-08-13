import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/Header.css';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


const Header=()=>{
    return(
      <div className='NavBar d-flex flex-row justify-content-between align-items-center'>
        <div className='navLogo'>
          <Link to="/">
            <img src={systemlogo} alt="navlogo" />
          </Link>
          </div>
        <div className="navlinks d-flex flex-row">
          <NavLink to="/">
            <span className='header-links'>Home</span>
          </NavLink>
          <NavLink to="about">
            <span className='header-links'>About</span>
          </NavLink>
          <NavLink to="services">
            <span className='header-links'>Services</span>
          </NavLink>
          <NavLink to="explore">
            <span className='header-links'>Explore</span>
          </NavLink>
          <NavLink to="blogs">
            <span className='header-links'>Blogs</span>
          </NavLink>
          <NavLink to="contact">
            <span className='header-links'>Contact Us</span>
          </NavLink>
        </div>
        <div className='login-signup'>
          <NavLink to="login">
            <span className='header-links'>Login</span>
          </NavLink>
          <Link to="/">
            <Button>
              Register
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default Header
