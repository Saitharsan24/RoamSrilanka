import React from 'react'
import './../styles/explore.css';
import {IoSearchCircle} from 'react-icons/io5';
import { HiArrowSmRight } from "react-icons/hi";


function ExploreView() {
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
                <p className='pt-4' style={{fontWeight:"600", color:"#035C94", fontSize:"1.2rem"}}>Home / Explore / Galle</p>
            </div>
            
            <div className="where-to-travel d-flex flex-column justify-content-center mt-4" style={{paddingLeft:"45px", paddingRight:"45px"}}>
                
                    <div className="where-to-travl-text d-flex flex-column justify-content-between align-items-left">
                        <h1 style={{fontSize:"3rem", fontWeight:"700", color:"#DB163A",fontFamily:"jost",fontSize:"80px"}}>Galle</h1>
                    </div>
                    <div className='where-to-visit-carousel d-flex flex-column justify-content-center align-items-center gap-5 m-5'>
                        
                        <div className="palce-image-text d-flex flex-row justify-content-between" style={{width:"100%"}}>
                            <div className="place-image" style={{height:"30rem", width:"35rem", backgroundColor:"#DB163A", borderRadius:"0rem 0rem 10rem 0rem" }}>
                                
                            </div>
                            <div className="place-text" style={{width:"40rem"}}>
                                <p style={{margin:"0px", fontSize:"25px", textAlign:"justify"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auct or, nisi elit 
                                    consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                                    Nam nec tellus a odioer tincidunt auctor a ornare. Sed non mauris vitae erat consequat auc tor eu in elit. Class 
                                    aptent taciti socios qu ad litora torquent per conubia nostra, per inceptos himenaeos. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.  Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.
                                </p>
                            </div>
                        </div>
                        
                        <div className="place-primary-image" style={{width:"100%",height:"35rem",backgroundColor:"#DB163A"}}>

                        </div>
                        
                        <div className="subheading-text d-flex flex-column justify-content-start" style={{width:"100% "}}>
                            <h4 style={{color:"#DB163A", fontSize:"50px", fontFamily:"barlow"}}>Actvities</h4>
                            <p style={{ fontSize:"25px", textAlign:"justify"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auct or, nisi elit 
                                    consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                                    Nam nec tellus a odioer tincidunt auctor a ornare. Sed non mauris vitae erat consequat auc tor eu in elit. Class 
                                    aptent taciti socios qu ad litora torquent per conubia nostra, per inceptos himenaeos. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.  Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.
                            </p>

                            <p style={{fontSize:"25px", textAlign:"justify"}}>Lorem Ipsum proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auct or, nisi elit 
                                    consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                                    Nam nec tellus a odioer tincidunt auctor a ornare. Sed non mauris vitae erat consequat auc tor eu in elit. Class 
                                    aptent taciti socios qu ad litora torquent per conubia nostra, per inceptos himenaeos. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue. Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.  Maur is in erat justo. 
                                    Nullam ac urna eu felis dapibus condim entum sit ame t a augue.
                            </p>
                        </div>
                        <div className="place-gallery-view d-flex flex-column justify-content-center align-items-center" style={{width:"100% "}}>
                           
                            <div className='d-flex flex-row align-items-center justify-content-center gap-4'>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                            </div>

                            <div className='d-flex flex-row align-items-center justify-content-center gap-4 mt-4'>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                                <div className='place-gallery-pics' style={{backgroundColor:"#DB163A", width:"20rem", height:"20rem"}}></div>
                            </div>

                        </div>
                    </div>
                
            </div>
        </div>



    </div>
  )
}

export default ExploreView
