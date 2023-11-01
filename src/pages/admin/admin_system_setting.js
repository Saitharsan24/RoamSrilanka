import React from 'react'
import "../../styles/admin/admin_system_setting.css"
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { AlternateEmail } from '@mui/icons-material';

function AdminSystemSetting() {

  const [editStatus, setEditStatus] = useState(false);
  // const [settingDetails, setSettingDetails] = useState([]);

  const [driverCancellationFee, setDriverCancellationFee] = useState();
  const [driverCompanyCommission, setDriverCompanyCommission] = useState();
  const [driverPerDayCharge, setDriverPerDayCharge] = useState();
  const [driverPerDayDistance, setDriverPerDayDistance] = useState();
  const [driverExtraKmCharge, setDriverExtraKmCharge] = useState();
  const [hotelValueAdded, setHotelValueAdded] = useState();
  const [hotelSeasonalValueAdded, setHotelSeasonalValueAdded] = useState();
  const [hotelCancellationFee, setHotelCancellationFee] = useState();
  const [hotelCompanyCommission, setHotelCompanyCommission] = useState();
  

  useEffect(() => {
    axios.get("http://localhost:8080/viewSetting")
    .then((response) => {
      // Handle the response data
      // For example:
      console.log(response.data);
      // setSettingDetails(response.data);
      setDriverCancellationFee(response.data[0].driverCancellationFee);
      setDriverCompanyCommission(response.data[0].driverCompanyCommission);
      setDriverPerDayCharge(response.data[0].driverPerDayFee);
      setDriverPerDayDistance(response.data[0].driverPerDayKm);
      setDriverExtraKmCharge(response.data[0].driverExtraKmFee);
      setHotelValueAdded(response.data[0].hotelValueAdded);
      setHotelSeasonalValueAdded(response.data[0].hotelSeasonalValueAdded);
      setHotelCancellationFee(response.data[0].hotelCancellationFee);
      setHotelCompanyCommission(response.data[0].hotelCompanyCommission);

    })
    .catch((err) => {
      console.log(err);
    });
  },[editStatus]);

  const setEditStatusChange = () => {
    alert("Values are successfully updated !");
    setEditStatus(!editStatus)
  }


  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 10000,
  });

  const updateHandler = () => { 
    const detailsToStore = {
      driverCancellationFee: driverCancellationFee,
      driverCompanyCommission: driverCompanyCommission,
      driverPerDayCharge: driverPerDayCharge,
      driverPerDayDistance: driverPerDayDistance,
      driverExtraKmCharge: driverExtraKmCharge,
      hotelValueAdded: hotelValueAdded,
      hotelSeasonalValueAdded: hotelSeasonalValueAdded,
      hotelCancellationFee: hotelCancellationFee,
      hotelCompanyCommission: hotelCompanyCommission
    }
    
    axiosInstance.put("/updateSetting", detailsToStore)
    .then((response) => {
      if(response.status === 200){
        alert("Values are successfully updated !");
      }
      else{
        alert("Error occured while updating values !");
      }
      setEditStatus(!editStatus);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className='admin-s-s-main'>
      <h3>System setting</h3>
      <h4>Hotel setting</h4>

      <div className='hotel-ss'>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Value added (%):</p>
            <input type="text" value={hotelValueAdded} disabled={!editStatus} onChange={(e)=>{setHotelValueAdded(e.target.value)}}/>
          </div>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Seasonal value added (%):</p>
            <input type="text" value={hotelSeasonalValueAdded} disabled={!editStatus} onChange={(e)=>{setHotelSeasonalValueAdded(e.target.value)}}/>
          </div>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Cancellation fee (%):</p>
            <input type="text" value={hotelCancellationFee} disabled={!editStatus} onChange={(e)=>setHotelCancellationFee(e.target.value)}/>
          </div>    
      </div>

      <div className='hotel-ss'>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Company Commission (%):</p>
            <input type="text" value={hotelCompanyCommission} disabled={!editStatus} onChange={(e)=>{setHotelCompanyCommission(e.target.value)}}/>
          </div>
      </div>

      <h4 className='mt-4'>Driver setting</h4>  

      <div className='hotel-ss'>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Per day charge ($):</p>
            <input type="text" value={driverPerDayCharge} disabled={!editStatus} onChange={(e=>{setDriverPerDayCharge(e.target.value)})}/>
          </div>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Per day distance (km):</p>
            <input type="text" value={driverPerDayDistance} disabled={!editStatus} onChange={(e)=>{setDriverPerDayDistance(e.target.value)}}/>
          </div>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Extra Km charge ($):</p>
            <input type="text" value={driverExtraKmCharge} disabled={!editStatus} onChange={(e)=>{setDriverExtraKmCharge(e.target.value)}}/>
          </div>
              
      </div>
      <div className='hotel-ss'>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Cancellation fee (%):</p>
            <input type="text" value={driverCancellationFee} disabled={!editStatus} onChange={(e)=>{setDriverCancellationFee(e.target.value)}}/>
          </div>
          <div className='reserve-items special-driver-class specialforadmin'>
            <p>Company Commission (%):</p>
            <input type="text" value={driverCompanyCommission} disabled={!editStatus} onChange={(e)=>{setDriverCompanyCommission(e.target.value)}}/>
          </div>
      </div>
      <div className='hotel-ss'>
        <div className='reserve-items'>
          {editStatus && <div><Button onClick={()=>setEditStatus(!editStatus)} className='specialadminbtn'  style={{marginRight:"30px"}}>Cancel</Button><Button onClick={updateHandler} className='specialadminbtn'  style={{marginRight:"30px"}}>Update</Button></div>}
          {!editStatus && <Button onClick={()=>setEditStatus(!editStatus)}   className='specialadminbtn'  style={{marginRight:"30px"}}>Edit value</Button>}
        </div>
      </div>

    </div>
  )
}

export default AdminSystemSetting
