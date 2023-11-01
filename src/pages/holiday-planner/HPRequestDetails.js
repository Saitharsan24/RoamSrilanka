import React, { useState, useEffect } from "react";
// import Headeruser from "../components/headerusers";
// import Sidebar from "../components/holidayplanner-sidebar";
//import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import "./../styles/updatepack.css";
import profile from "../../assets/images/profile_pic.png";
import axios from "axios";

const HPRequestDetails = () => {
  const paraData = useParams();
  console.log(paraData.p_bookingID);
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  const [requestData, setRequestData] = useState({});
  const [userData, setUserData] = useState({});
  const [packageData, setPackageData] = useState({});

  const [hotelData, setHotelData] = useState([]);
  const [hotelRequestData, setHotelRequestData] = useState([]);
  const [filteredHotelData, setFilteredHotelData] = useState([]);
  const [mergedAndFilteredData, setMergedAndFilteredData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/request/" + paraData.p_bookingID)
      .then((res) => {
        setRequestData(res.data);
        console.log(res.data);

        axiosInstance
          .get("/users/" + res.data.touristID)
          .then((res2) => {
            setUserData(res2.data);
            console.log(res2.data);
          })
          .catch((err) => {
            console.log(err);
          });

        axiosInstance.get("/packages/" + res.data.packageID).then((res3) => {
          setPackageData(res3.data);
          console.log(res3.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  console.log("package data : ", packageData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotelsResponse = await axiosInstance.get("/viewHotels");
        setHotelData(hotelsResponse.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestsResponse = await axiosInstance.get("/viewRequest");
        setHotelRequestData(requestsResponse.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    if (hotelData.length > 0 && hotelRequestData.length > 0) {
      // Merge hotel data based on hotelId
      const mergedData = hotelData.map(hotel => {
        const request = hotelRequestData.find(request => request.hotelId === hotel.hotelId);
        return { ...hotel, ...(request ? request : {}) };
      });
  
      // Filter the merged data by rating (assuming packageData.hotel_rating is defined)
      const filteredByRating = mergedData.filter(hotel => hotel.starRating >= packageData.hotel_rating);
  
      // Set the state with the filtered data
      setMergedAndFilteredData(filteredByRating);
    }
  }, [hotelData, hotelRequestData, packageData.hotel_rating]);


  const filteredHotels = mergedAndFilteredData.filter(hotel => {
    const requestFromDate = new Date(hotel.fromDate);
    const requestToDate = new Date(hotel.toDate);
    const userInputFromDate = new Date(requestData.fromdate);
    const userInputToDate = new Date(requestData.todate);
  
    const hasDateConflict = userInputFromDate <= requestToDate && userInputToDate >= requestFromDate;

  // Apply additional conditions for status and seats
  return (
    hotel.status !== "1" &&
    hotel.starRating === packageData.hotel_rating && !hasDateConflict
  );
  });
  
  // availableHotels will contain the hotels that do not have date conflicts
  const availableHotels = filteredHotels;
  

  const [guideData, setGuideData] = useState([]);
  const [ guideUser, setGuideUser] = useState([]);
  const [guideRequestData, setGuideRequestData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/viewGuides")
      .then((res) => {
        setGuideData(res.data);
        console.log("guide data : ",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        setGuideUser(res.data);
        console.log("guide user:",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
    .get("/viewTrips")
    .then((res) => {
      setGuideRequestData(res.data);
      console.log("guide request data : ",res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  const mergeGuideData = (guideData, guideUser, guideRequestData) => {
    const mergedData = guideData.map((dataItem) => {
      const matchingUser = Array.isArray(guideUser) ? guideUser.find((userItem) => userItem && userItem.userId === dataItem.userId) : undefined;
      const matchingRequest = Array.isArray(guideRequestData) ? guideRequestData.find((requestData) => requestData && requestData.userId === dataItem.userId) : undefined;
  
      if (matchingUser) {
        const mergedItem = {
          ...dataItem,
          ...matchingUser,
        };
  
        if (matchingRequest) {
          mergedItem.requestData = matchingRequest;
        }
  
        return mergedItem;
      } else {
        return dataItem;
      }
    }).filter(Boolean);
  
    return mergedData;
  };
  
  const fullyMergedGuideData = mergeGuideData(guideData, guideUser, guideRequestData);
  
  const filteredGuides = fullyMergedGuideData.filter(guide => {
    const requestFromDate = new Date(guide.requestData.fromDate);
    const requestToDate = new Date(guide.requestData.toDate);
    const userInputFromDate = new Date(requestData.fromdate);
    const userInputToDate = new Date(requestData.todate);
  
    const hasDateConflict = userInputFromDate <= requestToDate && userInputToDate >= requestFromDate;

  // Apply additional conditions for status and seats
  return (
    guide.requestData["status"] !== "1" && !hasDateConflict
  );

  });

  const availableGuides = filteredGuides;

  console.log("available guides : ",availableGuides);


const [vehicleData, setVehicleData] = useState([]);
const [driverData, setDriverData] = useState([]);
const [driverTripData, setDriverTripData] = useState([]);
const [usersData, setUsersData] = useState([]);
const seats = packageData.no_of_people;
console.log("seats",seats);

useEffect(() => {
  axiosInstance
    .get("/vehicle")
    .then((res) => {
      setVehicleData(res.data);
      console.log("vehicle data",res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

useEffect(() => {
  axiosInstance
    .get("/viewDriver")
    .then((res) => {
      setDriverData(res.data);
      console.log("driver data",res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

useEffect(() => {
  axiosInstance
    .get("/allTripRequests")
    .then((res) => {
      setDriverTripData(res.data);
      console.log("driver trip data",res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

useEffect(() => {
  axiosInstance
  .get("/users")
  .then((res) => {
    setUsersData(res.data);
    console.log("driver user data",res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}, []);


const mergeDriverData = (driverTripData, vehicleData, driverData, usersData) => {
  const mergedData = driverTripData.map((tripItem) => {
    const newstatus = tripItem.status;
    const matchingVehicle = Array.isArray(vehicleData) ? vehicleData.find((vehicleItem) => vehicleItem && vehicleItem.userId === tripItem.userId) : undefined;
    const matchingDriver = Array.isArray(driverData) ? driverData.find((driverItem) => driverItem && driverItem.userId === tripItem.userId) : undefined;
    const matchingUser = Array.isArray(usersData) ? usersData.find((userData) => userData && userData.userId === tripItem.userId) : undefined;
    
    if (matchingVehicle) {
      const mergedItem = {
        ...tripItem,
        ...matchingVehicle,
        newstatus: newstatus,
      };

      if (matchingDriver) {
        mergedItem.driverData = matchingDriver;
      }

      if (matchingUser) {
        mergedItem.userData = matchingUser;
      }

      return mergedItem;
    } else {
      return tripItem;
    }
  }).filter(Boolean);

  return mergedData;
};

const fullyMergedDriverData = mergeDriverData(driverTripData, vehicleData, driverData, usersData);



const filteredDrivers = fullyMergedDriverData.filter(driver => {
  const requestFromDate = new Date(driver.start_date);
  const requestToDate = new Date(driver.end_date);
  const userInputFromDate = new Date(requestData.fromdate);
  const userInputToDate = new Date(requestData.todate);

  // Check for date conflicts
  const hasDateConflict = userInputFromDate <= requestToDate && userInputToDate >= requestFromDate;

  // Apply additional conditions for status and seats
  return (
    driver.newstatus !== 1 &&
    driver.seats === seats && !hasDateConflict
  );
});

const availableDrivers = filteredDrivers;


  const handleRowClick = (packageID) => {
    navigate(`/holidayPlanner/plannerViewPackage/${packageID}`);
  };

  const handleChatClick = () => {
    navigate(`/holidayPlanner/hpchat`);
  };
  const [selectedTourGuide, setSelectedTourGuide] = useState([]);
  const handleTourGuideChange = (event) => {
    setSelectedTourGuide(event.target.value);
  };

  console.log("selected tour guide : ",selectedTourGuide);


  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
  };
  console.log("selected vehicle : ",selectedVehicle);



  const [selectedHotel, setSelectedHotel] = useState([]);
  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  console.log("selected hotel : ",selectedHotel);
  const currentDate = new Date();

console.log("day",currentDate);
  const handleRequestData = async(e) => {
    e.preventDefault();
    try{
      const response1 = await axiosInstance.post("/addTrip",{
        date:currentDate,
        fromDate:requestData.fromdate,
        toDate:requestData.todate,
        userId:selectedTourGuide,
        status:"1",
      });
      const response2 = await axiosInstance.post("/addRequest",{
        date:currentDate,
        fromDate:requestData.fromdate,
        toDate:requestData.todate,
        hotelId:selectedHotel,
        status:"1",
      });
      const response3 = await axiosInstance.post("/addTripRequest",{
        start_date:requestData.fromdate,
        end_date:requestData.todate,
        userId:selectedVehicle,
        status:1,
      });
      const response4 = await axiosInstance.put(`/updateHpStatus/${paraData.p_bookingID}`,{
          requestStatus: 1,
        });

      if(response1.status && response2.status && response3.status && response4.status == 200){
        alert("Request accepted successfully");
      }else{
        alert("Request not accepted");
      }
    }catch(err){
      console.log(err);
    }
  }



  return (
    <div className="d-flex flex-column">
      {/* <Headeruser /> */}
      <div
        style={{ backgroundColor: "#F4F4F5" }}
        className="d-flex flex-row col-12"
      >
        {/* <Sidebar /> */}
        <div className="d-flex gap-3 w-100 align-items-center justify-content-around mt-4">
          <div
            style={{
              height: "auto",
              backgroundColor: "#ffff",
              borderRadius: "15px",
              boxShadow:
                "0px 3.1931917667388916px 6.386383533477783px 0px rgba(66, 80, 102, 0.10)",
            }}
            className="d-flex flex-column gap-3 col-6 p-5"
          >
            <form>
              <div className="d-lg-flex d-md-flex d-flex flex-lg-row justify-content-between">
                <img
                  src={profile}
                  className="object-fit-cover img-fluid col-3"
                  style={{ borderRadius: "50%" }}
                ></img>
                <button
                  onClick={() => handleChatClick()}
                  className="change_pic col-4"
                  style={{ height: "3rem", width: "Auto" }}
                >
                  Message to {userData.userFullname}
                </button>
              </div>

            <div>
              <p className="name px-2 justify-content-center">
                {userData.userFullname}
              </p>
              <p className=" bio m-0 p-3">Description</p>
              <div
                className="d-flex align-self-center p-3"
                style={{ borderRadius: "15px", backgroundColor: "#F1F1F2" }}
              >
                <p>
                  10 Lines Essay is considered one of the most enjoyable and
                  fun-filled experiences to express thoughts, enhance spoken and
                  written English Skills.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Request for :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{packageData.package_name}</p>
              </div>
              <button
                className=" change_pic col-4 flex-fill"
                style={{ height: "2rem" }}
                onClick={() =>
                  handleRowClick(packageData.packageID) &
                  console.log(
                    "Clicked View for package ID:",
                    packageData.packageID
                  )
                }
              >
                View package
              </button>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>From Date :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{requestData.fromdate}</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>To Date :</p>
              </div>
              <div className="col-4 hp-req">
                <p>{requestData.todate}</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              <div className="col-4">
                <p>Hotel :</p>
              </div>
              <div className="col-4 hp-req">
                <select
                  name="hotelSelect"
                  value={selectedHotel}
                  onChange={handleHotelChange}
                >
                  {availableHotels.map((hotel, index) => (
                    <option key={index} value={hotel.hotelId}>
                      {hotel.hotelName}
                    </option>
                  ))}
                  {/* Add other hotel options as needed */}
                </select>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              {packageData.vehicle && (
                <div className="d-flex flex-column flex-lg-row justify-content-left col-12  gap-3">
                  <div className="col-4">
                    <p>Vehicle :</p>
                  </div>
                  <div className="col-4 hp-req">
                    <select
                      name="vehicleSelect"
                      value={selectedVehicle}
                      onChange={handleVehicleChange}
                    >
                      {availableDrivers.map((vehicle, index) => (
                        <option key={index} value={vehicle.userData["userId"]}>
                          {vehicle.userData["userFullname"]}
                        </option>
                      ))}
                      {/* Add other vehicle options as needed */}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-left m-2 gap-3">
              {packageData.trip_guide && (
                <div className="d-flex flex-column flex-lg-row justify-content-left col-6 gap-3">
                  <div className="col-8">
                    <p>Tour guide:</p>
                  </div>
                  <div className="col-4 hp-req">
                    <select
                      name="tourGuideSelect"
                      value={selectedTourGuide}
                      onChange={handleTourGuideChange}
                    >
                      {availableGuides.map((guide, index) => (
                        <option key={index} value={guide.userId}>
                          {guide.userFullname}
                        </option>
                      ))}
                      {/* Add other tour guide options as needed */}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-row justify-content-between mx-2">
              <button className="btn-cancel" type="submit">
                Reject
              </button>
              <button 
              className="btn-next" 
              type="submit"
              method="PUT"
              onClick={handleRequestData}>
                Accept
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPRequestDetails;
