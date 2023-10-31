import React, { useEffect, useState } from 'react';
import '../../styles/tourist/touristaccessories.css';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function ToursitAccessories() {

  const [accessories, setAccessories] = useState([]);
  const [accImages, setAccImages] = useState([]);

  console.log(accImages);
  console.log(accessories);

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  function chunkArray(array, size) {
    const chunked_arr = [];
    let copied = [...array];
    while (copied.length > 0) {
      chunked_arr.push(copied.splice(0, size));
    }

    return chunked_arr;
  }

  //handle rent button press
  const handleRent = (accDetails) => {
    localStorage.setItem("accDetails", JSON.stringify(accDetails));
    window.location.href = '/tourist/touristAccessoriesView';
  }

  //retrieving data from database
  useEffect(() => {
    Promise.all([
      axiosInstance.get("/getAllFairs"),
      axiosInstance.get("/viewFairImages")
    ])
    .then((responses) => {
      const allFairsResponse = responses[0];
      const viewFairImagesResponse = responses[1];

      setAccessories(allFairsResponse.data);
      setAccImages(viewFairImagesResponse.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  //meging data from two arrays
  const mergedData = accessories.map(accessory => {
    const image = accImages.find(img => img.fairId === accessory.fairId);
    return {
      ...accessory,
      image: image ? image : null
    };
  });
  console.log(mergedData);


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

      <div className="all-accessories mt-4 mb-4 d-flex justify-content-center gap-5">
    {chunkArray(mergedData, 4).map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="accessories-row">
        {chunk.map((item, index) => (
          <div key={index} className="accessories-card mb-4">
            <div className="accessories-card-image"><img className='acc-images' src={require(`../../assets/images/${item.image.fairImage}.jpg`)} alt="" /></div>
            <p className='pt-1' style={{fontWeight:'600', fontSize:'18px',color:'#004577',margin:'0px'}}>{item.fairname}</p>
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
              onClick={() => handleRent(item)}
            >
              Rent
            </Button>
          </div>
        ))}
      </div>
    ))}
  </div>

    </div>
  )
}

export default ToursitAccessories;