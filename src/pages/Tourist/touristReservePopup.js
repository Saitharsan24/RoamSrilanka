import {React,useState} from 'react'
import * as IoIcon from 'react-icons/io5';
import "../../styles/tourist/touristReservePopup.css"
import { Button } from 'react-bootstrap';
import { useSession } from '../../Context/SessionContext';
import axios from "axios";

function TouristReservePopup({closeModal,hotel,room}) {
    const reserverdetails = JSON.parse(localStorage.getItem('searchDetails'))  
    
    

    const apiBaseUrl = "http://localhost:8080";
    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
      });

    function formatDateToISO(dateString) {
        const [day, month, year] = dateString.split("-");
        return `${year}-${month}-${day}`;
    }

    const setCurrentDate = () => {
        // Date object
        const date = new Date();
        let currentDay= String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        let currentYear = date.getFullYear();
        // we will display the date as DD-MM-YYYY 
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        return currentDate;
    }


    const correctDateFormat = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');  // Months are zero-based, so +1 and pad with a '0' if needed
        const dd = String(date.getDate()).padStart(2, '0');
        
        return `${yyyy}-${mm}-${dd}`;
    }


    

       //Initiating sessoin data
   const { sessionData , setSessionData  } = useSession();

   const [searchDetails, setSearchDetails] = useState(JSON.parse(localStorage.getItem('searchDetails')));
//    console.log(searchDetails);

    const reserveHandler = () => {
        const reserveDetails = {
            userId: sessionData.userId,
            ownerId: null,
            hotelId: hotel[0].hotelId,
            roomId: room.id,
            date: formatDateToISO(setCurrentDate()),
            fromDate:searchDetails.checkIn,
            toDate: searchDetails.checkOut,
            status: 0
        }
        console.log(reserveDetails);
        
        axiosInstance
        .post("/addRequest", reserveDetails) // <-- Include reserveDetails here
        .then((response) => {
          if (response.status === 200) {
            console.log("Successfully added");
            alert("Successfully added");
            window.location.href = "/tourist/touristHotel";
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

    }

  return (
    <div className="">
    <div className="reserveModelBackground">
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={()=>closeModal(false)} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Reserve Room</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Hotel Name:</p>
                <input type="text" value={hotel[0].hotelName} disabled/>
            </div>
            <div className='reserve-items'> 
                <p>check-in date:</p>
                <input type="text" disabled value={reserverdetails.checkIn}/>
            </div>
            <div className='reserve-items'>
                <p>check-out date:</p>
                <input type="text" disabled value={reserverdetails.checkOut}/>
            </div>
            <div className='reserve-items'>
                <p>Amount:</p>
                <input type="text" value={"$ "+room.price} disabled/>
            </div>
            <div className='reserve-items'>
                <Button onClick={reserveHandler} style={{marginRight:"30px"}}>Reserve</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default TouristReservePopup
