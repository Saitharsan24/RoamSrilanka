import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function getStatusText(status) {
  switch (status) {
    case 0:
      return { text: "Pending", color: "orange" };
    case 1:
      return { text: "Ongoing", color: "blue" };
    case 2:
      return { text: "Completed", color: "green" };
    case 3:
      return { text: "Rejected", color: "red" };
    default:
      return { text: "Unknown", color: "black" };
  }
}
function HPTrip() {
  const navigate = useNavigate();
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });
  
  const handleRowClick = (p_bookingID) => {
    console.log("p_bookingID", p_bookingID);
    navigate(`/holidayPlanner/hprequestdetail/${p_bookingID}`);
  }

  const [user, setUser] = useState([]);
  const [request, setRequest] = useState([]);
  
  useEffect(() => {
    axiosInstance
      .get("/request")
      .then((res) => {
        setRequest(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => {
        setUser(res.data);
         console.log("user details",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mergeData2 = (request, user) => {
    const mergedData2 = request.map(
      (requestitem) => {
      const matchingUser = user.find(
        (userItem) =>  userItem.userId === requestitem.touristID
      );
      
      if (matchingUser) {
        // Merge the data from both sources
        return {
          ...requestitem,
          ...matchingUser,
        };
      } else {
        return requestitem;
      }
    });
  
    return mergedData2;
  };

  const mergedUserRequest = mergeData2(request, user);
  console.log("mergeData", mergedUserRequest);

  

  const data = {
    columns: [
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "From Date",
        field: "fromdate",
        sort: "asc",
        width: 150,
      },
      {
        label: "To Date",
        field: "todate",
        sort: "asc",
        width: 200,
      },
      {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100,
    },
      
      {
        label: "",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
    rows: mergedUserRequest.map((item) => ({
      name: item.userFullname,
      fromdate: item.fromdate,
      todate: item.todate,
      status: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: getStatusText(item.status).color,
              marginRight: "8px",
            }}
          ></div>
          {getStatusText(item.status).text}
        </div>
      ),
      btn: [
        <>
          <div className="view-trip" onClick={() => handleRowClick(item.p_bookingID) & console.log("Clicked View for booking ID:", item.p_bookingID)}><a style={{color:"inherit"}} >View Trip</a></div>
        </>,
      ],
    })),
  };

  


  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
        <div className="d-flex flex-row gap-4 my-3">
          <p
            style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
            className="ms-1 m-0"
          >
            <b>My Trip</b>
          </p>
        </div>
        <MDBDataTable
          striped
          bordered
          paging={true}
          searching={true}
          //   small
          data={data}
          exportToCSV={true}
        />
      </div>
    </div>
  );
}


export default HPTrip;
