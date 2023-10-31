import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { MDBDataTable } from "mdbreact";

function HPFeedback() {
  const apiBaseUrl = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
  });

  const data = {
    columns: [
      {
        label: "Package Name",
        field: "Package_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Feedback",
        field: "feedback",
        sort: "asc",
        width: 300,
      },
    ],
  };

  // Custom CSS for column label size
  const customStyle = `
    .mdb-datatable thead th {
      font-size: 1.2rem;
      color: white;
    }
  `;

  return (
    <div className="d-flex w-100">
      <div className="d-flex flex-column col-lg-12 p-4 ">
        <style>{customStyle}</style>
        <div>
          <p
            style={{ fontFamily: "Poppins", fontSize: "1.5rem" }}
            className="ms-5 m-0"
          >
            <b>Feedback</b>
          </p>
          <MDBDataTable
            striped
            bordered
            //   small
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default HPFeedback;
