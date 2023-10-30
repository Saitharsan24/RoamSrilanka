import React from 'react'
import '../../styles/tourist/rentAccPopup.css'
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';   

function RentAccPopup({closeModal, item}) {
    console.log(item);
    
  return (
    <div>
    <div className='popup-for-acc-reserve'>
        <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={closeModal} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
        <div className="reserveName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Reserve Room</h3></div>
        <div className='reserve-details'>
            <div className='reserve-items'> 
                <p>Accessory:</p>
                <input type="text" value={item.fairname} disabled/>
            </div>
            <div className='reserve-items'> 
                <p>Rent from:</p>
                <input type="date" min={new Date().toISOString().split('T')[0]}/>
            </div>
            <div className='reserve-items'>
                <p>No of days:</p>
                <input type="number" min='1'/>
            </div>
            <div className='reserve-items'>
                <p>Total amount:</p>
                <input type="text" disabled/>
            </div>
            <div className='reserve-items'>
                <Button style={{marginRight:"30px"}}>Reserve</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RentAccPopup
