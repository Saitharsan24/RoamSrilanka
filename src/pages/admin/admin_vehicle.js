import React from "react";
import "../../styles/admin/admin_package.css";
import { MDBDataTable } from "mdbreact";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AdminVehicle() {

  const [vehicles, setVehicle] = useState([]);

  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
   baseURL: apiBaseUrl,
   timeout: 5000,
  });

  const filteredvehicles = (status) => vehicles.filter((vehicle) => vehicle.status === status);
 
  useEffect(() => {
    // Make an HTTP GET request to fetch data from the API
    axiosInstance.get("http://localhost:8080/vehicle").then((response) => {
      setVehicle(response.data);
      console.log(response.data);
      
    });
  }, []);

  function getStatusText(status) {
    if (status == null) {
      return <div style={{color:"#d0c96e",fontWeight:"bolder"}}>Pending</div>;
    } else if (status== 0) {
      return <div style={{color:"#d03b3b",fontWeight:"bolder"}}>Rejected</div>;
    } else if (status == 1) {
      return <div style={{color:"#66d03b",fontWeight:"bolder"}}>Accepted</div>;
    } else {
      return "Unknown";
    }
  }

  const data_all = {
    columns: [
      {
        label: "Vehicle ID",
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
        label: "Seating Capacity",
        field: "seat",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Vehicle detail",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],

    rows :vehicles.map((vehicle) => ({
      id: vehicle.vehicleID, //  API response has a field named 'id' for Tourist ID
      name: vehicle.year, //  API response has a field named 'touristName' for Tourist Name
      seat: vehicle.seats, //  API response has a field named 'nationality' for Nationality
      status: getStatusText(vehicle.status),

      btn: [
        <>
         <Link to={`/admin/adminvehicledetail_1?vehicleId=${vehicle.vehicleID}`}>
         <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
  })),
  };


  const data_request = {
    columns: [
      {
        label: "Vehicle ID",
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
        label: "Seating Capacity",
        field: "seat",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Vehicle detail",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],

    rows :filteredvehicles(null).map((vehicle) => ({
      id: vehicle.vehicleID, //  API response has a field named 'id' for Tourist ID
      name: vehicle.year, //  API response has a field named 'touristName' for Tourist Name
      seat: vehicle.seats, //  API response has a field named 'nationality' for Nationality
      status: getStatusText(vehicle.status),

      btn: [
        <>
         <Link to={`/admin/adminvehicledetail_1?vehicleId=${vehicle.vehicleID}`}>
         <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
  })),
   };


  const data_confirmed = {
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
        width: 150,
      },
      {
        label: "Package Type",
        field: "type",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Package detail",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
    rows :filteredvehicles("1").map((vehicle) => ({
      id: vehicle.vehicleID, //  API response has a field named 'id' for Tourist ID
      name: vehicle.year, //  API response has a field named 'touristName' for Tourist Name
      seat: vehicle.seats, //  API response has a field named 'nationality' for Nationality
      status: getStatusText(vehicle.status),

      btn: [
        <>
         <Link to={`/admin/adminvehicledetail_1?vehicleId=${vehicle.vehicleID}`}>
         <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
  })),
  
  };

  const data_rejected = {
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
        width: 150,
      },
      {
        label: "Package Type",
        field: "type",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 200,
      },
     
      {
        label: "Package detail",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
   
    rows :filteredvehicles("0").map((vehicle) => ({
      id: vehicle.vehicleID, //  API response has a field named 'id' for Tourist ID
      name: vehicle.year, //  API response has a field named 'touristName' for Tourist Name
      seat: vehicle.seats, //  API response has a field named 'nationality' for Nationality
      status: getStatusText(vehicle.status),

      btn: [
        <>
         <Link to={`/admin/adminvehicledetail_1?vehicleId=${vehicle.vehicleID}`}>
         <button className="view-detail">View detail</button>
          </Link>
        </>,
      ],
  })),
  };

  return (
    
        <div className="blog-1 d-flex w-100">
          <div className="d-flex flex-column col-lg-11 ms-lg-5">
            <div className="d-flex flex-column gap-4 my-3">
            
            <Tabs id="uncontrolled-tab-example">
                  <Tab eventKey="all" title="All">
                      <MDBDataTable
                      striped
                      bordered
                      paging={true}
                      searching={true}
                      data={data_all}
                      exportToCSV={true}
                      //table for all
                      />
                  </Tab>
                  <Tab eventKey="request" title="Request">
                  <MDBDataTable
                        striped
                        bordered
                        paging={true}
                        searching={true}
                        data={data_request}
                        exportToCSV={true}
                        //table for tourist
                       />
                  </Tab>

                  <Tab eventKey="confirmed" title="Confirmed">
                  <MDBDataTable
                      striped
                      bordered
                      paging={true}
                      searching={true}
                      data={data_confirmed}
                      exportToCSV={true}
                      //table for tourist
                    /> 
                  </Tab>

                  <Tab eventKey="rejected" title="Rejected">
                      <MDBDataTable
                      striped
                      bordered
                      paging={true}
                      searching={true}
                      data={data_rejected}
                      exportToCSV={true}
                      //table for tourist
                     /> 
                  </Tab>

            </Tabs>
             
            </div>     
          </div>
        </div>
     
  );
     
}

export default AdminVehicle;

