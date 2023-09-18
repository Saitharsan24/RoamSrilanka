import React from "react";
import './../styles/tourist/tourist-room-popup.css';
import * as IoIcon from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import { forEach } from "lodash";

function Modal({closeModal,room}){
    
    const policyBathroom = room.policyBathroom.split(",");
    const policyBedroom = room.policyBedroom.split(",");
    const policyFoodanddrink = room.policyFoodanddrink.split(",");  
    const policyWifi = room.policyInternet.split(",");

    return(
        
    <div className="">
        <div className="modalBackground">
            <div className="roomDetailClosebtn w-100 mt-1"><IoIcon.IoCloseCircle onClick={()=>closeModal(false)} className="roomDetailClosebtnicon" style={{fontSize:"30px", cursor:"pointer", }}/></div>
            <div className="hotelRoomImages"></div>
            <div className="hotelRoomName"><h3 style={{fontWeight:"600", marginTop:"20px"}} >{room.roomType}</h3></div>
            <div className="d-flex flex-row justify-content-around" style={{marginTop:"10px"}}>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Bathroom</h4>
                    <ul>
                        {
                            policyBathroom.map((value, key) => (
                                <li key={key}>{value}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Bedroom</h4>
                    <ul>
                        {
                            policyBedroom.map((value, key) => (
                                <li key={key}>{value}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Food and drink</h4>
                    <ul>
                        {
                            policyFoodanddrink.map((value, key) => (
                                <li key={key}>{value}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hotelRoomContent d-flex flex-column" style={{paddingLeft:"20px"}}>
                    <h4 style={{fontSize:"18px"}}>Wifi</h4>
                    <ul>
                        {
                            policyWifi.map((value, key) => (
                                <li key={key}>{value}</li>
                            ))
                        }   
                    </ul>
                </div>
            </div>
            <div className="priceandreservebtn d-flex flex-row">
                <div>
                    <h3 style={{fontWeight:"600", color:"#db163a", fontSize:"40px", margin:"0"}}>${room.price} <span style={{fontSize:"25px", color:"#000000", fontWeight:"400"}}>per pax</span></h3>
                    <p>*incliding tax and fees</p>
                </div>
                <div style={{marginTop:"25px"}}>
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