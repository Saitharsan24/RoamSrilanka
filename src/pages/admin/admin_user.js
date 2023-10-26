import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MDBDataTable } from "mdbreact";
import "../../styles/admin/admin_user.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";



function Users() {

  const [holidayPlanners, setHolidayPlanners] = useState([]);
  const [tourists, setTourists] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [userdetail, setuserdetail] = useState([]);

  
  const apiBaseUrl = "http://localhost:8080";

   const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
   });
 
   
   
  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axiosInstance.get("http://localhost:8080/viewHolidayplanner").then((response) => {
      setHolidayPlanners(response.data);
      // console.log(response.data)
    });

    axiosInstance.get("http://localhost:8080/viewTourist").then((response) => {
      setTourists(response.data);
      // console.log(response.data)
  });
   
  axiosInstance.get("http://localhost:8080/users").then((response) => {
    setuserdetail(response.data);
    console.log(response.data)
     });
  }, []);

  axiosInstance.get("http://localhost:8080/viewDriver").then((response) => {
    setDrivers(response.data);
    // console.log(response.data)
});


  
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
        label: "Nationality",
        field: "national",
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
      national: tourist.country, //  API response has a field named 'nationality' for Nationality
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
    ],
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        rate: "4.2",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        rate: "4.0",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        rate: "4.9",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        rate: "4.6",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
    
    ],
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
        label: "Rating",
        field: "rate",
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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail" >View detail</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        address: "Annasliyady,Karavanavai,Karaveddy",
        rate: "4.7",
        btn: [
          <>
            <div className="view-detail">View detail</div>
          </>,
        ],
      },
    
    ],
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
                <a href="#">  <button className="mt-3 " style={{background:"#004577",border:"none",color:"#ffffff",borderRadius:"10px",height:"35px",width:"150px"}}>Add Driver</button></a>
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