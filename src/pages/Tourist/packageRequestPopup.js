import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function PackageRequestPopup({closeModal, item}) {

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    //getting data from session variable
    const { sessionData , setSessionData  } = useSession();
    
    
  return (
    <div>
    <div className='popup-for-acc-reserve'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Reserve Room</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Accessory:</p>
                <input type="text"  disabled/>
            </div>
           
            <div className='reserve-items'>
                <Button style={{marginRight:"30px"}}>Pay and rent</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PackageRequestPopup
