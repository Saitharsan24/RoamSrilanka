import React from "react";
import "./../styles/hotelrequest.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Hotelrequest() {
  return (
    <div className="p-5 main">
      <div>
        <h1>All Requests</h1>
        <div class="search-bar d-flex me-5 rounded main">
          <div className="d-flex bg-white search">
            <button className="button">
              <BsSearch style={{ color: "#7E7E7E" }} />
            </button>
            <input className="input" placeholder="Search" />
          </div>
        </div>

        <div className="table-responsive">
          <Table className="p-5">
            <thead className="">
              <tr>
                <th>Tourist Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>Feb 12 - Feb 14</td>
                <td className="col-1 justify-content-center align-items-center"><Button className="btn-acc px-5">Accept</Button>
                  </td>
                  <td className="col-1 justify-content-center align-items-center">
                    <Button className="btn-rej px-5">Reject</Button>
                  </td>
              </tr>
              <tr>
                <td>Jane Cooper</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>Feb 12 - Feb 14</td>
                <div className="d-flex justify-content-center align-items-center">
                  <td>
                    <Button className="btn-acc px-5">Accept</Button>
                  </td>
                  <td>
                    <Button className="btn-rej px-5">Reject</Button>
                  </td>
                </div>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Hotelrequest;

// npm install react-icons
