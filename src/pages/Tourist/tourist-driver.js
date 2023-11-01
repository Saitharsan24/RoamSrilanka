import React from 'react'
import "../../styles/tourist/tourist_driver.css"
import { Button } from 'react-bootstrap';   

function ToursitDriver() {
  return (
    <div className="t-d-main">
      <div className='imagepart-t-d'></div>
      <div className='t-d-makebooking'>
        <h1>Hire your driver for the trip</h1>
        <div className='d-t-d'>
          <div className='reserve-items special-driver-class'>
            <p>Trip start date:</p>
            <input type="date" />
          </div>
          <div className='reserve-items special-driver-class'>
            <p>No of days:</p>
            <input type="number" min={1} />
          </div>
          <div className='reserve-items special-driver-class'>
            <p>Pickup location:</p>
            <input type="text" />
          </div>
          <div className='reserve-items special-driver-class'>
            <p>Amount:</p>
            <input type="text" />
          </div>
          <div className='reserve-items'>
                <Button style={{marginRight:"30px"}}>Place booking</Button>
            </div>
          <div className='reserve-items special-driver-class'>
            <p>**Note that the amount pay</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ToursitDriver