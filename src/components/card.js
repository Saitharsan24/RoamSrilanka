import React from 'react'
import cardImage from './../assets/images/cardImages/img01.jpg'

function Card() {
  return (
    <div className='d-flex flex-row gap-2'>
        <div className="card-content d-flex justify-content-center align-items-center col-12 gap-5 mt-4 mb-4">
          <div className="blog-card" style={{backgroundColor:"#ffffff", height:"21rem", width:"20rem", borderRadius:"1rem"}}>
            <div className='card-image w-100' style={{height:"60%", margin:"0px"}}>
              <img src={cardImage} alt="" className="w-100 h-100" style={{borderRadius:"1rem 1rem 0rem 0rem"}}/>
            </div>
            <div className="card-text">
              <h6 className='pt-2' style={{fontWeight:"700",paddingLeft:"10px", color:"#004577"}}>Fall in love among the winding streets and snow-covered</h6>
              <p style={{fontWeight:"500",paddingLeft:"10px", color:"#004577", margin:"0px"}}>Galle, Srilanka</p>
              <div className="text-price d-flex flex-row justify-content-between">
                <p className='pt-1' style={{paddingLeft:"10px", fontSize:"1.5rem", color:"#DB163A", fontWeight:"600"}}>$200</p>
                <p className='pt-3' style={{paddingRight:"10px", paddingRight:"20px" ,fontWeight:"500"}}>10 Days</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
