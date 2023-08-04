import React from 'react'
import './../styles/explore.css';
import {IoSearchCircle} from 'react-icons/io5';
import { HiArrowSmRight } from "react-icons/hi";


function Explore() {
  return (
    <div className="main-div d-flex flex-column justify-content-center align-items-center align-content-center">
        
        <div className='explore-head container-fluid d-flex flex-column justify-content-center align-items-center'>
            <div style={{marginTop:"-4rem"}}>
                <h1 style={{fontSize:"8rem", color:"#ffffff", fontWeight:"700", textShadow:"-2px -2px 8px rgba(0, 0, 0, 0.5)"}}>Explore</h1>
            </div>
            <div className='search-bar d-flex flex-row justify-content-between align-items-center' style={{backgroundColor:"#ffffff", borderRadius:"2rem", marginTop:"6rem", width:"40rem", height:"3rem"}}>
                <input type="text" placeholder='Explore places and events' style={{margin:"0rem", paddingLeft:"1.3rem", fontWeight:"500",fontSize:"1.2rem", border:"none", width:"35rem",height:"3rem",borderRadius:"2rem"}}/>
                <IoSearchCircle size="3rem"  color='#DB163A'/>
            </div>
        </div>

        <div className='explore-body container-fluid d-flex flex-column justify-content-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <p className='pt-4' style={{fontWeight:"600", color:"#035C94", fontSize:"1.2rem"}}>Home / Explore</p>
            </div>
            
            <div className="where-to-travel d-flex flex-column mt-4" style={{paddingLeft:"45px", paddingRight:"45px"}}>
                <div>
                    <div className="where-to-travl-text d-flex flex-column justify-content-between align-items-left">
                        <h1 style={{fontSize:"3rem", fontWeight:"700", color:"#035C94",fontFamily:"jost"}}>Where to <span style={{fontFamily: "jost", color: "#DB163A", fontWeight: '800'}}>travel</span> in <span style={{fontFamily: "jost", color: "#DB163A", fontWeight: '800'}} >Sri Lanka?</span></h1>
                        <p style={{fontSize:"20px", margin:"0px",color:"#DB163A"}}>See more <HiArrowSmRight /></p>
                    </div>
                    <div className='where-to-visit-carousel d-flex flex-row justify-content-center align-align-items-center gap-5 m-5'>
                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>

                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>
                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>

                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>

                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 mb-5'>
                    <div className="where-to-travl-text d-flex flex-column justify-content-center align-items-end">
                        <h1 style={{fontSize:"3rem", fontWeight:"700", color:"#035C94",fontFamily:"jost"}}>Upcoming <span style={{fontFamily: "jost", color: "#DB163A", fontWeight: '800'}} >events</span></h1>
                        <p style={{fontSize:"20px", margin:"0px", color:"#DB163A"}}>See more <HiArrowSmRight /></p>
                    </div>
        
                    <div className='where-to-visit-carousel d-flex flex-row justify-content-center align-align-items-center gap-5 m-5'>
                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>

                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>

                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>

                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>
                        <div className="where-to-visit-card d-flex flex-column justify-content-start align-align-items-center" style={{height:'30rem', width:'19rem', backgroundColor:"#EDEDED", borderRadius:"5rem 0rem 1rem 1rem"}}>
                            <div className="where-to-visit-card-image" style={{backgroundColor:"#035C94", height:"24rem", width:"19rem", borderRadius:"5rem 0rem 3.5rem 0rem"}}>
                            
                            </div>
                            <div className="where-to-visit-card-text pt-2" style={{paddingRight:"30px", paddingLeft:"30px"}}>
                                <div className='d-flex flex-row justify-content-between pt-2 pb-2' style={{color:"#DB163A", fontWeight:"500", fontSize:"15"}}>
                                    <p style={{margin:"0px"}}>John Carter</p>
                                    <p style={{margin:"0px"}}>03.07.2023</p>
                                </div>
                                <p style={{fontWeight:"500", fontSize:"20px", color:"#035C94"}}>Lorem epsom Lorem epsom rem epsom</p>
                            </div>
                        </div>
                    </div>   

                </div>

            </div>
        </div>



    </div>
  )
}

export default Explore
