import React, { useState } from "react";
import "../../styles/updatepack.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import StarRating from "../../components/Rating";

function HPViewpackage() {
  const paraData = useParams();
  // console.log(paraData.packageID);
  

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [packageData, setPackageData] = useState({});
  const [trip_guide, setTrip_guide] = useState(false);
  const [meals, setMeals] = useState(false);
  const [selectedRating, onRatingChange] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/packages/" + paraData.packageID)
      .then((res) => {
        setPackageData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const trip_guide = packageData.trip_guide;
    setTrip_guide(trip_guide);
    const meals = packageData.meals;
    setMeals(meals);
  }, []);

  const deletePackage = (id) => {
    console.log("id", id);
    axiosInstance
      .delete(`/packages/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Package deleted successfully");
        window.location.href = "/holidayPlanner/plannerPackage";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="d-flex gap-3 w-100 m align-items-center justify-content-around">
      <div
        style={{
          height: "auto",
          backgroundColor: "#ffff",
          borderRadius: "15px",
          boxShadow:
            "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
        }}
        className="d-flex flex-column gap-3 mt-4 mb-5  justify-content-around"
      >
        <h1
          style={{
            fontFamily: "Barlow",
            fontWeight: "700",
            fontSize: "auto",
            color: "black",
          }}
          className="d-flex mx-5 mt-5"
        >
          Package Name: {packageData.package_name}
        </h1>
        <div className="d-flex align-items-center justify-content-around flex-column flex-md-row flex-lg-row col-12">
          <form className="pack">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-column justify-content-center m-2">
                <div className="d-flex flex-column justify-content-center m-2">
                  <label>
                    Name:
                    <input
                      className="p-2"
                      type="text"
                      placeholder={packageData.package_name}
                      readOnly
                    ></input>
                  </label>
                  <label>
                    Amount Per Person:
                    <input
                      className="p-2"
                      type="number"
                      placeholder={packageData.price}
                      readOnly
                    ></input>
                  </label>
                  <label>
                    Days:
                    <input
                      className="p-2"
                      type="number"
                      placeholder={packageData.days}
                      readOnly
                    ></input>
                  </label>
                  <label>
                    Places:
                    <input
                      className="p-2"
                      type="text"
                      placeholder={packageData.places}
                      readOnly
                    ></input>
                  </label>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
                  <label className="d-flex flex-lg-row gap-3 m-2">
                    Guide
                    <input
                      className="d-flex"
                      type="checkbox"
                      name="tourGuide"
                      checked={packageData.trip_guide}
                    ></input>
                  </label>
                  <label className="d-flex flex-lg-row gap-3 m-2">
                    Meals
                    <input
                      className="d-flex"
                      type="checkbox"
                      name="meals"
                      checked={packageData.meals}
                    ></input>
                  </label>
                </div>
                <div className="d-flex flex-md-row col-md-10 col-sm-10 flex-column flex-lg-row justify-content m-2 gap-3">
                  <div className="col-12 col-md-6 col-lg-4">
                    <p>Hotel Type</p>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <StarRating
                      selectedRating={packageData.hotel_rating}
                      onRatingChange={onRatingChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mx-5 mb-5">
          <button className="btn-cancel p-2"  onClick={() => {
              console.log("Clicked Remove for package ID:", paraData.packageID); // Check this line

              deletePackage(paraData.packageID);
            }}>
            Delete
          </button>
          <button className="btn-next p-2" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default HPViewpackage;
