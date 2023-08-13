import React from "react";
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}from 'react-router-dom';

import TouristLayout from "./layouts/tourist/tourist-layout";
import AdminLayout  from "./layouts/admin/adminLayout";
import TouristDashboard from "./pages/Tourist/tourist-dashboard";
import TouristBookings from "./pages/Tourist/tourist-bookings";
import TouristAccessories from "./pages/Tourist/tourist-accessories";
import ToursitAccessoriesView from "./pages/Tourist/tourist-accessories-view";
import SystemError from "./pages/error";

import AdminDashboard from "./pages/admin/admin_dashboard";
import Users from "./pages/admin/admin_user";
import AdminBlog from "./pages/admin/admin-blog";
import AdminReport from "./pages/admin/admin_report";
import AdminProfile from "./pages/admin/admin_Profile";
import AdminTouristDetails from "./pages/admin/admin_tourist_view_detail";
import AdminDrivertDetails from "./pages/admin/admin_driver_view_detail";
import AdminVehicleDetails from "./pages/admin/admin_driver_vehicle_view_detail";
import AdminDiverReg from "./pages/admin/admin_driver_reg";
import AdminChangePassword from "./pages/admin/admin_change_password";
import AdminBlogAccept from "./pages/admin/admin_blog_accept";
import AdminPackage from "./pages/admin/admin_package";




const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/tourist/" element={<TouristLayout />} errorElement={<SystemError />}>
        <Route path="touristDashboard" element={<TouristDashboard />}></Route>
        <Route path="touristBookings" element={<TouristBookings />}></Route>
        <Route path="touristHotel" element={<TouristBookings />}></Route>
        <Route path="touristGuide" element={<TouristBookings />}></Route>
        <Route path="touristDriver" element={<TouristBookings />}></Route>
        <Route path="touristGadgets" element={<TouristAccessories />}></Route>
        <Route path="touristBlog" element={<TouristBookings />}></Route>
        <Route path="touristChat" element={<TouristBookings />}></Route>
        <Route path="touristProfile" element={<TouristBookings />}></Route>
        <Route path="touristAccessoriesView" element={<ToursitAccessoriesView />}></Route>
      </Route>

      <Route path="/admin/" element={<AdminLayout />} errorElement={<SystemError />}>
        <Route path="admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="adminusers" element={<Users/>}></Route>
        <Route path="adminblog" element={<AdminBlog/>}></Route>
        <Route path="adminreport" element={<AdminReport/>}></Route>
        <Route path="adminprofile" element={<AdminProfile/>}></Route>
        <Route path="admintouristdetail" element={<AdminTouristDetails/>}></Route>
        <Route path="admindriverdetail" element={<AdminDrivertDetails/>}></Route>
        <Route path="adminvehicledetail" element={<AdminVehicleDetails/>}></Route>
        <Route path="admindriverreg" element={<AdminDiverReg/>}></Route>
        <Route path="adminchangepassword" element={<AdminChangePassword/>}></Route>
        <Route path="adminblogaccept" element={<AdminBlogAccept/>}></Route>
        <Route path="adminpackage" element={<AdminPackage/>}></Route>
      </Route>


      <Route>

      </Route>
    </>
    
  )
)


function App() {
  return (

    <>     
    <RouterProvider router={route}/>
    </>
  );
}


export default App;
