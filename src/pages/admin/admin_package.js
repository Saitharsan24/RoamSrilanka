import React from "react";
import "../../styles/admin/admin_package.css";
import { MDBDataTable } from "mdbreact";


function AdminPackage() {
  
    const data_package = {
        columns: [
          {
            label: "Package Id",
            field: "id",
            sort: "asc",
            width: 150,
          },
          {
            label: "Package name",
            field: "name",
            sort: "asc",
            width: 150,
          },
          {
            label: "Package Type",
            field: "type",
            sort: "asc",
            width: 150,
          },
          {
            label: "Guide Status",
            field: "G_status",
            sort: "asc",
            width: 200,
          },
          {
            label: "Transport Status",
            field: "T_status",
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
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status:[<><div className="include fw-bold">Included</div></>],
            btn: [
              <>
               <a href="/admin/admintouristdetail"> <button className="view-detail" >View detail</button></a>
              </>,
            ],
          }, 
          {
            id: "002",
            name: "Jane Smith",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="include fw-bold">Included</div></>],
            btn: [
              <>
                <div className="view-detail ">View detail</div>
              </>,
            ],
          },
          {
            id: "003",
            name: "Ella Brown",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "004",
            name: "William Davis",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="include fw-bold">Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "005",
            name: "Sophia Wilson",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="not-include fw-bold">Not Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "006",
            name: "Sarah Martinez",
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="not-include fw-bold">Not Included</div></>],
            T_status:  [<><div className="include fw-bold">Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "007",
            name: "Oliver Taylor",
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "008",
            name: "Ava Martinez",
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "009",
            name: "Ethan Thompson",
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "010",
            name: "Ava Martinez",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "011",
            name: "Sophia Wilson",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "012",
            name: "Matthew Taylor",
            type:[<><div className="amount fw-bold">Amount Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
          {
            id: "013",
            name: "Christopher Davis",
            type:[<><div className="day fw-bold">Days Base</div></>],
            G_status: [<><div className="include fw-bold">Included</div></>],
            T_status: [<><div className="not-include fw-bold">Not Included</div></>],
            btn: [
              <>
                <div className="view-detail">View detail</div>
              </>,
            ],
          },
        
        ],
      };



  return (
    <React.Fragment>
        <div className="d-flex w-100">
        <div className="d-flex flex-column col-lg-11 ms-lg-5">
            <div className="d-flex flex-column gap-4 my-3">
                <MDBDataTable
              striped
              bordered
              paging={true}
              searching={true}
              data={data_package}
              exportToCSV={true}
              //table for tourist
            />
             </div>         
          </div>
            </div>
    </React.Fragment>
  );
}

export default AdminPackage;

