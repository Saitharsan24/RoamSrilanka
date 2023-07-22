import React from "react";
import "./../styles/hotelrequest.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import HotelSidebar from "../components/hotel-sidebar";
import Headeruser from "../components/headerusers";

function HotelRequest() {
  return (
    <div className="main d-flex flex-column">
        <Headeruser />
        <div className="d-flex">
        <HotelSidebar />
      <div className="col-10 p-5 d-flex flex-column">
        <h1 className="req-h1">All Requests</h1>
        <div className="search-bar d-flex mx-5 rounded">
          <div className="d-flex bg-white search">
            <button className="button">
              <BsSearch style={{ color: "#7E7E7E" }} />
            </button>
            <input className="input" placeholder="Search" />
          </div>
        </div>

        <div className="d-flex flex-column">
          <Table className="p-5">
            <thead className="table-thead">
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
                <td >Jane Cooper</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>Feb 12 - Feb 14</td>
                <td className="col-1 justify-content-center align-items-center">
                  <Button className="btn-acc px-5">Accept</Button>
                </td>
                <td className="col-1 justify-content-center align-items-center">
                  <Button className="btn-rej px-5">Reject</Button>
                </td>
              </tr>
              {/* <tr>
                <td>Jane Cooper</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>Feb 12 - Feb 14</td>
                <td className="col-1 justify-content-center align-items-center">
                  <Button className="btn-acc px-5">Accept</Button>
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
                <td className="col-1 justify-content-center align-items-center">
                  <Button className="btn-acc px-5">Accept</Button>
                </td>
                <td className="col-1 justify-content-center align-items-center">
                  <Button className="btn-rej px-5">Reject</Button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </div>

        <div className="d-flex flex-column">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#">«</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">4</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">5</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">»</a>
            </li>
          </ul>
          </div>
      </div>
    </div>
    </div>
  );
}

export default HotelRequest;