import React from 'react';
import '../../styles/tourist/touristaccessories.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function ToursitAccessories() {

  return (
    <div className='tourist-main'>
      
      <div className="tourist-headings w-100">
        <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>Accessories</h2>
        <hr style={{margin:'0px'}} />
      </div>

      {/* Accessories-view */}
      <div className='accessories-view-card mt-4'>
        <div className="accessories-card-text">
          <h3 style={{fontWeight:'600',fontSize:'30px'}}>Details</h3>
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
          <div className="accessories-text width-inherit">
          <h2>Camera</h2>
            <div className="accessories-fields d-flex flex-column align-items-end-">

                <div className="accessories-field-item">
                  <p>Item type :</p>
                  <input type="text" />
                </div>

                <div className="accessories-field-item">
                  <p>Description :</p>
                  <input type="text" />
                </div>

                <div className="accessories-field-item">
                  <p>Rent/day :</p>
                  <input type="text" />
                </div>

                <div className="accessories-field-item">
                  <p>Availability :</p>
                  <input type="text" />
                </div>

                <div className="accessories-field-item">
                  <p>Terms and conditons :</p>
                  <input type="text" />
                </div>

            </div> 
            <div className="accessories-field-btn">
              <a href="rentItem">
                <Button
                    className="rent-btn"
                    variant="primary"
                    size='lg'
                    style={{
                      backgroundColor: "#004577",
                      border: "none",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      fontSize: "15px",
                    }}
                  >
                  Rent item
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>  
  )
}

export default ToursitAccessories;