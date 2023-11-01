import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function PackageRequestPopup({closeModal, item}) {

    console.log(item);
    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    //getting data from session variable
    const { sessionData , setSessionData  } = useSession();
    
    const handleRequest = () => {

        const data = {
            "fromdate": fromDate,
            "to"
            "touristId": sessionData.userId,
            "packageid": item.packageID,
            "status": 0
        }

        axiosInstance.post("/request", {
            "fromdate": fromDate,
            "touristId": sessionData.userId,
            "packageid": item.packageID,
            "status": 0
        })
        .then((response) => {
          // Handle the response data
          // For example:
          console.log(response.data);
          alert("Successfully Sent request ! Wait for the response.");
          window.location.href = "/tourist/touristPackages";
        })
        .catch((err) => {
          console.log(err);
        });
        // closeModal();
    }

    const [fromDate, setFromDate] = useState("");
    
  return (
    <div>
    <div className='popup-for-acc-reserve special-package'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >{item.package_name}</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>From:</p>
                <input type="date" min={new Date().toISOString().split('T')[0]} onChange={(e)=>setFromDate(e.target.value)}/>
            </div>
            <div className='reserve-items'> 
                <p>Amount:</p>
                <input type="text" value={"$ "+ Math.floor(item.price)}  disabled/>
            </div>
            <div className='reserve-items'>
                <Button onClick={handleRequest} style={{marginRight:"30px"}}>Request Booking</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PackageRequestPopup
