import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MDBDataTable } from "mdbreact";
import "../../styles/admin/admin_user.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import GuideChat from "../tour-guide/guide-chat";



function Users() {

  const [holidayPlanners, setHolidayPlanners] = useState([]);
  const [tourists, setTourists] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [guide, setGuides ] =useState([]);
  const [userdetail, setuserdetail] = useState([]);

  
  const apiBaseUrl = "http://localhost:8080";

   const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
 
   
   
  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axiosInstance.get("/viewHolidayplanner").then((response) => {
      setHolidayPlanners(response.data);
      console.log("setHolidayPlanners",response.data)
    });
  }, []);

  useEffect(() => {

    axiosInstance.get("/viewTourist").then((response) => {
      setTourists(response.data);
      console.log("setTourists",response.data)
  });
},[]);

useEffect(() => {

  axiosInstance.get("/viewGuides").then((response) => {
    setGuides(response.data);
    console.log("setGuides",response.data)
});
},[]);

useEffect(() => {
   
  axiosInstance.get("/users").then((response) => {
    setuserdetail(response.data);
    console.log("setuserdetail",response.data)
     });
  }, []);

useEffect(() => {
  axiosInstance.get("/viewDriver").then((response) => {
    setDrivers(response.data);
    console.log("setDrivers",response.data)
  });

},[]);


useEffect(() => {
  axiosInstance.get("/viewHotels").then((response) => {
    setHotels(response.data);
    console.log("setHotels",response.data)
  });
},[]);


  
  const data_tourist = {
    columns: [
      {
        label: "Tourist Id",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],

    rows :tourists.map((tourist) => {
    
      const UserDetail = userdetail.find(
        (detail) => detail.userId === tourist.userId
      );

      return {
      id: tourist.userId, //  API response has a field named 'id' for Tourist ID
      name: UserDetail ? UserDetail.userFullname : "N/A", //  API response has a field named 'touristName' for Tourist Name
      status: tourist.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
      btn: [
        <>
         <Link to={`/admin/admintouristdetail?userId=${tourist.userId}`}>
         <button className="view-detail">View detail</button>
          </Link>
                </>,
      ],
    };
  }),

  };

  const data_driver = {
    columns: [
      {
        label: "Driver ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Driver Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone Number",
        field: "phone",
        sort: "asc",
        width: 200,
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
     
    rows :drivers.map((driver) => {
      const UserDetail = userdetail.find(
        (detail) => detail.userId === driver.userId
      );

      return {
      id: driver.userId, //  API response has a field named 'id' for Driver ID
      name: UserDetail ? UserDetail.userFullname : "N/A", //  API response has a field named 'driverName' for Driver Name
      phone: driver.phoneNo, //  API response has a field named 'seatCapacity' for Seat Capacity
      status: driver.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
      btn: [
        <>
          <Link to={`/admin/admindriverdetail?userId=${driver.userId}`}>
          <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
    };
  }),
  
      };
        
  

  const data_guide = {
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
        label: "status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Details",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],

    rows :guide.map((guide) => {
      const UserDetail = userdetail.find(
        (detail) => detail.userId === guide.userId
      );

      return {
      id: guide.userId, //  API response has a field named 'id' for Driver ID
      name: UserDetail ? UserDetail.userFullname : "N/A", //  API response has a field named 'driverName' for Driver Name
      status: guide.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
      btn: [
        <>
          <Link to={`/admin/adminguidedetail?userId=${guide.userId}`}>
          <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
    };
  }),



//    rows: guide.map((guide))=>{
//     const UserDetail=userdetail.find(
//       (detail)=>detail.userId=== guide.userId
//     );
//     return{
//     id:guide.userId,
//     name: UserDetail ? UserDetail.userFullname : "N/A", //  API response has a field named 'driverName' for Driver Name
//     status: driver.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
//     btn: [
//       <>
//         <Link to={`/admin/admindriverdetail?userId=${guide.userId}`}>
//         <button className="view-detail">View detail</button>
//         </Link>
//    </>
//     ],
//   };
// }),


  };


  const data_hotel = {
    columns: [
      {
        label: "Hotel ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Hotel Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 200,
      },

      {
        label: "status",
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
    ],
    
    rows: hotels.map((hotel) => ({
      id: hotel.hotelId, //  API response has a field named 'id' for Hotel ID
      name: hotel.hotelName, //  API response has a field named 'hotelName' for Hotel Name
      address: hotel.address, //  API response has a field named 'address' for Address
      status: hotel.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
      btn: [
        <>
          <Link to={`/admin/adminhoteldetail?hotelId=${hotel.hotelId}`}>
          <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
    })),

  };

  


  const data_holidayplanner = {
    columns: [
      {
        label: "Planner ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Planner Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      

      {
        label: "Account Status",
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
    ],



  rows :holidayPlanners.map((planner) => {

    const UserDetail = userdetail.find(
      (detail) => detail.userId === planner.userId
    );

    return {
    id: planner.userId, //  API response has a field named 'id' for Planner ID
    name: UserDetail ? UserDetail.userFullname : "N/A", //  API response has a field named 'plannerName' for Planner Name
    status: planner.status === null ?<div style={{color:"#66d03b",fontWeight:"bolder"}}>active</div>  : <div style={{color:"#d03b3b",fontWeight:"bolder"}}>passive</div>, // Set status based on the condition
    btn: [
      <>
       <Link to={`/admin/adminholidayplannrdetail?userId=${planner.userId}`}>
       <button className="view-detail">View detail</button>
        </Link>
      </>,
    ],
  };
}
),
  };


  return (
      
        <div className="user-1 d-flex w-100">
          <div className="d-flex flex-column col-lg-11 ms-lg-5">
            <div className="d-flex flex-column gap-4 my-3">
              
              <Tabs  id="uncontrolled-tab-example">
                <Tab eventKey="tourist" title="Tourist">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_tourist}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="driver" title="Driver">
                 <div className="d-flex flex justify-content-end align-items-center">
                <a href="/admin/admindriverreg">  <button className="mt-3 " style={{background:"#004577",border:"none",color:"#ffffff",borderRadius:"10px",height:"35px",width:"150px"}}>Add Driver</button></a>
                </div>
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_driver}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="guide" title="Guide">
                <div className="d-flex flex justify-content-end align-items-center">
                <a href="/admin/adminguidereg">  <button className="mt-3 " style={{background:"#004577",border:"none",color:"#ffffff",borderRadius:"10px",height:"35px",width:"150px"}}>Add Guide</button></a>
                </div>
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_guide}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="hotel" title="Hotel">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_hotel}
              exportToCSV={true}
              //table for tourist
            />
                </Tab>

                <Tab eventKey="holiday" title="holiday">
                <div className="d-flex flex justify-content-end align-items-center">
                <a href="/admin/adminholidayplannrreg">  <button className="mt-3 " style={{background:"#004577",border:"none",color:"#ffffff",borderRadius:"10px",height:"35px",width:"150px"}}>Add Holidayplanner</button></a>
                </div>
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_holidayplanner}
              exportToCSV={true}
              //table for holidayplanner
            />
                </Tab>

              </Tabs>
        
            </div>         
          </div>
        </div>
  
  );
}

export default Users;