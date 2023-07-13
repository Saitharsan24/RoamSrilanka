import "./../styles/footer.css";

import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="p-3 pt-4 ">
          <div className="d-flex container footer-flex justify-content-evenly">
            <div className="footer-asst" style={{width:"27%"}} >
              <img
                style={{ width: "200px", height: "100px" }}
                src={require("./../assets/img/logo.png")}
                alt=""
              />
              <p className="para text-white m-2">
                4517 Washington Ave. Manchester, Kentucky 39495.
              </p>
              <div className="d-flex flex-row gap-4 py-4 px-2">
                <Icon.Facebook color="white" />
                <Icon.Twitter color="white" />
                <Icon.Linkedin color="white" />
                <Icon.Instagram color="white" />
              </div>
            </div>
            <div className="pages column-gap-5">
              <ul className="list-group ml">
                <li className="list-group-item list-group-item-head text-white fw-bold">
                  Pages
                </li>
                <li className="list-group-item text-white">About Us</li>
                <li className="list-group-item text-white">Features</li>
                <li className="list-group-item text-white">News</li>
                <li className="list-group-item text-white">Plans</li>
              </ul>
            </div>
            <div className="services">
              <ul className="list-group">
                <li className="list-group-item list-group-item-head text-white fw-bold">
                  Services
                </li>
                <li className="list-group-item text-white">Why Tripy</li>
                <li className="list-group-item text-white">Partner with us</li>
                <li className="list-group-item text-white">FAQ</li>
                <li className="list-group-item text-white">Blog</li>
              </ul>
            </div>
            <div className="contact">
              <ul className="list-group">
                <li className="list-group-item list-group-item-head text-white fw-bold">
                  Contact
                </li>
                <div className="d-flex flex-row">
                  <Icon.Telephone
                    color="white"
                    size={25}
                    className="mt-3 border rounded-1 p-1"
                  ></Icon.Telephone>
                  <li
                    style={{ fontSize: "12px" }}
                    className="list-group-item text-white para-2 tex"
                  >
                    <div className="d-flex flex-column">
                      <p>
                        Drop a line <br /> <b>+123 456 789</b>
                      </p>{" "}
                    </div>
                  </li>
                </div>
                <div className="d-flex flex-row">
                  <Icon.Envelope
                    color="white"
                    size={25}
                    className="mt-3 border rounded-1 p-1"
                  ></Icon.Envelope>
                  <li
                    style={{ fontSize: "12px" }}
                    className="list-group-item text-white"
                  >
                    <p>
                      Email Address <br /> <b>cappadociaTour@gmail.com</b>
                    </p>
                  </li>
                </div>
                <div className="d-flex flex-row">
                  <Icon.GeoAlt
                    color="white"
                    size={25}
                    className="mt-3 border rounded-1 p-1"
                  ></Icon.GeoAlt>
                  <li
                    style={{ fontSize: "12px" }}
                    className="list-group-item text-white"
                  >
                    <p>
                      Visit Office <br /> <b>Hakim Muzaffer Arer Sk., 50650</b>
                    </p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-white text-center footer-para">
          Copyright © Roam Sri Lanka | Designed by group 47{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
