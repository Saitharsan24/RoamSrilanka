import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Actors=()=>{
    return(
        <Navbar className='nav d-flex' expand="lg">
            <React.Fragment className="nav-div">
                <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
                <img className='logo img-fluid' src={systemlogo}  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-item-list-1 ms-auto ">
                        <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/header'>Tourist</Link></Nav.Link>
                        <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to=''>Admin</Link></Nav.Link>
                        <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/Holidayplanner_dashboard'>Holiday Planner</Link></Nav.Link>
                        <Nav.Link className='nav-item-1 text-black m-2 jost-text '><Link to='/hoteldashboard'>Hotel</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </React.Fragment>
        </Navbar>
    );
};

export default Actors
