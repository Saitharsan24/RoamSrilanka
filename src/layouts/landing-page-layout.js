import React from 'react';
import Header from '../components/Header';
import { NavLink, Outlet } from "react-router-dom";
import Footer from '../components/footer';

function LandingPageLayout() {
    return (
      <div className="d-flex flex-column gap-0 full">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    ); 
  }
  
  export default LandingPageLayout;