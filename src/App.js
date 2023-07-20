import React from "react";
import "./App.css";

import { Sidebar } from "react-pro-sidebar";
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './pages/Contact';
import Service from './pages/services';
import Blog from './pages/blog';
import Login from './pages/login';
import Error from './pages/error';
import Routing from './routes/Routing';
import Holidayprofile from "./pages/holidayplanner_profile";
import Hotel from './components/sidebar';

function App() {
  return (
    <Routing/>
  );
}

export default App;
