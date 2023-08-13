import React from 'react'
import '../../styles/tourist/tourist_hotel.css'
import * as BsIcons from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import HotelImage from '../../assets/images/hotel_01.jpg'

function ToursitHotel() {
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

        <div className="hotel-offers">
          <img src={HotelImage} alt="hotel" className='w-100 h-100' style={{borderRadius:'15px'}}/>
        </div>

        <div className="hotel-famous-places d-flex flex-column gap-4">
          <div>
            <h4>Hotels in the most popular regions in Sri Lanka</h4>
            <p className='hotel-heading-para'>Discover Sri Lanka by exploring its top regions</p>
          </div>

          <div className=" hotel-famous-places-cards w-100 d-flex flex-row  justify-content-around gap-3">

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

              <div className="place-01">
                <div className="place-image"></div>
                <div className='d-flex flex-column align-items-center hotel-card-text'>
                  <p className='hotel-place-text'>Galle</p>
                  <p style={{ color: "#DB163A", fontSize:'15px' }}>43 Hotels</p>
                </div>
              </div>

          </div>

        </div>

        <div className="hotel-famous-places d-flex flex-column gap-4">
          <div>
            <h4>Top picks for hotels in Sri Lanka</h4>
            <p className='hotel-heading-para'>Try one of these popular and highly-rated Sri Lanka hotels</p>
          </div>

          <div className=" hotel-famous-places-cards w-100 d-flex flex-row  justify-content-around gap-3">

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>Hotel Saphire</p>
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

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>Hotel Araliya</p>
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

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>Taj Samudra</p>
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

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>Shangrila</p>
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

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>Cinnamon Grand</p>
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

              <div className="place-01">
                <div className="place-image"></div>
                <div className='hotel-btn-name'>
                  <p>JetWing</p>
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

          </div>

        </div>

        
    </div>
  )
}

export default ToursitHotel