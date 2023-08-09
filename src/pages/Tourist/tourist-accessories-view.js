import React from 'react';
import '../../styles/tourist/touristaccessories.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function ToursitAccessories() {

  return (
    <div className='tourist-main'>
      
      <div className="tourist-headings w-100">
        <h2 style={{margin:'0px', fontWeight:'600'}}>Accessories</h2>
        <hr style={{margin:'0px'}} />
      </div>

      {/* Accessories-view */}
      <div className='accessories-view-card mt-4'>
        <div className="accessories-card-text">
          <h3 style={{fontWeight:'600',fontSize:'30px'}}>Camera</h3>
        </div>
        <div className="accessories-image-text d-flex flex-row gap-5">
          <div className="accessories-image">
            <div className="accessories-main-image d-flex">

            </div>
            <div className="accessories-sub-image-set d-flex flex-row gap-2 mt-2">
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
            </div>
          </div>
          <div className="accessories-text">
            <div className="accessories-fields d-flex flex-column align-items-end-">
              <p>Name :</p>
              <p>Item type :</p>
              <p>Description :</p>
              <p>Rent/day :</p>
              <p>Availability :</p>
              <p>Terms and conditons :</p>
            </div>
            <div className="accessories-details">

            </div>
          </div>
        </div>
      </div>

    </div>  
  )
}

export default ToursitAccessories;