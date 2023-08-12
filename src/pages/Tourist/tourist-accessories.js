import React from 'react';
import '../../styles/tourist/touristaccessories.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function ToursitAccessories() {
  const cardData = [
    {
      name: 'Travel Bag',
      imagePath: '',
    },

    {
      name: 'Travel Bag',
      imagePath: '',
    },

    {
      name: 'Travel Bag',
      imagePath: '',
    },

    {
      name: 'Travel Bag',
      imagePath: '',
    },

    {
      name: 'Travel Bag',
      imagePath: '',
    },

  ]

  return (
    <div className='tourist-main'>
      
      <div className="tourist-headings w-100">
        <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>Accessories</h2>
        <hr style={{margin:'0px'}} />
      </div>
      
      {/* Accessories searchbar */}
      <div className='search-bar d-flex flex-row justify-content-between align-items-center' style={{backgroundColor:"#ffffff", borderRadius:"2rem", marginTop:"1rem", width:"25rem", height:"2.5rem"}}>
          <input type="text" placeholder='Search accessories' style={{margin:"0rem", paddingLeft:"1.3rem", fontWeight:"500",fontSize:"1rem", border:"none", width:"22rem",height:"2.5rem",borderRadius:"2rem"}}/>
      </div>

      <div className="all-accessories mt-4 mb-4 d-flex flex-column gap-4">
        
        <div className="accessories-travel">
          <div className="accessories-subhead">
            <h4>Travel Gears</h4>
          </div>
          <div className="accessories-all-card">
            <div className="accessories-card">
              <div className="accessories-card-image">

              </div>

              <p className='pt-1' style={{fontWeight:'600', fontSize:'18px',color:'#004577',margin:'0px'}}>Camera</p>
              <Button
                  className="rent-btn"
                  variant="primary"
                  style={{
                    backgroundColor: "#004577",
                    border: "none",
                    marginTop:"3px",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    fontSize: "15px",
                  }}
                >
                Rent
              </Button>
            </div>
          </div>
        </div>
        
        <div className="accessories-electronic">
          <div className="accessories-subhead">
            <h4>Electronic Gadgets</h4>
          </div>
          <div className="accessories-all-card">
            <div className="accessories-card">
            <div className="accessories-card-image">

            </div>

            <p className='pt-1' style={{fontWeight:'600', fontSize:'18px',color:'#004577',margin:'0px'}}>Camera</p>
            <a href="/tourist/touristAccessoriesView">

            <Button
                className="rent-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontSize: "15px",
                }}
              >
               Rent
            </Button>
            </a>
            </div>
          </div>

        </div>
        
        <div className="accessories-outdoor">
          <div className="accessories-subhead">
            <h4>Outdoor Accessories</h4>
          </div>

          <div className="accessories-all-card">
            <div className="accessories-card">
            <div className="accessories-card-image">

            </div>

            <p className='pt-1' style={{fontWeight:'600', fontSize:'18px',color:'#004577',margin:'0px'}}>Camera</p>
            <Button
                className="rent-btn"
                variant="primary"
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop:"3px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontSize: "15px",
                }}
              >
               Rent
            </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ToursitAccessories;