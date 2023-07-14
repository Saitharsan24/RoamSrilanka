import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/Header.css';
// import * as Icon from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';

const Header=()=>{
    return(
        <Navbar className='nav' expand="lg">
      <React.Fragment className="nav-div">
      
        <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
              <img className='logo' src={systemlogo}  />

            <Nav className="ms-auto nav-item-list-1">
            <Nav.Link className='text-black m-2 jost-text nav-item-1 text-decoration-underline-hover' href="#home">Home</Nav.Link>
            <Nav.Link className='text-black m-2 jost-text nav-item-1' href="#link">About</Nav.Link>
            <Nav.Link className='text-black m-2 jost-text nav-item-1' href="#link">Services</Nav.Link>
            <Nav.Link className='text-black m-2 jost-text nav-item-1' href="#link">Explore</Nav.Link>
            <Nav.Link className='text-black m-2 jost-text nav-item-1' href="#link">Blogs</Nav.Link>
            <Nav.Link className='text-black m-2 jost-text nav-item-1' href="#link">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto nav-item-list-2">
            <Nav.Link className='text-black m-2 jost-text nav-item-2' href="#link">Log In</Nav.Link>
            <Nav.Link className='text-danger m-2 jost-text nav-item-2' href="#link"><button type="button" className="btn btn-danger reg-btn">Register</button></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
    );
};

export default Header
