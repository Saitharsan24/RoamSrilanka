
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Contact from '../pages/Contact';
import Services from '../pages/services';
import Blog from '../pages/blog';
import About from '../pages/about';
import Login from '../pages/login';
import Error from '../pages/error';
import Holidayprofile from "../pages/holidayplanner_profile";
import HotelDashboard from '../pages/hotel-dashboard';
import Adminprofile from '../pages/admin_profile';

function Routing() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<Header />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Services' element={<Services />}></Route>
            <Route path='/Blog' element={<Blog />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/dev' element={<HotelDashboard />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Error' element={<Error />}></Route>
            <Route path="/Holidayprofile" element={<Holidayprofile />}></Route>
            <Route path="/Adminprofile" element={<Adminprofile />}></Route>

        </Routes>

    </BrowserRouter>
  );
}

export default Routing;
