import {React,useState,useEffect} from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   
import axios from "axios";
import { useSession } from '../../Context/SessionContext';

function RentAccPopup({closeModal, item}) {

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    //getting data from session variable
    const { sessionData , setSessionData  } = useSession();

    const [accessoryId, setAccessoryId] = useState(item.fairId);
    const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
    const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
    const [rentAmount, setRentAmount] = useState(item.rent);

    const [checkAvailability, setCheckAvailability] = useState(false);
    const [fairRequests, setFairRequests] = useState([]);
    // console.log(fairRequests);


    const fromDateFunction = (event) => {
        setFromDate(event.target.value);
        setToDate(event.target.value);
        setRentAmount(item.rent);
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
        setRentAmount(daysCount * item.rent);
        }
    }

    useEffect(() => {
        axiosInstance.get("/getAllFairrequest")
        .then((response) => {
          // Handle the response data
          // For example:
          setFairRequests(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }, []);


        const handleCheckAvailability = () => {
            // Loop through all fair requests
            for (const fairRequest of fairRequests) {
                // Convert strings to Date objects for comparison
                const requestFromDate = new Date(fairRequest.fromdate);
                const requestToDate = new Date(fairRequest.todate);
                const userInputFromDate = new Date(fromDate);
                const userInputToDate = new Date(toDate);
        
                // Check if dates conflict
                if (
                    (userInputFromDate >= requestFromDate && userInputFromDate <= requestToDate) ||
                    (userInputToDate >= requestFromDate && userInputToDate <= requestToDate) ||
                    (userInputFromDate <= requestFromDate && userInputToDate >= requestToDate)
                ) {
                    setCheckAvailability(false);
                    alert("Sorry, the item is not available on the given date. Please check on another date.");
                    return; // Exit after finding a single conflict
                }
            }

                // If loop completes without returning, no conflicts were found
                setCheckAvailability(true);
                alert("Item is available! You can rent it.");
        };
        
    const handleRent = () => { 
        const rentDetails = {
            touristID: sessionData.userId,
            fair_no: accessoryId,
            fromdate: fromDate,
            todate: toDate,
            amount: rentAmount,
            status: 0
        }
        
        axiosInstance
        .post("/addFairrequest", rentDetails) // <-- Include reserveDetails here
        .then((response) => {
          if (response.status === 200) {
            console.log("Successfully added");
            alert("Successfully added");
            window.location.href = "/tourist/touristGadgets";
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

    }
    
    
  return (
    <div>
    <div className='popup-for-acc-reserve'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Rent Accessories</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Accessory:</p>
                <input type="text" value={item.fairname} disabled/>
            </div>
            <div className='reserve-items'> 
                <p>Rent from:</p>
                <input type="date" value={fromDate} min={new Date().toISOString().split('T')[0]} onChange={(e)=>fromDateFunction(e)}/>
            </div>
            <div className='reserve-items'>
                <p>Until:</p>
                <input type="date" value={toDate} min={fromDate} onChange={(e)=>toDateFunction(e)} />
            </div>
            <div className='reserve-items'>
                <p>Total amount:</p>
                <input type="text" value={`$ ${rentAmount}`} disabled style={{color:"#000000"}}/>
            </div>
            <div className='reserve-items'>
            {!checkAvailability &&
                <Button onClick={handleCheckAvailability} style={{marginRight:"30px"}}>Check availability</Button>
            }
            {checkAvailability &&
                <Button onClick={handleRent} style={{marginRight:"30px"}}>Pay and rent</Button>
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default RentAccPopup
