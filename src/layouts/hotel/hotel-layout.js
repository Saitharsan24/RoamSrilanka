import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import SideNavbarHotel from "../../components/sidenavbar-hotel";
import "../../styles/hotel/hotel-layout.css";

function HotelLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-4 w-100 max-width justify-content-start">
            <SideNavbarHotel />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default HotelLayout;