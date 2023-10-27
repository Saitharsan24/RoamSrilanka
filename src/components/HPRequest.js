import React, { useState,useEffect } from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from 'mdbreact';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HPDatatablePage = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [packages, setPackage] = useState([]);
  const [tourist, setTourist] = useState([]);
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const handleRowClick = (p_bookingID) => {
    console.log("p_bookingID", p_bookingID);
    navigate(`/holidayPlanner/hprequestdetail/${p_bookingID}`)
  }

  const mergeData = (rowData, packages,tourist) => {
    const mergedData = rowData.map(
      (requestItem) => {
      const matchingPackage = packages.find(
        (packageItem) => packageItem.packageID === requestItem.packageID
      );

      const matchingTourist = tourist.find(
        
        (touristItem) => touristItem.userID === requestItem.touristID
      );
      console.log(tourist);
  
      if (matchingPackage && matchingTourist) {
        // Merge the data from both sources
        return {
          ...requestItem,
          ...matchingPackage,
          ...matchingTourist,
        };
      } else {
        return requestItem;
      }
    });
  
    return mergedData;
  };
  
  useEffect(() => {
    axiosInstance
      .get("/request")
      .then((res) => {
        setRowData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    axiosInstance
      .get("/packages")
      .then((res) => {
        setPackage(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/tourist")
      .then((res) => {
        setTourist(res.data);
        // console.log("tourist details",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  
  const mergedData = mergeData(rowData, packages,tourist);
  console.log("mergeData", mergedData);
  

  const data = {
    columns: [
      {
        label: 'Tourist Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Package Name',
        field: 'package_name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'From Date',
        field: 'from',
        sort: 'asc',
        width: 200
      },
      {
        label: 'To Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Show Details',
        field: 'button1',
        width: 50,
        btn: 'hp-accept-button',
      }
    ],
    rows: mergedData.map((item) => ({
      name: item.name,
      package_name: item.package_name,
      from: item.fromdate,
      date: item.todate,
      button1: <button
      className="hp-accept"
      onClick={() => handleRowClick(item.p_bookingID) & console.log("Clicked View for booking ID:", item.p_bookingID)}
    >View</button>,
    })),
  };

  return (
    <MDBDataTable
      striped
      bordered
    //   small
      data={data}
    />
  );
}

export default HPDatatablePage;