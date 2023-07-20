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
import HotelSidebar from './components/hotel-sidebar';
import HotelDashboard from './pages/hotel-dashboard';
import Holidayprofile from "./pages/holidayplanner_profile";

function App() {
  return (
    <Routing/>
  );
}

export default App;
