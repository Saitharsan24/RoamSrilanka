import React from "react";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Dropdown } from "react-bootstrap";

export const data = [
  {
    name: "Jan",
    CompletedTrips: 4000,
    Cancelled: 2400,
    TotalRequets: 3000,
    amt: 2400,
  },
  {
    name: "Feb",
    CompletedTrips: 3000,
    Cancelled: 1398,
    TotalRequets: 3000,
    amt: 2210,
  },
  {
    name: "Mar",
    CompletedTrips: 2000,
    Cancelled: 9800,
    TotalRequets: 3000,
    amt: 2290,
  },
  {
    name: "Apr",
    CompletedTrips: 2780,
    Cancelled: 3908,
    TotalRequets: 3000,
    amt: 2000,
  },
  {
    name: "May",
    CompletedTrips: 1890,
    Cancelled: 4800,
    TotalRequets: 3000,
    amt: 2181,
  },
  {
    name: "June",
    CompletedTrips: 2390,
    Cancelled: 3800,
    TotalRequets: 3000,
    amt: 2500,
  },
  {
    name: "July",
    CompletedTrips: 3490,
    Cancelled: 4300,
    TotalRequets: 3000,
    amt: 2100,
  },
];

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const GuideDashboard = () => {
  return (
    <div className="d-flex flex-column flex-md-column flex-lg-row w-100">
      <div className="d-flex col-lg-9 flex-column align-items-lg-center gap-2">
        <div className="d-flex flex-column flex-md-column flex-lg-row col-12 justify-content-lg-evenly">
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              height: "20rem",
              boxShadow: "0px 40px 60px 0px rgba(86, 89, 146, 0.10)",
            }}
            className="d-flex flex-column col-lg-8 col-md-11 col-11 mt-3 p-3"
          >
            <p
              style={{
                color: "#004577",
                fontFamily: "Barlow",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              My Trips
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={50}
                height={30}
                data={data}
                margin={{
                  top: 15,
                  right: 6,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="CompletedTrips" fill="#DB163A" />
                <Bar dataKey="Cancelled" fill="#004577" />
                <Bar dataKey="TotalRequets" fill="#98A3B2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              height: "20rem",
              boxShadow: "0px 40px 60px 0px rgba(86, 89, 146, 0.10)",
            }}
            className="d-flex flex-column col-lg-3 col-md-11 col-11 mt-3 p-3"
          >
            <p
              style={{
                color: "#004577",
                fontFamily: "Barlow",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Summery View
            </p>
            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <Icon.ClipboardCheck
                className="mb-3"
                style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              />
              <p
                className="fw-bold"
                style={{
                  fontSize: "15px",
                  fontFamily: "Barlow",
                  color: "#333",
                }}
              >
                Pending <br /> requests
              </p>
              <p
                className=""
                style={{
                  color: "#FFF",
                  fontFamily: "Barlow",
                  fontWeight: "bold",
                  fontSize: "40px",
                  backgroundColor: "#DB163A",
                  borderRadius: "5px",
                  width: "60px",
                  textAlignLast: "center",
                }}
              >
                50
              </p>
            </div>
            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <Icon.BuildingFillCheck
                className="mb-3"
                style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              />
              <p
                className="fw-bold"
                style={{
                  fontSize: "15px",
                  fontFamily: "Barlow",
                  color: "#333",
                }}
              >
                Upcoming <br /> trips
              </p>
              <p
                className=""
                style={{
                  color: "#FFF",
                  fontFamily: "Barlow",
                  fontWeight: "bold",
                  fontSize: "40px",
                  backgroundColor: "#DB163A",
                  borderRadius: "5px",
                  width: "60px",
                  textAlignLast: "center",
                }}
              >
                12
              </p>
            </div>
            <div
              style={{ backgroundColor: "#333", borderRadius: "10px" }}
              className="d-flex flex-row p-1 justify-content-evenly align-items-center"
            >
              <Icon.FileBarGraphFill
                style={{ color: "#FFF", fontSize: "50px" }}
              />
              <div className="d-flex flex-column">
                <p
                  className="m-0"
                  style={{
                    color: "#FFF",
                    fontSize: "15px",
                    fontFamily: "Barlow",
                    textAlignLast: "center",
                  }}
                >
                  Total earning
                </p>
                <p className="m-0" style={{ color: "#FFF", fontSize: "35px" }}>
                  $1000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 40px 60px 0px rgba(86, 89, 146, 0.10)",
          }}
          className="d-none d-md-flex d-lg-flex flex-column col-lg-11 col-md-11 col-11 my-2 p-2 p-lg-3 mx-lg-5"
        >
          <div className="d-flex flex-row justify-content-between">
            <p style={{ fontFamily: "Barlow" }}>
              <b>Upcoming Trips</b>
            </p>
            <select
              id="dropdown"
              style={{
                border: "none",
                boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
              }}
            >
              <option value="option1">Monthly</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div style={{ textAlign: "center" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Customer name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Dec 1, 2021</td>
                  <td>Mark</td>
                  <td>Jaffna</td>
                  <td>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
                      }}
                    >
                      <Icon.Dot
                        style={{ color: "#34C759", fontSize: "25px" }}
                      />
                      Confirm
                    </button>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Nov 15, 2021</td>
                  <td>Jacob</td>
                  <td>Colombo</td>
                  <td>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
                      }}
                    >
                      <Icon.Dot
                        style={{ color: "#FF0000", fontSize: "25px" }}
                      />
                      Cancelled
                    </button>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Nov 02, 2021</td>
                  <td>Larry</td>
                  <td>Galle</td>
                  <td>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
                      }}
                    >
                      <Icon.Dot
                        style={{ color: "#34C759", fontSize: "25px" }}
                      />
                      Confirm
                    </button>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Jan 01, 2022</td>
                  <td>Marty</td>
                  <td>Broad</td>
                  <td>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        boxShadow: "0px 2px 10px 0px rgba(124, 141, 181, 0.12)",
                      }}
                    >
                      <Icon.Dot
                        style={{ color: "#FF0000", fontSize: "25px" }}
                      />
                      Cancelled
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex col-lg-3 flex-column align-content-center gap-3">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 40px 60px 0px rgba(86, 89, 146, 0.10)",
          }}
          className="d-flex flex-column col-lg-10 col-md-11 col-11 mt-3 p-4 text-center"
        >
          <p
            style={{
              color: "#004577",
              fontFamily: "Barlow",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Overall Rating
          </p>
          <div
            style={{ backgroundColor: "#025489", borderRadius: "10px" }}
            className="d-flex flex-column align-items-center"
          >
            <p className="m-0" style={{ color: "white", fontSize: "30px" }}>
              4.9
            </p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={28}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p
              className="m-0 my-2"
              style={{
                fontFamily: "Cabin",
                color: "white",
                fontSize: "15px",
              }}
            >
              1,580 Ratings
            </p>
          </div>
          <div className="d-flex flex-column mt-3 gap-1">
            <div className="d-flex flex-row justify-content-evenly">
              <p className="m-0" style={{ fontSize: "15px" }}>
                5
              </p>
              <Icon.StarFill
                className="my-1"
                size={15}
                style={{ color: "#FFC00C" }}
              />
              <div class="progress col-8 my-1">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="m-0" style={{ fontSize: "15px" }}>
                80
              </p>
            </div>
            <div className="d-flex flex-row justify-content-evenly ">
              <p className="m-0" style={{ fontSize: "15px" }}>
                4
              </p>
              <Icon.StarFill
                className="my-1"
                size={15}
                style={{ color: "#FFC00C" }}
              />
              <div class="progress col-8 my-1">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="m-0" style={{ fontSize: "15px" }}>
                60
              </p>
            </div>
            <div className="d-flex flex-row justify-content-evenly">
              <p className="m-0" style={{ fontSize: "15px" }}>
                3
              </p>
              <Icon.StarFill
                className="my-1"
                size={15}
                style={{ color: "#FFC00C" }}
              />
              <div class="progress col-8 my-1">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="m-0" style={{ fontSize: "15px" }}>
                50
              </p>
            </div>
            <div className="d-flex flex-row justify-content-evenly">
              <p className="m-0" style={{ fontSize: "15px" }}>
                2
              </p>
              <Icon.StarFill
                className="my-1"
                size={15}
                style={{ color: "#FFC00C" }}
              />
              <div class="progress col-8 my-1">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "35%" }}
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="m-0" style={{ fontSize: "15px" }}>
                40
              </p>
            </div>
            <div className="d-flex flex-row justify-content-evenly">
              <p className="m-0" style={{ fontSize: "15px" }}>
                1
              </p>
              <Icon.StarFill
                className="my-1"
                size={15}
                style={{ color: "#FFC00C" }}
              />
              <div class="progress col-8 my-1">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="m-0" style={{ fontSize: "15px" }}>
                20
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 40px 60px 0px rgba(86, 89, 146, 0.10)",
          }}
          className="d-flex flex-column col-lg-10 col-md-11 col-11 text-center"
        >
          <p
            className="m-0"
            style={{
              fontSize: "30px",
              fontFamily: "Barlow",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#004577" }}>MONTH :</span>
            <span style={{ color: "#DB163A" }}>JULY</span>
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "24px",
              fontFamily: "Barlow",
              fontWeight: "bold",
              color: "#004577",
            }}
          >
            Trips completed
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "48px",
              fontFamily: "Barlow",
              fontWeight: "bold",
              color: "#DB163A",
            }}
          >
            25
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "24px",
              fontFamily: "Barlow",
              fontWeight: "bold",
              color: "#004577",
            }}
          >
            Monthly Income
          </p>
          <p
            className="m-0"
            style={{
              fontSize: "48px",
              fontFamily: "Barlow",
              fontWeight: "bold",
              color: "#DB163A",
            }}
          >
            $ 20.00
          </p>
        </div>
      </div>
    </div>
  );
};
export default GuideDashboard;
