import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import quality from './../assets/images/quality.png';
import security from './../assets/images/security.png';
import heart from './../assets/images/heart.png';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/about.css';
import * as Icon from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';

const About=()=>{
    return(
        
       <>
 {/* header  */}
       <Header/>


 {/* body of about        */}
 <div className='body d-flex justify-content-center align-items-center' >
        <p className='text-white' style={{fontSize:"128px",fontWeight:"bold"}}>About</p> 
       </div>



{/* sub footer of about page */}
   <div className='main'>
            <div className='text-center '>
                  <span class="head-blue">Why you Roam</span>
                  <span class="head-red"> Sri Lanka?</span>
           </div>
       <div className="container d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row align-content-center justify-content-center gap-5 mt-2">
          <div className="box col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-content-center">
          <img className='about-icon m-auto' style={{width:"123px",height:"123px"}}  src={quality}  />
                <div className='box-head text-center'><p style={{fontSize:"43px",fontWeight:"bold"}} >Quality</p></div>
                <div className='box-body text-center'>
                  <p style={{fontSize:"25px"}}>
                We provide top quality packages
                 and itineraries.We go above and beyond 
                 to ensure that you meet at every step your
                  journey.</p>
                </div>
          </div>
          <div className="box col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-content-center">
          <img className='about-icon m-auto' style={{width:"123px",height:"123px"}} src={security}  />
          <div className='box-head text-center'><p style={{fontSize:"43px",fontWeight:"bold"}} >Hospitality</p></div>
          <div className='box-body text-center'>
          <p style={{fontSize:"25px"}}>
                We provide top quality packages
                 and itineraries.We go above and beyond 
                 to ensure that you meet at every step your
                  journey.
                  </p>
                </div>
          </div>
          <div className="box col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-content-center">
          <img className='about-icon m-auto' style={{width:"123px",height:"123px"}} src={heart}  />
          <div className='box-head text-center'><p style={{fontSize:"43px",fontWeight:"bold"}} >Availability</p></div>
          <div className='box-body text-center'>
          <p style={{fontSize:"25px"}}>
                We provide top quality packages
                 and itineraries.We go above and beyond 
                 to ensure that you meet at every step your
                  journey.
                  </p>
                </div>
          </div>
       </div>
     </div>

     {/* ------------------- */}
            <div className='container-1'>
                  <box></box>
                  <box></box>
            </div>

       {/* Footer  */}
   <Footer/>
     
       </>

    );
};

export default About
