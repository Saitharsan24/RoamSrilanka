import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import TouristSidebar from "../../components/tourist-sidebar";
import "../../styles/tourist.css";

function TouristLayout() {
  return (
    <div className="d-flex flex-column gap-3 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-4 w-100 max-width justify-content-start">
            <TouristSidebar />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default TouristLayout;