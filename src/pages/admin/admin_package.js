import React from "react";
import "../../styles/admin/admin_package.css";
import { MDBDataTable } from "mdbreact";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


function AdminPackage() {
  const data_all = {
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
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request ">Request</div></>],
        btn: [
          <>
           <a href="/admin/adminpackageaccept"> <button className="view-detail" >View Blog</button></a>
          </>,
        ],
      },
      {
        id: "002",
        name: "Jane Smith",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "003",
        name: "Ella Brown",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "004",
        name: "William Davis",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "006",
        name: "Sarah Martinez",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "008",
        name: "Ava Martinez",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "010",
        name: "Ava Martinez",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "012",
        name: "Matthew Taylor",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
    
    ],
  };


  const data_request = {
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
        label: "Package Detail",
        field: "btn",
        width: 100,
        btn: "view-button",
      },
    ],
    rows: [
      {
        id: "001",
        name: "Robert Johnson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
           <a href="/admin/admin_tourist_detail"> <button className="view-detail" >View Blog</button></a>
          </>,
        ],
      },
      
      {
        id: "004",
        name: "William Davis",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "005",
        name: "Sophia Wilson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
     
      {
        id: "010",
        name: "Ava Martinez",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "011",
        name: "Sophia Wilson",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="request">Request</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
    
    ],
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
    rows: [
  
      {
        id: "002",
        name: "Jane Smith",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
    
      
      {
        id: "006",
        name: "Sarah Martinez",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "007",
        name: "Oliver Taylor",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      
            {
        id: "012",
        name: "Matthew Taylor",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "013",
        name: "Christopher Davis",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="confirm">Confirmed</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
    
    ],
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
    rows: [
     
  
      {
        id: "003",
        name: "Ella Brown",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
     
      {
        id: "008",
        name: "Ava Martinez",
        type: [<><div className="amount fw-bold">Amount Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
      {
        id: "009",
        name: "Ethan Thompson",
        type: [<><div className="day fw-bold">Day Base</div></>],
        status:[<><div className="reject">Rejected</div></>],
        btn: [
          <>
            <div className="view-detail">View Blog</div>
          </>,
        ],
      },
     
    ],
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

export default AdminPackage;

