import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import "./../../styles/data-table.css";

function DriverTrips() {

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
            field: "Fromdate",
            sort: "asc",
            width: 150,
          },
          {
            label: "To Date",
            field: "Todate",
            sort: "asc",
            width: 150,
          },
          {
            label: "Destination",
            field: "endPlace",
            sort: "asc",
            width: 250,
          },
          {
            label: "Status",
            field: "status",
            sort: "asc",
            width: 250,
          },
        ],
        rows: [
          {
            name: "John Doe",
            Fromdate: "2023-07-01",
            Todate: "2023-08-01",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Robert Johnson",
            Fromdate: "2023-07-02",
            Todate: "2023-08-02",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Jane Smith",
            Fromdate: "2023-07-03",
            Todate: "2023-08-03",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Ella Brown",
            Fromdate: "2023-07-04",
            Todate: "2023-08-04",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "William Davis",
            Fromdate: "2023-07-05",
            Todate: "2023-08-05",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Sophia Wilson",
            Fromdate: "2023-07-06",
            Todate: "2023-08-06",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Oliver Taylor",
            Fromdate: "2023-07-07",
            Todate: "2023-08-01",
            endPlace: "Gampola",
            status: "Up Comping",
          },
          {
            name: "Ava Martinez",
            Fromdate: "2023-07-08",
            Todate: "2023-08-01",
            endPlace: "Gampola",
            status: "Up Comping",
          },
        ],
    };

    const [showtab , setShowTab] = useState(1);
    const handletab = (e) => {
        setShowTab(e);
    }

    return (
        <div className="d-flex w-100">
            <div className="d-flex flex-column col-lg-11 ms-lg-5 col-md-12">
                <div className="d-flex flex-row gap-4 my-3">
                <p
                    style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
                    className="ms-1 m-0">
                    
                    <b>My All Trips</b>
                </p>
                </div>
                <div className="d-flex flex-row gap-4 my-3 ">
                    <ul className="nav nav-pills mb-3 mt-1" id="pillstab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 1 ? "nav-link active": "nav-link"} onClick={() => handletab(1)}>Upcoming Trips</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 2 ? "nav-link active": "nav-link"} onClick={() => handletab(2)}>Ongoing Trips</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={showtab === 3 ? "nav-link active": "nav-link"} onClick={() => handletab(3)}>Finished Trips</button>
                        </li>
                    </ul>
                </div>

                <div className="tab-content text-dark" id="pills-tabContent">
                    <div className={showtab === 1 ? "tab-pane fade show active": "tab-pane fade show"}>
                        <MDBDataTable
                            striped
                            bordered
                            paging={true}
                            searching={true}
                            //   small
                            data={{
                                ...data,
                                rows: data.rows.map((row) => {
                                return {
                                    ...row,
                                };
                                }),
                            }}
                            exportToCSV={true}
                        />
                    </div>
                    <div className={showtab === 2 ? "tab-pane fade show active": "tab-pane fade show"}>
                        <p>Ongoing</p>
                    </div>
                    <div className={showtab === 3 ? "tab-pane fade show active": "tab-pane fade show"}>
                        <p>Finished</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverTrips;