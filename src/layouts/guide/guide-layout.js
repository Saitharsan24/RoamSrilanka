import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import SideNavbarGuide from "../../components/sidenavbar-guide";
import "../../styles/hotel/hotel-layout.css";

function GuideLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-4 w-100 max-width justify-content-start">
            <SideNavbarGuide />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default GuideLayout;