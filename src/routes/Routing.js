import React, {Components} from "react";
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
import Holiday_dashboard from "../pages/holidayplanner_dashboard";
import HotelDashboard from "../pages/hotel-dashboard";
import Adminprofile from "../pages/admin/admin_Profile";
import Actors from "../components/Actors";
import OurHotel from '../pages/our-hotel';
import UpdateEvent1 from '../pages/HPUpdate-event1';
import GuideDashoard from '../pages/guide-dashboard';
import Driver from '../pages/driver/dashboard';

import Admin_change_password from "../pages/admin/admin_change_password";
import Admin_blog from '../pages/admin/admin-blog';
import HotelRequest from "../pages/Hotelrequest";
import AdminTouristDetails from "../pages/admin/admin_tourist_view_detail";
import AdminDrivertDetails from "../pages/admin/admin_driver_view_detail";
import AdminVehicleDetails from "../pages/admin/admin_driver_vehicle_view_detail";
import Tourist from "../pages/admin/admin_user";
import AdminDiverReg from "../pages/admin/admin_driver_reg";



function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Actors />}></Route> */}
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
        <Route path="/Holidayplanner_dashboard" element={<Holiday_dashboard />}></Route>
        <Route path='/guideDashboard' element={<GuideDashoard/>}></Route>
        <Route path='/UpdateEvent1' element={<UpdateEvent1/>}></Route>
        <Route path='/ourHotel' element={<OurHotel/>}></Route>

        {/* <Route path='/hotelRequest' element={<HotelRequest/>}></Route> */}
        <Route path='/driver/dashboard' element={<Driver/>}></Route>
        <Route path='/Admin_change_password' element={<Admin_change_password/>}></Route>
        <Route path='/tourist-dashboard' element={<TouristDashboard/>}></Route>
        <Route path='/tourist-sidebar' element={<TouristDashboard/>}></Route>
        <Route path='/hotelRequest' element={<HotelRequest/>}></Route>
        <Route path='/driver/dashboard' element={<Driver/>}></Route>

        <Route path='/admin/Admin_change_password' element={<Admin_change_password/>}></Route>
        <Route path="/admin/Adminprofile" element={<Adminprofile />}></Route>
        <Route path='/admin/admin-blog' element={<Admin_blog/>}></Route>
        <Route path='/admin/admin_tourist_detail' element={<AdminTouristDetails/>}></Route>
        <Route path='/admin/admin_driver_detail' element={<AdminDrivertDetails/>}></Route>
        <Route path='/admin/admin_driver_vehicle_detail' element={<AdminVehicleDetails/>}></Route>
        <Route path='/admin/admin_user' element={<Tourist/>}></Route>
        <Route path='/admin/admin_driver_reg' element={<AdminDiverReg/>}></Route>
    </BrowserRouter>
  );
}

export default Routing;