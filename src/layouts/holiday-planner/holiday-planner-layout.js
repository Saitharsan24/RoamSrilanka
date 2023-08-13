import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import "../../styles/hotel/hotel-layout.css";
import SideNavbarHolidayPlanner from "../../components/sidenavbar-holidayPlanner";

function HolidayPlannerLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-4 w-100 max-width justify-content-start">
            <SideNavbarHolidayPlanner />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default HolidayPlannerLayout;