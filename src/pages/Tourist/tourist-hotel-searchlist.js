import React,{useEffect,useState} from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import axios from "axios";

function ToursitHotelSearchList() {

  //constants for search bar
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState(new Date().toISOString().split('T')[0]);
  const [travelers, setTravelers] = useState(1);

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

      // State for filters
      const [minPrice, setMinPrice] = useState(null);
      const [maxPrice, setMaxPrice] = useState(null);
      const [starRating, setStarRating] = useState(null);
      const [propertyType, setPropertyType] = useState([]);
      const [facilities, setFacilities] = useState([]);
      const [mealPreferences, setMealPreferences] = useState([]);
  
      const [filteredHotels, setFilteredHotels] = useState(hotels);
  
      useEffect(() => {
          let filtered = hotels;
          
          // Price Filter
          if (minPrice) filtered = filtered.filter(hotel => hotel.price >= minPrice);
          if (maxPrice) filtered = filtered.filter(hotel => hotel.price <= maxPrice);
  
          // Star Rating Filter
          if (starRating) filtered = filtered.filter(hotel => hotel.starRating === starRating);
  
          // Property Type Filter
          if (propertyType.length > 0) filtered = filtered.filter(hotel => propertyType.includes(hotel.hotelType));
  
          // Update the filtered hotels state
          setFilteredHotels(filtered);
      }, [minPrice, maxPrice, starRating, propertyType, facilities, mealPreferences]); // Watch for changes in these states
  
      const clearFilter = () =>{
        setFilteredHotels(hotels);
      }

  return (
    <div className="tourist-main d-flex flex-column gap-2 mb-2" style={{ width: "inherit" }}>
        <div className="tourist-headings w-100">
          <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
            Hotels and accommodations
          </h2>
          <hr style={{ margin: "0px"}} />
        </div>

        <div className="hotel-searchbar">
          <div className='hotel-place'>
            <h6>Place going to</h6>
            <input 
              type="text" 
              list="places" 
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
                value={checkInDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
          </div>

          <div className='hotel-checkout'>
            <h6>Check out date</h6>
            <input 
              type="date" 
              value={checkOutDate}
              min={checkInDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
           
          <div className='hotel-room-pax d-flex flex-column'>
            <h6>Travelers</h6>
            <div className='d-flex flex-row gap-4'>
            <button onClick={() => setTravelers(prev => Math.max(prev - 1, 1))}>-</button>
            <input type="number" value={travelers} readOnly />
            <button onClick={() => setTravelers(prev => prev + 1)}>+</button>
            </div>
          </div>
          <a href="touristHotelSearchList">
          <div className='hotel-search-btn'>
            <BsIcons.BsSearch />
          </div>
          </a>
        </div>

        <div className="hotel-searchlist w-100 d-flex flex gap-3  ">

          <div className='hotel-search-filter d-flex flex-column gap-3'>
            <h5>Filter by <span onClick={clearFilter} style={{fontSize:"15px", color:"#DB163A", marginLeft:"60px", fontWeight:"700", cursor:"pointer"}}>X Clear filter</span></h5>
            <div className='hotel-filter-01'>
              <h6>Price</h6>
              <div className='d-flex flex-row gap-2' style={{marginLeft:"10px"}}>
                <div>
                  <h6>Min</h6>
                  <input type="number" onChange={(e) => setMinPrice(e.target.value)} style={{width:"130px", borderRadius:"15px", paddingLeft:"10px",border: "#aaaaaa 1px solid"}}/>
                </div>
                <div>
                  <h6>Max</h6>
                  <input type="number" onChange={(e) => setMaxPrice(e.target.value)} style={{width:"130px", borderRadius:"15px", paddingLeft:"10px",border: "#aaaaaa 1px solid"}}/>
                </div>
              </div>
            </div>
            <div className='hotel-filter-02'>
              <h6>Star Rating</h6>
              <div className='d-flex flex justify-content-center align-items-center gap-2' >
                <Button onClick={() => setStarRating(1)} className='d-flex justify-content-center align-items-center'>1<BiIcons.BiSolidStar/></Button>
                <Button onClick={() => setStarRating(2)} className='d-flex justify-content-center align-items-center'>2<BiIcons.BiSolidStar/></Button>
                <Button onClick={() => setStarRating(3)} className='d-flex justify-content-center align-items-center'>3<BiIcons.BiSolidStar/></Button>
                <Button onClick={() => setStarRating(4)} className='d-flex justify-content-center align-items-center'>4<BiIcons.BiSolidStar/></Button>
                <Button onClick={() => setStarRating(5)} className='d-flex justify-content-center align-items-center'>5<BiIcons.BiSolidStar/></Button>
              </div>
            </div>

            <div className='hotel-filter-03'>
              <h6>Property type</h6>
              <div className='d-flex flex-column justify-content-center gap-2' style={{paddingLeft:'15px'}}>
                <div><input type="checkbox" /> Hotels</div>
                <div><input type="checkbox" /> Home stays</div>
                <div><input type="checkbox" /> Guesthouses</div>
                <div><input type="checkbox" /> Apartments</div>
                <div><input type="checkbox" /> Bread and breakfast</div>
                <div><input type="checkbox" /> Villas</div>
                <div><input type="checkbox" /> Resorts</div>
              </div>
            </div>

            <div className='hotel-filter-04'>
              <h6>Facilities</h6>
              <div className='d-flex flex-column justify-content-center gap-2' style={{paddingLeft:'15px'}}> 
                <div><input type="checkbox" /> Free WiFi</div>
                <div><input type="checkbox" /> Room service</div>
                <div><input type="checkbox" /> Restaurant</div>
                <div><input type="checkbox" /> Gym</div>
                <div><input type="checkbox" /> Swimming pool</div>
                <div><input type="checkbox" /> Spa</div>
                <div><input type="checkbox" /> Washing machine</div>
              </div>
              
            </div>

            <div className='hotel-filter-05'>
              <h6>Meal prferences</h6>
              <div className='d-flex flex-column justify-content-center gap-2' style={{paddingLeft:'15px'}}>
                <div><input type="checkbox" /> Breakfast included</div>
                <div><input type="checkbox" /> Dinner included</div>
                <div><input type="checkbox" /> Lunched included</div>
                <div><input type="checkbox" /> All inclusive</div>
              </div>
              
            </div>
          </div>

          <div className='hotel-search-hotellist'>
            <h5>Search results</h5>
            <div className='hotel-all-search-list d-flex flex-column gap-3'>
           
            {filteredHotels.map((hotel) => (
              <div className="search-list-01 d-flex flex-row gap-3" key={hotel}>
                <div className='search-hotel-img'></div>
                <div className='search-hotel-text'>
                  <h4>{hotel.hotelName}</h4>
                  <div className='search-hotel-list d-flex flex-column gap-2'>
                    <div>
                      <h5 style={{margin:"0px",fontWeight:"600" }}>Place</h5>
                      <p>{hotel.address}</p>
                    </div>
                    <div>
                      <h5 style={{margin:"0px",fontWeight:"600" }}>Description</h5>
                      <p>{hotel.description}</p>
                    </div>
                  </div>
                </div>  
                <div className='search-hotel-price d-flex flex-column justify-content-center align-items-center gap-2'>
                <h5>{hotel.starRating} Star hotel</h5>
                  <div className='hotel-search-rating d-flex flex-column justify-content-center align-items-center'>
                    <p style={{fontSize:"15px"}}>Rating</p>
                    <p style={{fontSize:"15px"}}><BiIcons.BiSolidStar/> {hotel.userRating}</p>
                  </div>
                  <p>530 View</p>
                  <p><strike style={{color:"#999999"}}>$500</strike> <br /> $450 / Pax</p>
                  <a href="toursitHotelViewRoom">
                    <Button>
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            ))}

            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ToursitHotelSearchList