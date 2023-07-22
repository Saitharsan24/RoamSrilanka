import React from "react";
import "./App.css";

import { Sidebar } from "react-pro-sidebar";
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Service from './pages/services';
import About from './pages/about';
import Blog from './pages/blog';
import Login from './pages/login';
import Error from './pages/error';
import Routing from './routes/Routing';
import HolidayDashboard from './pages/holidayplanner_dashboard';
import HotelRequest from './pages/HotelRequest';
import HotelSidebar from './components/hotel-sidebar';
import HotelDashboard from './pages/hotel-dashboard';
import Holidayprofile from "./pages/holidayplanner_profile";
import Adminprofile from './pages/admin_profile';

import Holiday_dashboard from "./pages/holidayplanner_dashboard";

function App() {
  return (
    <Routing/>
  );
}

export default App;
