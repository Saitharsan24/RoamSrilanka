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
import Adminusers from "../pages/admin_users";
import Admin_tourist_details from "../pages/admin_tourist_view_detail";
import Holiday_dashboard from "../pages/holidayplanner_dashboard";
import HotelDashboard from "../pages/hotel-dashboard";
import Adminprofile from "../pages/admin_profile";
import Actors from "../components/Actors";
import HotelRequest from "../pages/HotelRequest";
import OurHotel from "../pages/our-hotel";
import UpdateEvent1 from "../pages/HPUpdateEvent1";
import AdminUser from "../pages/admin-users";
import GuideDashoard from "../pages/guide-dashboard";
import HPPackage from "../pages/HPPackage";
import HPUpdatePackage1 from "../pages/HPUpdatePackage1";
import HPUpdatePackage2 from "../pages/HPUpdatePackage2";
import HPUpdatePackage3 from "../pages/HPUpdatePackage3";
import HPViewPackage from "../pages/HPViewPackage";
import HPEvent from "../pages/HPEvent";
import HPUpdateEvent1 from "../pages/HPUpdateEvent1";
import HPUpdateEvent2 from "../pages/HPUpdateEvent2";
import HPUpdateEvent3 from "../pages/HPUpdateEvent3";
import HPViewEvent from "../pages/HPViewEvent";
import HPItem from "../pages/HPItem";
import HPUpdateItem1 from "../pages/HPUpdateItem1";
import HPViewItem from "../pages/HPViewItem";
import UpdateSuccessPopup from "../components/Sucess";

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
        <Route
          path="/Holidayplanner_dashboard"
          element={<Holiday_dashboard />}
        ></Route>
        <Route path="/Adminusers" element={<Adminusers />}></Route>
        <Route
          path="/Admin_touristdetails"
          element={<Admin_tourist_details />}
        ></Route>
        <Route path="/guideDashboard" element={<GuideDashoard />}></Route>
        <Route path="/adminUser" element={<AdminUser />}></Route>
        <Route path="/ourHotel" element={<OurHotel />}></Route>
        <Route path="/hotelRequest" element={<HotelRequest />}></Route>
        <Route path="/hppackage" element={<HPPackage />}></Route>
        <Route path="/hpupdatepackage1" element={<HPUpdatePackage1 />}></Route>
        <Route path="/hpupdatepackage2" element={<HPUpdatePackage2 />}></Route>
        <Route path="/hpupdatepackage3" element={<HPUpdatePackage3 />}></Route>
        <Route path="/hpviewpackage" element={<HPViewPackage />}></Route>
        <Route path="/hpevent" element={<HPEvent />}></Route>
        <Route path="/hpupdateevent1" element={<HPUpdateEvent1 />}></Route>
        <Route path="/hpupdateevent2" element={<HPUpdateEvent2 />}></Route>
        <Route path="/hpupdateevent3" element={<HPUpdateEvent3 />}></Route>
        <Route path="/hpviewevent" element={<HPViewEvent />}></Route>
        <Route path="/hpitem" element={<HPItem />}></Route>
        <Route path="/hpupdateitem1" element={<HPUpdateItem1 />}></Route>
        <Route path="/hpviewitem" element={<HPViewItem />}></Route>
        <Route path="/success" element={<UpdateSuccessPopup />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
