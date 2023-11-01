import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../styles/tourist/tour_packages.css";
import axios from "axios";
import PackageRequestPopup from "./packageRequestPopup";

function ToursitGuide() {
    const packageID = JSON.parse(localStorage.getItem("pkgId"));

    const [tourPackage, setTourPackage] = useState([]);
    console.log(tourPackage);

    const [visitPlaces, setVisitPlaces] = useState([]);

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    useEffect(() => {
        axiosInstance
            .get("/packages/" + packageID)
            .then((res) => {
                setTourPackage(res.data);
                setVisitPlaces(res.data.places.split(", "));
            })
            .catch((err) => {
                console.log(err);
            });
    },[packageID]);


    const [showBlur, setShowBlur] = useState(false);
    const [showPackagePopUp, setShowPackagePopUp] = useState(false);

    const showPopUpHandler = () => {
      setShowPackagePopUp(!showPackagePopUp);
      setShowBlur(!showBlur);
    }

    const closePopUpHandler = () => {
      setShowPackagePopUp(!showPackagePopUp);
      setShowBlur(!showBlur);
    }

  return (

    <>
    {
      showPackagePopUp && <PackageRequestPopup className="rent-acc-popup" closeModal={closePopUpHandler} item={tourPackage}/>
    }

    <div
      className={`tourist-main 
      ${
        showBlur ? 'blur-background' : '' // Apply blur class conditionally
        }
      d-flex flex-column gap-2 mb-2"
      style={{ width: "inherit" }}`}
    >
      <div className="tourist-headings w-100">
        <h2 className="mb-1" style={{ margin: "0px", fontWeight: "600" }}>
          Tour Packages
        </h2>
        <hr style={{ margin: "0px" }} />
      </div>

      <div className="tourist-packages-view d-flex flex-column guide-top mt-2 align-items-center p-4">
          <div className="view-package-row-01 d-flex flex-row">
            <div className="d-flex flex-column package-row-editing">
              <div className={`package-view-image pk${packageID-1}`}>
              </div>
              <div className="row-2-description">
                <h4>
                  Description
                </h4>
                <p className="mt-2">
                  {tourPackage.discription}
                </p>
              </div>
            
            </div>
            <div className="d-flex flex-column">
              <h3>{tourPackage.package_name}</h3>
              <p><span>$ {Math.floor(tourPackage.price)}</span></p>
              <div className="package-details-list">
                <p className="mt-2"><span>Accomodation:</span> {tourPackage.hotel_rating} Star hotel</p>
                <p><span>Tour guide:</span> {tourPackage.trip_guide && 'Included'}{!(tourPackage.trip_guide) && 'Not included'}</p>
                <p><span>Transportation:</span> {tourPackage.vehicle && 'Included'}{!(tourPackage.vehicle) && 'Not included'}</p>
                <p><span>No of Pax:</span> {tourPackage.no_of_people}</p>
                <p><span>Places included:</span>
                <ul style={{ marginLeft: "80px" }}>
                    {visitPlaces.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                </ul>
                </p>
                <div>
                <Button
                style={{
                  backgroundColor: "#004577",
                  border: "none",
                  marginTop: "3px",
                  marginLeft: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "17px",
                  fontWeight: "500",
                  width:"80%"
                  }}
                  onClick={() => {showPopUpHandler()}}
                  >Book</Button>
              </div>
              </div>
              
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default ToursitGuide;
