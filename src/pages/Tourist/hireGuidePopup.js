import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function RentAccPopup({closeModal, item}) {

        //getting data from session variable
        const { sessionData , setSessionData  } = useSession();
        const [rentAmount, setRentAmount] = useState(item.fee);
        const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
        const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
        const [checkAvailability, setCheckAvailability] = useState(false);
        const [placesToVisit, setPlacesToVisit] = useState('');
        const [guideTrips, setGuideTrips] = useState([]);

        // console.log(item);
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

    const apiBaseUrl = "http://localhost:8080";
    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    useEffect(() => {
        axiosInstance.get("/viewTrips")
        .then((response) => {
          // Handle the response data
          // For example:
          console.log(response.data);
          setGuideTrips(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);

      const handleCheckAvailability = () => {
        // Loop through all fair requests
        for (const guideTrip of guideTrips) {
            // Convert strings to Date objects for comparison
            const requestFromDate = new Date(guideTrip.fromDate);
            const requestToDate = new Date(guideTrip.toDate);
            const userInputFromDate = new Date(fromDate);
            const userInputToDate = new Date(toDate);
    
            // Check if dates conflict
            if (
                (userInputFromDate >= requestFromDate && userInputFromDate <= requestToDate) ||
                (userInputToDate >= requestFromDate && userInputToDate <= requestToDate) ||
                (userInputFromDate <= requestFromDate && userInputToDate >= requestToDate)
            ) {
                setCheckAvailability(false);
                alert("Sorry, guide is not available on the given date. Please check on another date.");
                return; // Exit after finding a single conflict
            }
        }

            // If loop completes without returning, no conflicts were found
            setCheckAvailability(true);
            alert("Guide is available ! You can hire.");
    };

    const handleRent = () => { 
        const hireDetails = {
            userId: sessionData.userId,
            guideId: item.userId,
            fromDate: fromDate,
            toDate: toDate,
            charge: rentAmount,
            status: 0,
            places: placesToVisit
        }

        console.log(hireDetails);

        axiosInstance
        .post("/addTrip", hireDetails) // <-- Include reserveDetails here
        .then((response) => {
          if (response.status === 200) {
            console.log("Successfully Sent request ! Wait for the response.");
            alert("Successfully Sent request ! Wait for the response.");
            window.location.href = "/tourist/touristGuide";
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

    }
    
  return (
    <div>
    <div className='popup-for-acc-reserve special-guide-reserve'>
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
                <p>Places to visit:</p>
                <input type="text" onChange={(e)=>setPlacesToVisit(e.target.value)} />
            </div>
            <div className='reserve-items'>
                <p>Total amount:</p>
                <input value={`$ ${rentAmount}`} type="text" disabled style={{color:"#000000"}}/>
            </div>
            <div className='reserve-items'>
            {!checkAvailability &&
                <Button onClick={handleCheckAvailability}  style={{marginRight:"30px"}}>Check availability</Button>
            }
            {checkAvailability &&
                <Button onClick={handleRent}  style={{marginRight:"30px"}}>Send Request</Button>
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default RentAccPopup
