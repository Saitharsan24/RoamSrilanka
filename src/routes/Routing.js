import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import Contact from "../pages/Contact";
import Services from "../pages/services";
import Blog from "../pages/blog";
import About from "../pages/about";
import Login from "../pages/login";
import Error from "../pages/error";
import Holidayprofile from "../pages/holidayplanner_profile";
import Adminusers  from '../pages/admin_users';
import Admin_tourist_details from '../pages/admin_tourist_view_detail';
import Holiday_dashboard from "../pages/holidayplanner_dashboard";
import HotelDashboard from "../pages/hotel-dashboard";
import Adminprofile from "../pages/admin_profile";
import Actors from "../components/Actors";
import HotelRequest from "../pages/HotelRequest";
import OurHotel from '../pages/our-hotel';
import UpdateEvent1 from '../pages/HPUpdate-event1';
import AdminUser from '../pages/admin-users';
import GuideDashoard from '../pages/guide-dashboard';
import Driver from '../pages/driver/dashboard';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Actors />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/hoteldashboard" element={<HotelDashboard />}></Route>
        <Route path="/requests" element={<HotelRequest />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Error" element={<Error />}></Route>
        <Route path="/Holidayprofile" element={<Holidayprofile />}></Route>
        <Route path="/Adminprofile" element={<Adminprofile />}></Route>
        <Route path="/Holidayplanner_dashboard" element={<Holiday_dashboard />}></Route>
        <Route path='/Adminusers' element={<Adminusers/>}></Route>
        <Route path='/Admin_touristdetails' element={<Admin_tourist_details/>}></Route>
        <Route path='/guideDashboard' element={<GuideDashoard/>}></Route>
        <Route path='/adminUser' element={<AdminUser/>}></Route>
        <Route path='/UpdateEvent1' element={<UpdateEvent1/>}></Route>
        <Route path='/ourHotel' element={<OurHotel/>}></Route>
        <Route path='/hotelRequest' element={<HotelRequest/>}></Route>
        <Route path='/driver/dashboard' element={<Driver/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;