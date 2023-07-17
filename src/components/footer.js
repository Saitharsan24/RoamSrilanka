import "./../styles/footer.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="d-flex flex-column flex-md-row flex-lg-row gap-3 justify-content-evenly p-3">
          <div className="d-flex flex-column align-items-center">
            <img
              style={{
                width: "45%",
                maxWidth: "150px",
                height: "auto",
                objectFit: "cover",
              }}
              src={require("./../assets/img/logo.png")}
              alt=""
            />
            <p style={{ width: "60%" }} className="text-white m-2 text-center">
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
            <h5 className="text-white fw-bold">Pages</h5>
            <ul className="list-unstyled ">
              <li className="text-white mb-3">About Us</li>
              <li className="text-white mb-3">Features</li>
              <li className="text-white mb-3">News</li>
              <li className="text-white mb-3">Plans</li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-3">
            <h5 className="text-white fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li className="text-white mb-3">Why Tripy</li>
              <li className="text-white mb-3">Partner with us</li>
              <li className="text-white mb-3">FAQ</li>
              <li className="text-white mb-3">Blog</li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-4">
            <h5 className="text-white fw-bold">Contact</h5>
            <ul className="list-unstyled">
              <li className="text-white mb-3 d-flex align-items-center">
                <Icon.Telephone
                  color="white"
                  size={25}
                  className="me-3 border rounded-1 p-1"
                />
                <span style={{ fontSize: "12px" }}>
                  Drop a line <br/><b>+123 456 789</b>
                </span>
              </li>
              <li className="text-white mb-3 d-flex align-items-center">
                <Icon.Envelope
                  color="white"
                  size={25}
                  className="me-3 border rounded-1 p-1"
                />
                <span style={{ fontSize: "12px" }}>
                  Email Address <br/><b>cappadociaTour@gmail.com</b>
                </span>
              </li>
              <li className="text-white mb-3 d-flex align-items-center">
                <Icon.GeoAlt
                  color="white"
                  size={25}
                  className="me-3 border rounded-1 p-1"
                />
                <span style={{ fontSize: "12px" }}>
                  Visit Office <br/><b>Hakim Muzaffer Arer Sk., 50650</b>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-white text-center footer-para">
            &copy; Roam Sri Lanka | Designed by group 47
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
