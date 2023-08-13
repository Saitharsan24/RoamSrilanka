import React from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import ReactSlider from 'react-slider'

function ToursitHotelSearchList() {
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

        <div className="hotel-searchlist w-100 d-flex flex gap-3">
          <div className='hotel-search-filter d-flex flex-column gap-3'>
            <h5>Filter by</h5>
            <div className='hotel-filter-01'>
              <h6>Price</h6>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
              />
            </div>
            <div className='hotel-filter-02'>
              <h6>Star Rating</h6>
              <div className='d-flex flex justify-content-center align-items-center gap-2' >
                <Button className='d-flex justify-content-center align-items-center'>1<BiIcons.BiSolidStar/></Button>
                <Button className='d-flex justify-content-center align-items-center'>2<BiIcons.BiSolidStar/></Button>
                <Button className='d-flex justify-content-center align-items-center'>3<BiIcons.BiSolidStar/></Button>
                <Button className='d-flex justify-content-center align-items-center'>4<BiIcons.BiSolidStar/></Button>
                <Button className='d-flex justify-content-center align-items-center'>5<BiIcons.BiSolidStar/></Button>
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
            <div className='hotel-all-search-list'>
              <div className="search-list-01 d-flex flex-row gap-3">
                <div className='search-hotel-img'>hi</div>
                <div className='search-hotel-text'>
                  <h4>Hotel Saphire</h4>
                  <div className='search-hotel-list d-flex flex-column gap-2'>
                    <p>Place</p>
                    <p>Description</p>
                  </div>
                </div>  
                <div className='search-hotel-price d-flex flex-column justify-content-center align-items-center gap-2'>
                  <h6>VERY GOOD</h6>
                  <div className='hotel-search-rating d-flex flex-row justify-content-center align-items-center gap-1 '>
                    <BiIcons.BiSolidStar/>
                    <p>8.5</p>
                  </div>
                  <p>530 View</p>
                  <p><strike style={{color:"#999999"}}>$500</strike> <br /> $450 / Pax</p>
                  <Button>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ToursitHotelSearchList