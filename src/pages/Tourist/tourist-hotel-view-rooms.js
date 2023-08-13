import React from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import ReactSlider from 'react-slider'

function ToursitHotelViewRoom() {
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
            <input type="text" />
          </div>
          <div className='hotel-checkin'>
            <h6>Check in date</h6>
            <input type="text" />
          </div>
          <div className='hotel-checkout'>
            <h6>Check out date</h6>
            <input type="text" />
          </div>
          <div className='hotel-room-pax'>
            <h6>Travelers</h6>
            <input type="text" />
          </div>
          <div className='hotel-search-btn'>
            <BsIcons.BsSearch />
          </div>
        </div> 

        <div className="hotel-room-details w-100 mt-2 d-flex flex-column gap-4">
          
          <div className='hotel-rooms-list d-flex flex-column gap-3'>
            <h2>Hotel Araliya</h2>
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
                  <p>Colombo</p>
                </div> 
                <div>
                  <h5>Description</h5>
                  <p style={{textAlign:"justify"}}>
                    Lorem ipsum dolor sit adipisicing elit amet consectetur adipisicing elit. adipisicing elit. adipisicing elit.
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
                    <p>8.5</p>
                  </div>
                  <p>530 View</p>
              </div>
            </div>
          
            <div>
              <h3 style={{fontWeight:"650"}}>Choose your room</h3>
              <div className='roomCard-hotel-view d-flex flex-row gap-3 align-items-center justify-content-center'>
                <div>
                  <div className='roomCard-hotel-view-image'>dsdfd</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            
          </div>

          

        </div>
        
    </div>
  )
}

export default ToursitHotelViewRoom