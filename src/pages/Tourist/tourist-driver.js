import React from 'react'
import "../../styles/tourist/tourist_driver.css"
import { Button } from 'react-bootstrap';   
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSession } from '../../Context/SessionContext';

function ToursitDriver() {

  const [systemSetting, setSystemSetting] = useState({});
  const { sessionData , setSessionData  } = useSession();

  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 10000,
  });


  useEffect(() => {
    axiosInstance.get("/viewSetting")
    .then((response) => {
      // Handle the response data
      // For example:
      console.log(response.data);
      setSystemSetting(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  const requestHandler = () => {

    const data = {
      start_date: "2021-09-01",
      pickup: "Colombo",
      amount: 1000,
      tourist_id: 1,
      no_of_days: 3,
    }

    axiosInstance.post("/addTripRequest", data)
    .then((response) => {
      // Handle the response data
      // For example:
      console.log(response.data);
      alert("Request sent successfully");
    })
  }


  return (
    <div className="t-d-main">
      <div className='imagepart-t-d'></div>
      <div className='t-d-makebooking'>
        <h2>Hire your driver for the trip</h2>
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
          <div className='reserve-items special-driver-class'>
          <p className='note-d-b' style={{color:"#004577",fontWeight:"700"}}>**Note**</p>
            <div className='note-details d-flex flex-column align-items-end'>
            <p className='amount-d-c'>Amount per day: <span>{"$ "+systemSetting.driverPerDayFee}</span></p>
            <p className='amount-d-c'>Maximum distance per day: <span>{systemSetting.driverPerDayKm+"km"}</span> </p>
            <p className='amount-d-c'>Charge per extra km: <span>{"$ "+systemSetting.driverExtraKmFee}</span></p>
          </div>
          </div>
          <div className='reserve-items special-btn-css'>
                <Button onClick={requestHandler} style={{marginRight:"30px"}}>Place booking</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ToursitDriver