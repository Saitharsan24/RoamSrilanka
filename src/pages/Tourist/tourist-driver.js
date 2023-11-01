import React from 'react'
import "../../styles/tourist/tourist_driver.css"

function ToursitDriver() {
  return (
    <div className="t-d-main">
      <div className='imagepart-t-d'></div>
      <div className='t-d-makebooking'>
        <h1>Hire your driver for the trip</h1>
        <div className='reserve-items'>
          <p>Date</p>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default ToursitDriver