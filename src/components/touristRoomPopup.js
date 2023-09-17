import React from "react";
import './../styles/tourist/tourist-room-popup.css';
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';

function Modal({closeModal}){

    return(
        
    <div className="">
        <div className="modalBackground">
            <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={()=>closeModal(false)} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
            <div className="hotelRoomImages"></div>
            <div className="hotelRoomName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >Superior Queen</h3></div>
            <div className="d-flex flex-row justify-content-around" style={{marginTop:"10px"}}>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Bathroom</h4>
                    <ul>
                        <li>Private bathroom</li>
                        <li>Shower</li>
                        <li>Towels</li>
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Bedroom</h4>
                    <ul>
                        <li>Ceiling fan</li>
                        <li>Air conditioner</li>
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Food and drink</h4>
                    <ul>
                        <li>Coffee/tea maker</li>
                        <li>Electric kettle</li>
                        <li>Free bottled water</li>
                        <li>Room service</li>
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Wifi</h4>
                    <ul>
                        <li>Free WiFi (2-device limit)</li>
                    </ul>
                </div>
            </div>
            <div className="priceandreservebtn d-flex flex-row">
                <div>
                    <h3 style={{fontWeight:"600", color:"#db163a", fontSize:"40px", margin:"0"}}>$500 <span style={{fontSize:"25px", color:"#000000", fontWeight:"400"}}>per pax</span></h3>
                    <p>*incliding tax and fees</p>
                </div>
                <div>
                    <Button>
                      Reserve
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;