import React from 'react'
import './../styles/explore.css';
import {IoSearchCircle} from 'react-icons/io5';

function Explore() {
  return (
    <div className="main-div d-flex flex-column justify-content-center align-items-center align-content-center">
        
        <div className='explore-head container-fluid d-flex flex-column justify-content-center align-items-center'>
            <div style={{marginTop:"-4rem"}}>
                <h1 style={{fontSize:"8rem", color:"#ffffff", fontWeight:"700", textShadow:"-2px -2px 8px rgba(0, 0, 0, 0.5)"}}>Explore</h1>
            </div>
            <div className='search-bar d-flex flex-row justify-content-between align-items-center' style={{backgroundColor:"#ffffff", borderRadius:"2rem", marginTop:"6rem", width:"40rem", height:"3rem"}}>
                <p style={{margin:"0rem", paddingLeft:"1.7rem", fontWeight:"500",fontSize:"1.2rem", color:"#727272"}}>Explore places and events </p>
                <IoSearchCircle size="3rem"  color='#DB163A'/>
            </div>
        </div>

        <div className='explore-body container-fluid d-flex flex-colunm justify-content-center align-items-center'>
            <p className='pt-4' style={{fontWeight:"600", color:"#035C94", fontSize:"1.2rem"}}>Home / Explore</p>

        </div>

    </div>
  )
}

export default Explore
