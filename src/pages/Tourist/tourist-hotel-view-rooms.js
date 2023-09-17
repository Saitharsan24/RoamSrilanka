import React,{useEffect,useState} from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import axios from "axios";
import RoomPopup from '../../components/touristRoomPopup'
import { set } from 'lodash'


function ToursitHotelViewRoom() {

  //Showing room details in a popup
  const [showPopup, setShowPopup] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  //console.log(showPopup);

  //function for show popup
  const openPopup = () => {
    setShowPopup(!showPopup);
    setShowBlur(!showBlur);
  }

  //function for close popup
  const closeModal = () => {
    setShowPopup(false);
    setShowBlur(false);
  }


  //getting hotel id from url
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get('hotelId');


  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    // Fetch hotel data from your backend API
    axiosInstance
      .get("/viewHotels")
      .then((response) => {
        setHotels(response.data.filter((hotel) => hotel.hotelId == hotelId));
        //console.log(response.data.filter((hotel) => hotel.hotelId == hotelId));
      })

      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  
  console.log(hotels);


  return (
    <>
    {showPopup && <RoomPopup closeModal={closeModal} />}
    <div  className={`tourist-main d-flex flex-column gap-2 mb-2 
          ${
          showBlur ? 'blur-background' : '' // Apply blur class conditionally
          }`} style={{ width: "inherit" }}>
        <div className="tourist-headings w-100">
          <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
            Hotels and accommodations
          </h2>
          <hr style={{ margin: "0px"}} />
        </div>

        <div className="hotel-room-details w-100 mt-2 d-flex flex-column gap-4">
          
          <div className='hotel-rooms-list d-flex flex-column gap-3'>
            <h2>{hotels.length > 0 && hotels[0].hotelName}</h2>
            <div className='tourist-hotel-view-images d-flex flex-row justify-content-between'>
              
              <div className="hotel-view-images d-flex flex-row gap-2">
                <div className='hotel-view-image-main'></div>
                <div className='hotel-view-image-sub d-flex flex-column gap-3'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className='hotel-view-details d-flex flex-column gap-3'>
                <div>
                  <h5>Location</h5>
                  <p>City:{hotels.length > 0 && " " + hotels[0].city}</p>
                  <p>location:{hotels.length > 0 && " "+ hotels[0].address}</p>
                </div> 
                <div>
                  <h5>Description</h5>
                  <p style={{textAlign:"justify"}}>
                    {hotels.length > 0 &&  hotels[0].description}
                  </p>
                </div>
                <div>
                  <h5>Amenities</h5>
                  <p>
                    <ul>
                      <li>Pool</li>
                      <li>Hot tub</li>
                      <li>Spa</li>
                      <li>WiFi</li>
                      <li>Restaurant</li> 
                    </ul>
                  </p>
                </div>

              </div>

              <div className='search-hotel-price hotel-view-rating d-flex flex-column justify-content-center align-items-center gap-2'>
                  <h6>VERY GOOD</h6>
                  <div className='hotel-search-rating d-flex flex-row justify-content-center align-items-center gap-1 '>
                    <BiIcons.BiSolidStar/>
                    <p>{hotels.length > 0 && hotels[0].userRating}</p>
                  </div>
                  <p>530 View</p>
              </div>
            </div>
          
            <div>
              <h3 style={{fontWeight:"650"}}>Choose your room</h3>
              <div className='roomCard-hotel-view d-flex flex-row gap-3 align-items-center justify-content-center'>
                
                <div className='roomcard-items d-flex flex-column'>
                  <div className='roomcard-hotel-view-image'></div>
                  <div className='roomcard-hotel-details d-flex flex-column align-items-start gap-1'>
                    <h5 style={{fontWeight:"600"}}>Superior Queen</h5>
                    <ul>
                        <li>Free cancellation</li>
                        <li>Breakfast included</li>
                        <li>Free Wifi</li>
                        <li>Sleeps 2</li>
                        <li>1 King bed</li>
                    </ul> 
                    <p onClick={openPopup} className='roomMoreDetailHover' style={{fontWeight:"600", fontSize:"18px", color:"#004577"}}>
                      More datails <BsIcons.BsArrowRight/>
                    </p>
                    <Button>
                      Reserve
                    </Button>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>

          

        </div>
        
    </div>
  </>
  )
}

export default ToursitHotelViewRoom