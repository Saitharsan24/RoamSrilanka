import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function PackageView({closeModal, item}) {

        //getting data from session variable
        const { sessionData , setSessionData  } = useSession();
        

    const apiBaseUrl = "http://localhost:8080";
    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    // useEffect(() => {
       
    //   }, []);
    
  return (
    <div>
    <div className='popup-for-acc-reserve special-guide-reserve'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Package Booking Details</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Tour guide:</p>
                <input value={item.guideName} type="text" disabled/>
            </div>
            <div className='reserve-items'> 
                <p>Rent from:</p>
                <input type="date" min={new Date().toISOString().split('T')[0]}/>
            </div>
            <div className='reserve-items'>
                <p>Until:</p>
                <input type="date"/>
            </div>
            <div className='reserve-items'>
                <p>Places to visit:</p>
                <input type="text"/>
            </div>
            <div className='reserve-items'>
                <p>Total amount:</p>
                <input type="text" disabled style={{color:"#000000"}}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PackageView
