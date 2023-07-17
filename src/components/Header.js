import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/Header.css';

import * as Icon from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <Navbar className='nav d-flex' expand="lg">
      <React.Fragment className="nav-div">
      
        <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
              
              <img className='logo img-fluid' src={systemlogo}  />
              <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="nav-item-list-1 ms-auto ">

            <Nav.Link className='nav-item-1 text-black m-2 jost-text text-decoration-underline-hover'><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/About'>About</Link></Nav.Link>
            <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/Services'>Services</Link></Nav.Link>
            <Nav.Link className='nav-item-1 text-black m-2 jost-text ' href="#link">Explore</Nav.Link>
            <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/Blog'>Blogs</Link></Nav.Link>
            <Nav.Link className='nav-item-1 text-black m-2 jost-text ' ><Link to='/Contact'>Contact</Link></Nav.Link>
            </Nav>
            <Nav className="nav-item-list-2 ms-auto ">
            
            <Nav.Link className='nav-item-2 text-black m-2 jost-text ' href="#link">Log In</Nav.Link>
            <Nav.Link className=' nav-item-2 text-danger m-2 jost-text ' href="#link"><button type="button" className="btn btn-danger reg-btn">Register</button></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
    );
};

export default Header
