import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function RentAccPopup({closeModal, item}) {

    const apiBaseUrl = "http://localhost:8080";
    console.log(item);

    const [rentAmount, setRentAmount] = useState(item.fee);


    const fromDateFunction = (event) => {
        setFromDate(event.target.value);
        setToDate(event.target.value);
        setRentAmount(item.fee);
    }

    const toDateFunction = (event) => {
        setToDate(event.target.value);
        const fromD = new Date(fromDate);
        const toD = new Date(event.target.value);
        let daysCount = (toD - fromD)/(1000 * 60 * 60 * 24);
        if(daysCount <= 0){
            setRentAmount(item.rent);
            console.log(daysCount);
        } else {
        console.log(daysCount);
        setRentAmount(daysCount * item.fee);
        }
    }


    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    //getting data from session variable
    const { sessionData , setSessionData  } = useSession();

    const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
    const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);

    const [checkAvailability, setCheckAvailability] = useState(false);
    
  return (
    <div>
    <div className='popup-for-acc-reserve'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Reserve Room</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Tour guide:</p>
                <input value={item.guideName} type="text" disabled/>
            </div>
            <div className='reserve-items'> 
                <p>Rent from:</p>
                <input value={fromDate} type="date" min={new Date().toISOString().split('T')[0]} onChange={(e)=>fromDateFunction(e)}/>
            </div>
            <div className='reserve-items'>
                <p>Until:</p>
                <input value={toDate} type="date" onChange={(e)=>toDateFunction(e)} />
            </div>
            <div className='reserve-items'>
                <p>Total amount:</p>
                <input value={`$ ${rentAmount}`} type="text" disabled style={{color:"#000000"}}/>
            </div>
            <div className='reserve-items'>
            {!checkAvailability &&
                <Button  style={{marginRight:"30px"}}>Check availability</Button>
            }
            {checkAvailability &&
                <Button  style={{marginRight:"30px"}}>Pay and rent</Button>
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default RentAccPopup
