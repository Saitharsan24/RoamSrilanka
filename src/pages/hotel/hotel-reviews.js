import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

const HotelReviews = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get("id");
  const [reviews, setReview] = useState([]);
  //Sending data to backend
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get(`/viewReview/${roomId}`)
      .then((response) => {
        setReview(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="d-flex flex-column w-100">
      {reviews.map((review, index) => (
          <div style={{backgroundColor:"#fff", borderRadius:"10px"}} className="d-flex flex-row col-11 my-3 mx-5 p-2 gap-2 align-items-center justify-content-evenly">
            <h5 className="">{review.date}</h5>
            <h5 className="">{review.review}</h5>
            <ReactStars
              count={review.rating}
              // onChange={ratingChanged}
              size={25}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              color="#ffd700"
            />
          </div>
      ))}
    </div>
  );
};
export default HotelReviews;
