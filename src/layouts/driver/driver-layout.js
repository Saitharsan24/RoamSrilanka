import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import DriverSidebar from "../../components/sidenavbar_driver";
import "../../styles/hotel/hotel-layout.css";


function DriverLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-4 w-100 max-width justify-content-start">
            <DriverSidebar />
            <Outlet />          
        </div>
    </div>
  ); 
}

export default DriverLayout;