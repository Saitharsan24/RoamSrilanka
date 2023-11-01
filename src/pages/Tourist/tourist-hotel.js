import React,{ useState, useEffect } from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import HotelImage from '../../assets/images/hotel_01.jpg'
import axios from "axios";
import { useSession } from '../../Context/SessionContext';
import { Link } from 'react-router-dom';

function ToursitHotel() {

  const [hotelimageCount, setHotelimageCount] = useState(0);

  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState(new Date().toISOString().split('T')[0]);
  const [travelers, setTravelers] = useState(1);

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);
    
    // If selected check-in date is after current check-out date, 
    // set check-out date to the same as the check-in date
    if (new Date(selectedDate) > new Date(checkOutDate)) {
      setCheckOutDate(selectedDate);
    }
  };
  
  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };


  const placesInSriLanka = ['Colombo', 'Kandy', 'Galle', 'Anuradhapura', 'Jaffna',
  'Sigiriya', 'Dambulla Cave Temple', 'Polonnaruwa', 'Nuwara Eliya', 'Adams Peak', 'Yala National Park', 'Uda Walawe National Park',
  'Mirissa', 'Unawatuna Beach', 'Ella', 'Arugam Bay', 'Pinnawala Elephant Orphanage', 'Horton Plains National Park', 'Trincomalee', 
  'Hikkaduwa Beach', 'Wilpattu National Park', 'Batticaloa', 'Pasikudah Beach', 'Minneriya National Park', 'Knuckles Mountain Range',
  'Gal Oya National Park', 'Kitulgala', 'Matara', 'Bundala National Park', 'Sinharaja Rain Forest', 'Ratnapura', 'Badulla', 'Kadugannawa',
  'Kataragama', 'Mannar', 'Negombo', 'Tangalle', 'Ahangama', 'Weligama', 'Kurunegala'];

   //Sending data to backend
   const apiBaseUrl = "http://localhost:8080";

   const axiosInstance = axios.create({
     baseURL: apiBaseUrl,
     timeout: 10000,
   });

   //Initiating sessoin data
   const { sessionData , setSessionData  } = useSession();

    // updating session data
    const updateSession = () => {
      const searchDetails = {
        city: destination,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        travellers: travelers
       }
       localStorage.setItem('searchDetails', JSON.stringify(searchDetails));
       window.location.href = '/tourist/touristHotelSearchList';
    };

   //data from backend will directly store in this state  
   const [hotels, setHotels] = useState([]);
   useEffect(() => {
     // Fetch hotel data from your backend API
     axiosInstance
       .get("/viewHotels")
       .then((response) => {
         console.log(response.data);
         setHotels(response.data);
       })
       .catch((error) => {
         console.log("Error fetching data:", error);
       });
   }, []);

  return (
    <div className="tourist-main d-flex flex-column gap-3 mb-2" style={{ width: "inherit" }}>
        <div className="tourist-headings w-100">
          <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
            Hotels and accommodations
          </h2>
          <hr style={{ margin: "0px" }} />
        </div>

        <div className="hotel-searchbar">
          <div className='hotel-place'>
            <h6>Place going to</h6>
            <input 
              type="text" 
              list="places" 
              name='city'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <datalist id="places">
              {placesInSriLanka.map(place => <option key={place} value={place} />)}
            </datalist>
          </div>
          
          <div className='hotel-checkin'>
            <h6>Check in date</h6>
            <input 
              type="date" 
              name='checkIn'
              value={checkInDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={handleCheckInChange}
            />
          </div>

          <div className='hotel-checkout'>
            <h6>Check out date</h6>
            <input 
              type="date" 
              name='checkOut'
              value={checkOutDate}
              min={checkInDate}
              onChange={handleCheckOutChange}
            />
          </div>
           
          <div className='hotel-room-pax d-flex flex-column'>
            <h6>Travellers</h6>
            <div className='d-flex flex-row gap-4'>
            <button onClick={() => setTravelers(prev => Math.max(prev - 1, 1))}>-</button>
            <input type="number" name='travellers' value={travelers} readOnly />
            <button onClick={() => setTravelers(prev => prev + 1)}>+</button>
            </div>
          </div>
            <div className='hotel-search-btn' onClick={() => updateSession()}>
            <BsIcons.BsSearch />
            </div>
        </div>

        <div className="hotel-offers">
          <img src={HotelImage} alt="hotel" className='w-100 h-100' style={{borderRadius:'15px'}}/>
        </div>

        <div className="hotel-famous-places d-flex flex-column gap-4">
          <div>
            <h4>Top picks for hotels in Sri Lanka</h4>
            <p className='hotel-heading-para'>Try one of these popular and highly-rated Sri Lanka hotels</p>
          </div>

          <div className="hotel-famous-places-cards w-100 d-flex flex-row  justify-content-around gap-3">
        
          {hotels
            .sort((a, b) => b.rating - a.rating) // This sorts the hotels in descending order based on their ratings
            .slice(0, 5)
            .map((hotel,index) => (
              <div className="place-01" key={index}>
                <div className={`place-image-hotel${index}`}></div>
                <div className='hotel-btn-name d-flex flex-column gap-2'>
                  <p>{hotel.hotelName}</p>
                  <Button
                    className="book-tour-btn"
                    variant="primary"
                    style={{
                      backgroundColor: "#004577",
                      border: "none",
                      marginTop: "3px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Book hotel
                  </Button>
                </div>
               </div>
          ))}     
          </div>

        </div>

        
    </div>
  )
}

export default ToursitHotel