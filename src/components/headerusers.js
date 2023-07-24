import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import systemlogo from './../assets/images/systemlogo.png';
import '../styles/headeruser.css';
import * as Icon from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';


const Headeruser=()=>(
  <>


    <div className=" d-lg-flex d-md-flex d-sm-flex flex-sm-column ">
      <div className='row '>
        <div className='col-6 flex-sm-column flex-xs-column flex-md-colum flex-lg-colum'>
          <img className='logo img-fluid' src={systemlogo} />
        </div>
        <div className='col-6 flex-sm-column flex-xs-column flex-md-colum flex-lg-colum'>
          <div className=' mt-4 d-flex flex-row align-items-center justify-content-end gap-2 gap-sm-2 gap-md-4 gap-lg-5 '>

            <div className=' ' style={{ color: "#004577" }}><i class="fa-solid fa-bell fa-lg"></i></div>
            <div className='' style={{ color: "#004577" }}><i class="fa-solid fa-user fa-2x"></i></div>
            <div className='' style={{ color: "#004577", fontWeight: "bold" }}>
              <div class="dropdown">
                <button className="btn  dropdown-toggle" style={{ width: "100px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Saranjan
                </button>
                <ul className="dropdown-menu custom-dropdown-menu">
                  <li><div></div></li>
                  <li><div className="dropdown-item " style={{ color: "#004577", fontSize: "16px" }}><p><i class="fa-solid fa-right-from-bracket"></i> LogOut</p></div></li>
                  <li><div className="dropdown-item " style={{ color: "#004577", fontSize: "16px" }}><p><i class="fa-solid fa-gear"></i> Setting</p></div></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>


  </>
);

export default Headeruser
