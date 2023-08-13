import { NavLink, Outlet } from "react-router-dom";
import HeaderUser from "../../components/headerusers";
import AdminSideNavbar from "../../components/adminSideNavbar";
import "../../styles/tourist/touristlayout.css";

function AdminLayout() {
  return (
    <div className="d-flex flex-column gap-0 full">
        <HeaderUser />
        <div className="tourist-layout d-flex gap-0 w-100 max-width justify-content-start">
            <AdminSideNavbar />
            <Outlet />           
        </div>
    </div>
  ); 
}

export default AdminLayout;