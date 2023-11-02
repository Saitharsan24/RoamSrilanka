import React, { useState,useEffect } from 'react';
import "./../styles/data-table.css";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const HPDatatablePage = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const [packages, setPackage] = useState([]);
  const [tourist, setTourist] = useState([]);
  const [fairrequest, setFairrequest] = useState([]);
  const [fair, setFair] = useState([]);
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const handleRowClick = (p_bookingID) => {
    console.log("p_bookingID", p_bookingID);
    navigate(`/holidayPlanner/hprequestdetail/${p_bookingID}`)
  }

  const handleRowClick1 = (fairrequestID) => {
    console.log("fairrequestID", fairrequestID);
    navigate(`/holidayPlanner/hpfairdetail/${fairrequestID}`)
  }

  const mergeData = (rowData, packages,tourist) => {
    const mergedData = rowData.map(
      (requestItem) => {
        const newstatus2 = requestItem.status;
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
          newstatus2:newstatus2,
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
         console.log("package",res.data);
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
         console.log("tourist details",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/getAllFairrequest")
      .then((res) => {
        setFairrequest(res.data);
         console.log("fair request details",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/getAllFairs")
      .then((res) => {
        setFair(res.data);
         console.log("fair details",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  const mergedData = mergeData(rowData, packages,tourist);

  const filteredPackageData = mergedData.filter((item)=>item.newstatus2 == 0)

  console.log("rowData", rowData);
  console.log("packages", packages);
  console.log("tourist", tourist);
  console.log("mergeData", mergedData);

  const mergeData2 = (fairrequest, fair,tourist) => {
    const mergedData2 = fairrequest.map(
      (requestItem2) => {
        const newStatus = requestItem2.status;
      const matchingfair = fair.find(
        (fairItem) =>  fairItem.fairId === requestItem2.fair_no 
      );

      const matchingTourist2 = tourist.find(
        
        (touristItem2) => touristItem2.userID === requestItem2.touristID
      );
      console.log(tourist);
  
      if (matchingfair && matchingTourist2) {
        // Merge the data from both sources
        return {
          ...requestItem2,
          ...matchingfair,
          ...matchingTourist2,
          newStatus:newStatus,
        };
      } else {
        return requestItem2;
      }
    });
  
    return mergedData2;
  };

  const mergedData_fair = mergeData2(fairrequest, fair,tourist);

  const filteredFairData = mergedData_fair.filter((item) => item.newStatus == 0);
  

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
      // {
      //   label: 'To Date',
      //   field: 'date',
      //   sort: 'asc',
      //   width: 150
      // },
      {
        label: "Show Details",
        field: "button1",
        width: 50,
        btn: 'hp-accept-button',
      }
    ],
    rows: filteredPackageData.map((item) => ({
      name: item.name,
      package_name: item.package_name,
      from: item.fromdate,
      // date: item.todate,
      button1: <button
      className="hp-accept"
      onClick={() => handleRowClick(item.p_bookingID) & console.log("Clicked View for booking ID:", item.p_bookingID)}
    >View</button>,
    })),
  };

  const data_fair = {
    columns: [
      {
        label: "Tourist Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Fair Name",
        field: "fair_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "From Date",
        field: "from",
        sort: "asc",
        width: 200,
      },
      {
        label: "To Date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Show Details",
        field: "button1",
        width: 50,
        btn: "hp-accept-button",
      },
    ],
    rows: filteredFairData.map((item) => ({
      name: item.name,
      fair_name: item.fairname,
      from: item.fromdate,
      date: item.todate,
      button1: (
        <button
          className="hp-accept"
          onClick={() => handleRowClick1(item.fairrequestID) & console.log("Clicked View for booking ID:", item.fairrequestID)}
        >
          View
        </button>
      ),
    })),
  }

  return (
    <div className="user-1 d-flex w-100">
      <div className="d-flex flex-column col-lg-11 ms-lg-5">
        <div className="d-flex flex-column gap-4 my-3">
          <Tabs>
            <Tab eventKey="package" title="Package">
              <MDBDataTable
                striped
                bordered
                paging={true}
                searching={true}
                data={data}
                exportToCSV={true}
              />
            </Tab>

            <Tab eventKey="fair" title="Fair">
              <MDBDataTable
                striped
                bordered
                paging={true}
                searching={true}
                data={data_fair}
                exportToCSV={true}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HPDatatablePage;
