import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import SideNavbar from "../../components/sidenavbar_tourist";
import "../../styles/tourist/touristlayout.css";

function TouristLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser/>
        <div className="tourist-layout d-flex gap-0 w-100 max-width justify-content-start">
            <SideNavbar />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default TouristLayout;