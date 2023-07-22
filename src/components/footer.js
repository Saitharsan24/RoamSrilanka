import "./../styles/footer.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="d-flex flex-row container gap-3 justify-content-evenly p-3">
          <div className="">
            <img
              style={{ width: "45%", height: "5rem", objectFit: "cover" }}
              src={require("./../assets/images/footerlogo.png")}
              alt=""
            />
            <p style={{ width: "60%" }} className="text-white m-2">
              4517 Washington Ave. Manchester, Kentucky 39495.
            </p>
            <div className="d-flex flex-row gap-4 py-4 px-2">
              <Icon.Facebook color="white" />
              <Icon.Twitter color="white" />
              <Icon.Linkedin color="white" />
              <Icon.Instagram color="white" />
            </div>
          </div>
          <div className="d-flex flex-column gap-3">
            <li className="text-white fw-bold">Pages</li>
            <li className="text-white">About Us</li>
            <li className="text-white">Features</li>
            <li className="text-white">News</li>
            <li className="text-white">Plans</li>
          </div>
          <div className="d-flex flex-column gap-3">
            <li className="text-white fw-bold">Services</li>
            <li className="text-white">Why Tripy</li>
            <li className="text-white">Partner with us</li>
            <li className="text-white">FAQ</li>
            <li className="text-white">Blog</li>
          </div>
          <div className="d-flex flex-column gap-4">
            <li className="text-white fw-bold">Contact</li>
            <div className="d-flex flex-row gap-3">
              <Icon.Telephone
                color="white"
                size={25}
                className="mt-2 border rounded-1 p-1"
              ></Icon.Telephone>
              <li
                style={{ fontSize: "12px" }}
                className="text-white para-2 tex"
              >
                <div className="d-flex flex-column gap-1">
                  Drop a line
                  <b>+123 456 789</b>
                </div>
              </li>
            </div>
            <div className="d-flex flex-row gap-3">
              <Icon.Envelope
                color="white"
                size={25}
                className="mt-2 border rounded-1 p-1"
              ></Icon.Envelope>
              <li style={{ fontSize: "12px" }} className="text-white">
                <div className="d-flex flex-column gap-1">
                  Email Address
                  <b>cappadociaTour@gmail.com</b>
                </div>
              </li>
            </div>
            <div className="d-flex flex-row gap-3">
              <Icon.GeoAlt
                color="white"
                size={25}
                className="mt-2 border rounded-1 p-1"
              ></Icon.GeoAlt>
              <li style={{ fontSize: "12px" }} className="text-white">
                <div className="d-flex flex-column gap-1">
                  Visit Office
                  <b>Hakim Muzaffer Arer Sk., 50650</b>
                </div>
              </li>
            </div>
          </div>
        </div>

        <p className="text-white text-center footer-para">
          Copyright © Roam Sri Lanka | Designed by group 47
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
