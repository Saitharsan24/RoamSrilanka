import {React, useEffect, useState} from 'react';
import '../../styles/tourist/touristaccessories.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Details } from '@mui/icons-material';
import RentAccPopup from './rentAccPopup';

function ToursitAccessories() {

  const rentDetails = JSON.parse(localStorage.getItem("accDetails"));
  console.log(rentDetails);

  const [showBlur, setShowBlur] = useState(false);
  const [showRentPopUp, setShowRentPopUp] = useState(false);

  const showPopUpHandler = () => {
    setShowRentPopUp(!showRentPopUp);
    setShowBlur(!showBlur);
  }

  const closePopUpHandler = () => {
    setShowRentPopUp(!showRentPopUp);
    setShowBlur(!showBlur);
  }

  return (
    <>
    {
      showRentPopUp && <RentAccPopup className="rent-acc-popup" closeModal={closePopUpHandler} item={rentDetails}/>
    }
    <div className={`tourist-main 
        ${
          showBlur ? 'blur-background' : '' // Apply blur class conditionally
          }`}>
      
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
                <img className='acc-images' src={require(`../../assets/images/${rentDetails.image.fairImage}.jpg`)} alt="" />
            </div>
            {/* <div className="accessories-sub-image-set d-flex flex-row gap-2 mt-2">
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
              <div className="accessories-sub-image">

              </div>
            </div> */}
          </div>

          <div className="accessories-text width-inherit">
          <h2>{rentDetails.fairname}</h2>
            <div className="accessories-fields d-flex flex-column align-items-end mt-5">

                <div className="accessories-field-item">
                  <p>Item type :</p>
                  <input style={{color:"#000000", fontWeight:"600"}} type="text" disabled value={rentDetails.fairname}/>
                </div>

                <div className="accessories-field-item">
                  <p>Description :</p>
                  <input type="text" style={{color:"#000000", fontWeight:"600"}} disabled value={rentDetails.description}/>
                </div>

                <div className="accessories-field-item">
                  <p>Rent/day :</p>
                  <input type="text" style={{color:"#000000", fontWeight:"600"}} disabled value={`$ ${rentDetails.rent}`}/>
                </div>

                {/* <div className="accessories-field-item">
                  <p>Availability :</p>
                  <input type="text" style={{color:"#000000", fontWeight:"600"}}/>
                </div> */}

                {/* <div className="accessories-field-item">
                  <p>Terms and conditons :</p>
                  <input type="text" />
                </div> */}

            </div> 
            <div className="accessories-field-btn">
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
                    onClick={showPopUpHandler}
                  >
                  Rent item
                </Button>
            </div>
          </div>
        </div>
      </div>

    </div>  
    </>
  )
}

export default ToursitAccessories;