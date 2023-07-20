import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import quality from './../assets/images/quality.png';
import security from './../assets/images/security.png';
import heart from './../assets/images/heart.png';
import aboutimg from './../assets/images/aboutimg.png';
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


{/* ------------------- */}
<div className='main-2 d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-xs-column flex-md-row flex-lg-row align-items-center justify-content-center gap-4' >
                  <div className='col-lg-5 col-md-5 col-sm-12 d-flex flex-column'>        
                              <img className=' img-fluid about-icon m-auto object-fit-contain w-auto'  src={aboutimg}  />
                  </div>
                  <div className='col-lg-5 col-md-5 col-sm-12 d-flex flex-column '>
                       <span style={{fontSize:"16px",color:"#DB163A",fontWeight:"bold"}}>About us</span>
                       <span style={{fontSize:"48px"}}>
                        <span style={{fontSize:"48px",color:"#004577",fontWeight:"bold"}}>Our tour plan is to<br/> fulfil your </span><span style={{fontSize:"48px",color:"#DB163A",fontWeight:"bold"}}>dream wish</span>
                        </span>
                        <div className="ex-1" style={{fontsize:"20px"}}>
                        Understand to achieve anything requires faith and<br/> belief in yourself, vision, hard work, determination,<br/> and dedication.
                        </div>
 
                         {/* container for evaluation of pass activity */}
                             <div className='ex-2 d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row gap-5'> 
                             <div className='d-flex    gap-4'> 
                                 <div className='col-lg-6 col-md-6 col-sm-6 d-flex flex-column' >
                                       <div style={{fontsize:"40px",fontWeight:"bold",color:"#DB163A"}}>15</div> 
                                       <div style={{fontsize:"16px"}}>Years of<br/> Experience</div>  
                                 </div>
                                 <div className='col-lg-6 col-md-6 col-sm-6 d-flex flex-column'>
                                       <div style={{fontsize:"40px",fontWeight:"bold",color:"#DB163A"}}>1K</div> 
                                       <div style={{fontsize:"16px"}}>Sucessful<br/> Trips</div>                                  
                                 </div>
                              </div>
                              <div className='d-flex  gap-4'> 
                             <div className='col-lg-6 col-md-6 col-sm-6 d-flex flex-column'>
                                      <div style={{fontsize:"40px",fontWeight:"bold",color:"#DB163A"}}>20K</div> 
                                      <div style={{fontsize:"16px"}}>Happy<br/> Customers</div> 
                             </div>
                             <div className='col-lg-6 col-md-6 col-sm-6 d-flex flex-column'>
                                      <div style={{fontsize:"40px",fontWeight:"bold",color:"#DB163A"}}>49</div> 
                                      <div style={{fontsize:"16px"}}>Overall<br/> Rating</div>
                               </div>
                              </div>
                              </div>     

                        </div>
            </div>

{/* sub footer of about page */}
   <div className='main-1'>
            <div className='text-center '>
                  <span class="head-blue">Why you Roam</span>
                  <span class="head-red"> Sri Lanka?</span>
           </div>
       <div className="d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-md-row flex-lg-row align-content-center justify-content-center gap-5 mt-2">
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

     

       {/* Footer  */}
   <Footer/>
     
       </>

    );
};

export default About
