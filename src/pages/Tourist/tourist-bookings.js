import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../../styles/tourist/tourist_booking.css";
import "./../../styles/data-table.css";
import { MDBDataTable } from "mdbreact";
import "../../styles/admin/admin_user.css";
import axios from "axios";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useSession } from "../../Context/SessionContext";


function TouristBookings() {

  const { sessionData , setSessionData  } = useSession();
  const touristId = sessionData.userId;
  // console.log(touristId);

  const apiBaseUrl = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 10000,
  });

const [packageRequest, setPackageRequest] = useState([]);
const [packages, setPackage] = useState([]);
const [mergedPackageData, setMergedPackageData] = useState([]);
// console.log(mergedPackageData); 
  useEffect(() => {
    axiosInstance
      .get("/request")
      .then((res) => {
        // console.log(res.data);
        setPackageRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/packages")
      .then((res) => {
        // console.log(res.data);
        setPackage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const mergedData = packageRequest.map(request => {
      const correspondingPackage = packages.find(packageItem => packageItem.packageID === request.packageID);
      if (correspondingPackage) {
        return {
          ...correspondingPackage,
          ...request
        };
      }
      return null; // Or handle if no corresponding package is found
    }).filter(Boolean); // Remove any potential null entries
    const filteredPackages = mergedData.filter(request => request.touristID === touristId);

    setMergedPackageData(filteredPackages);
  }, [packageRequest, packages, touristId]); 

  function determineStatus(status) {
    switch (status) {
      case "0":
        return {text : "Pending", color:"green"};
      case "1":
        return {text : "On going", color:"red"};
        case "2":
      return { text: "Finished", color: "black" };  
      case "3":
        return {text : "Cancelled", color:"red"};
      default:
        return {text : "Pending", color:"green"};

    }
  }

const packageRows = mergedPackageData && Array.isArray(mergedPackageData)
  ? mergedPackageData.map(data => ({
      id: data.packageID,
      name: data.package_name,
      fromdate: data.fromdate,
      status: <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: determineStatus(data.status).color,
          marginRight: "8px",
        }}
      ></div>
      {determineStatus(data.status).text}
    </div>,
      btn: (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            // handleView(data);
          }}
        >
          View
        </button>
      ),
    }))
  : [];


  const [hotelRequest, setHotelRequest] = useState([]);
  const [hotels, setHotel] = useState([]);
  const [mergedHotelData, setMergedHotelData] = useState([]);
  console.log(mergedHotelData);

  useEffect(() => {
    axiosInstance
      .get("/viewRequest")
      .then((res) => {
        // console.log(res.data);
        setHotelRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/viewHotels")
      .then((res) => {
        // console.log(res.data);
        setHotel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const mergedData = hotelRequest.map(request => {
      const correspondingHotel = hotels.find(hotelItem => hotelItem.hotelID === request.hotelID);
      if (correspondingHotel) {
        return {
          ...correspondingHotel,
          ...request
        };
      }
      return null; // Or handle if no corresponding package is found
    }).filter(Boolean); // Remove any potential null entries
    const filteredHotels = mergedData.filter(request => request.userId === touristId);

    setMergedHotelData(filteredHotels);
  }, [hotelRequest, hotels, touristId]);

  const hotelRows = mergedHotelData && Array.isArray(mergedHotelData)
  ? mergedHotelData.map(data => ({
      id: data.requestId,
      name: data.hotelName,
      checkin: data.fromDate,
      checkout: data.toDate,
      btn: (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            // handleView(data);
          }}
        >
          View
        </button>
      ),
    }))
  : [];
  
  const [guideRequest, setGuideRequest] = useState([]);
  const [guides, setGuide] = useState([]);
  const [mergedGuideData, setMergedGuideData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/viewTrips")
      .then((res) => {
        // console.log(res.data);
        setGuideRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/viewGuides")
      .then((res) => {
        // console.log(res.data);
        setGuide(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const mergedData = guideRequest.map(request => {
      const correspondingGuide = guides.find(guideItem => guideItem.userId === request.guideId);
      if (correspondingGuide) {
        return {
          ...correspondingGuide,
          ...request
        };
      }
      return null; // Or handle if no corresponding package is found
    }).filter(Boolean); // Remove any potential null entries
    const filteredGuides = mergedData.filter(request => request.userId === touristId);

    setMergedGuideData(filteredGuides);
  }, [guideRequest, guides, touristId]);

  const guideRows = mergedGuideData && Array.isArray(mergedGuideData)
  ? mergedGuideData.map(data => ({
      id: data.guideId,
      name: data.guideName,
      rate: data.rating,
      btn: (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            // handleView(data);
          }}
        >
          View
        </button>
      ),
    }))
  : [];

  const [fairRequest, setFairRequest] = useState([]);
  const [fairs, setFair] = useState([]);
  const [mergedFairData, setMergedFairData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/getAllFairrequest")
      .then((res) => {
        // console.log(res.data);
        setFairRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/getAllFairs")
      .then((res) => {
        // console.log(res.data);
        setFair(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const mergedData = fairRequest.map(request => {
      const correspondingFair = fairs.find(fairItem => fairItem.fairId === request.fair_no);
      if (correspondingFair) {
        return {
          ...correspondingFair,
          ...request
        };
      }
      return null; // Or handle if no corresponding package is found
    }).filter(Boolean); // Remove any potential null entries
    const filteredFairs = mergedData.filter(request => request.touristID === touristId);

    setMergedFairData(filteredFairs);
  }, [fairRequest, fairs, touristId]);

  function determinedStatus(status) {
    switch (status) {
      case 0:
        return {text : "New Request", color:"green"};
      case 1:
        return {text : "Payment Pending", color:"red"};
        case -1:
      return { text: "Cancelled", color: "black" };  
      case 2:
        return {text : "Confirmed", color:"red"};
        case 3:
        return {text : "Completed", color:"red"};
      default:
        return {text : "On going", color:"green"};

    }
  }


  const fairRows = mergedFairData && Array.isArray(mergedFairData)
  ? mergedFairData.map(data => ({
      id: data.fairId,
      name: data.fairname,
      rate: data.rent,
      status: <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: determineStatus(data.status).color,
          marginRight: "8px",
        }}
      ></div>
      {determineStatus(data.status).text}
    </div>,
      btn: (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            // handleView(data);
          }}
        >
          View
        </button>
      ),
    }))
  : [];

  const [driverRequest, setDriverRequest] = useState([]);
  const [drivers, setDriver] = useState([]);
  const [mergedDriverData, setMergedDriverData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/allTripRequests")
      .then((res) => {
        // console.log(res.data);
        setDriverRequest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/viewDriver")
      .then((res) => {
        // console.log(res.data);
        setDriver(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const mergedData = driverRequest.map(request => {
      const correspondingDriver = drivers.find(driverItem => driverItem.userId === request.userId);
      if (correspondingDriver) {
        return {
          ...correspondingDriver,
          ...request
        };
      }
      return null; // Or handle if no corresponding package is found
    }).filter(Boolean); // Remove any potential null entries
    const filteredDrivers = mergedData.filter(request => request.tourist_id === touristId);

    setMergedDriverData(filteredDrivers);
  }, [driverRequest, drivers, touristId]);


  const driverRows = mergedDriverData && Array.isArray(mergedDriverData)
  ? mergedDriverData.map(data => ({
      id: data.userId,
      startdate: data.start_date,
      enddate: data.end_date,
      status: <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: determinedStatus(data.status).color,
          marginRight: "8px",
        }}
      ></div>
      {determinedStatus(data.status).text}
    </div>,
      btn: (
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            // handleView(data);
          }}
        >
          View
        </button>
      ),
    }))
  : [];

  return (
  <>    
   
        <div className="user-1 d-flex w-100">

          <div className="d-flex flex-column col-lg-11 ms-lg-5">
            <div className="d-flex flex-column gap-4 my-3">
            <div className="tourist-headings w-100">
            <h2 className='mb-1' style={{margin:'0px', fontWeight:'600'}}>My Bookings</h2>
            <hr style={{margin:'0px'}} />
          </div>
              <Tabs  id="uncontrolled-tab-example">
                <Tab eventKey="tourist" title="Packages">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={{
                  columns: [
                    {
                      label: "Package ID",
                      field: "id",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Package Name",
                      field: "name",
                      sort: "asc",
                      width: 100,
                    },
                    {
                      label: "Date",
                      field: "fromdate",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Status",
                      field: "status",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Details",
                      field: "btn",
                      width: 100,
                      btn: "view-button",
                    },
                  ],
                  rows: packageRows,
              
                }
              }
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="driver" title="Hotel">
                
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={
                {
                  columns: [
                    {
                      label: "Booking ID",
                      field: "id",
                      sort: "asc",
                      width: 100,
                    },
                    {
                      label: "Hotel Name",
                      field: "name",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Check-in",
                      field: "checkin",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Check-out",
                      field: "checkout",
                      sort: "asc",
                      width: 150,
                    },
                    {
                      label: "Details",
                      field: "btn",
                      width: 100,
                      btn: "view-button",
                    },
                  ],rows: hotelRows,
                }
              }
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="guide" title="Guide">
                
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={{
                columns: [
                  {
                    label: "Guide ID",
                    field: "id",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Guide Name",
                    field: "name",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Rating",
                    field: "rate",
                    sort: "asc",
                    width: 200,
                  },
                 
                  {
                    label: "Details",
                    field: "btn",
                    width: 100,
                    btn: "view-button",
                  },
                ],rows: guideRows,
              }}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="hotel" title="Ride">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={{
                columns: [
                  {
                    label: "Driver ID",
                    field: "id",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Start Date",
                    field: "startdate",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "End Date",
                    field: "enddate",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Status",
                    field: "status",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Details",
                    field: "btn",
                    width: 100,
                    btn: "view-button",
                  },
                ],rows: driverRows,
              }}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="holiday" title="Accessories">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={{
                columns: [
                  {
                    label: "Fair ID",
                    field: "id",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Fair Name",
                    field: "name",
                    sort: "asc",
                    width: 150,
                  },
                  {
                    label: "Rent Price",
                    field: "rate",
                    sort: "asc",
                    width: 100,
                    
                  },
                  {
                    label: "Status",
                    field: "status",
                    sort: "asc",
                    width: 100,
                    
                  },
                  {
                    label: "Details",
                    field: "btn",
                    width: 100,
                    btn: "view-button",
                  },
                ],rows: fairRows,
              }}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

              </Tabs>
        
            </div>         
          </div>
        </div>
  </>
  );
}

export default TouristBookings;