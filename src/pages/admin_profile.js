import React from "react";
import Headeruser from "../components/headerusers";
import "../styles/admin_profile.css";
import profile from "../assets/images/profile.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import Sidebar from "../components/holidayplanner-sidebar";

function Adminprofile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <React.Fragment>
      
        <Headeruser />
            
    </React.Fragment>
  );
}

export default Adminprofile ;
