import React from 'react';
import './App.css';

import { Sidebar } from "react-pro-sidebar";
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Service from './pages/services';
import Blog from './pages/blog';
import Routing from './routes/Routing';
import HolidayDashboard from './pages/holidayplanner_dashboard';
import HotelRequest from './pages/HotelRequest';

function App() {
  return (
    <HotelRequest/>
  );
}

export default App;
