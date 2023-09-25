import React, { useState, useEffect } from "react";
import "./../styles/data-table.css";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HPViewpackage from "../pages/holiday-planner/HPViewPackage";


const HPDatatablePage = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const filteredRequests = rowData.filter((packages) => packages.status == 1);

  const handleRowClick = (packageID) => {
    navigate(`/holidayPlanner/plannerViewPackage/${packageID}`);
  }

  const deletePackage = (id) => {
    console.log("id", id);
    axiosInstance
      .delete(`/packages/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Package deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosInstance
      .get("/packages")
      .then((res) => {
        setRowData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = {
    columns: [
      {
        label: "Package Name",
        field: "Package_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Places",
        field: "places",
        sort: "asc",
        width: 200,
      },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
        width: 50,
      },
      {
        label: "Days",
        field: "day",
        sort: "asc",
        width: 150,
      },
      {
        label: "View",
        field: "button1",
        width: 50,
        btn: "hp-accept-button",
      },
      {
        label: "Remove",
        field: "button2",
        width: 50,
        btn: "hp-reject-button",
      },
    ],
    rows: filteredRequests.map((item) => {
      return {
        
        Package_name: item.package_name,
        places: item.places,
        amount: item.price,
        day: item.days,
        button1: (
          <button
            className="hp-accept"
            onClick={() => handleRowClick(item.packageID) & console.log("Clicked View for package ID:", item.packageID)}
          >
          
            View
          </button>
          
        ),
        button2: (
          <button
            className="hp-reject"
            onClick={() => {
              console.log("Clicked Remove for package ID:", item.packageID); // Check this line

              deletePackage(item.packageID);
            }}
          >
            Remove
          </button>
        ),
      };
    }),
  };

  return (
    <MDBDataTable
      striped
      bordered
      //   small
      data={data}
    />
  );
};

export default HPDatatablePage;
