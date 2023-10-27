import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/headeruser.css';
import * as Icon from 'react-bootstrap-icons';
import { Button, Form } from 'react-bootstrap';
import { FaCoffee,FaSignOutAlt,FaCog,FaBell,FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../Context/SessionContext';


export default function Headeruser(){

  const { setSessionData } = useSession();
const navigate = useNavigate();

  const handleLogout = () => {
    setSessionData({
        loggedIn: false,
        userType: null,
        userName: null,
        userId: null,
        userFullName: null
    });
    navigate("/login");
  }
  return(
  <>
    <React.Fragment>
      <div className=" container-fluid d-lg-flex d-md-flex d-sm-flex flex-sm-column  bg-white ">
        <div className='row '>
          <div className='col-6 flex-sm-column flex-xs-column flex-md-colum flex-lg-colum'>
            <img className='' src={systemlogo} style={{width:"150px"}}/>
          </div>
          <div className='col-6 flex-sm-column flex-xs-column flex-md-colum flex-lg-colum'>
            <div className=' mt-4 d-flex flex-row align-items-center justify-content-end gap-2 gap-sm-2 gap-md-4 gap-lg-5 '>

              <div className=' ' style={{ color: "#004577" }}><FaBell/></div>
              <div className='' style={{ color: "#004577" }}><FaUser/></div>
              <div className='' style={{ color: "#004577", fontWeight: "bold" }}>
                  <Button onClick={handleLogout} className="" style={{ width: "100px", backgroundColor:"#db163a", border:"none", marginRight:"15px"}}>
                    <p><FaSignOutAlt/>Logout</p>
                  </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  </>
)
}


