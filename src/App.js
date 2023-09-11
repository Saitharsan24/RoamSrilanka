import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import LandingPageLayout from "./layouts/landing-page-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Explore from "./pages/explore";
import Signup from "./pages/signup";

import TouristLayout from "./layouts/tourist/tourist-layout";
import AdminLayout  from "./layouts/admin/adminLayout";
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
import AdminPackageAccept from "./pages/admin/admin_package_accept";

import SystemError from "./pages/error";
import ToursitAccessoriesRent from "./pages/Tourist/tourist-accessories-rent";
import TouristBlog from "./pages/Tourist/tourist-blog";
import TouristBlogView from "./pages/Tourist/tourist-blog-view";
import ToursitGuide from "./pages/Tourist/tourist-guide";
import ToursitAllGuide from "./pages/Tourist/tourist-all-guide";
import TouristPackages from "./pages/Tourist/tourist-all-guide";
import ToursitGuideView from "./pages/Tourist/tourist-guide-view";
import TouristHotel from "./pages/Tourist/tourist-hotel";
import ToursitHotelSearchList from "./pages/Tourist/tourist-hotel-searchlist";
import TouristBlogList from "./pages/Tourist/tourist-blog-list";
import TouristChat from "./pages/Tourist/tourist-chat";
import TouristProfile from "./pages/Tourist/tourist-profile";
import TouristDashboard from "./pages/Tourist/tourist-dashboard";
import TouristBookings from "./pages/Tourist/tourist-bookings";
import TouristAccessories from "./pages/Tourist/tourist-accessories";
import ToursitAccessoriesView from "./pages/Tourist/tourist-accessories-view";
import ToursitHotelViewRoom from "./pages/Tourist/tourist-hotel-view-rooms";

import HotelLayout from "./layouts/hotel/hotel-layout";
import HotelDashboard from "./pages/hotel/hotel-dashboard";
import HotelBooking from "./pages/hotel/hotel-booking";
import HotelRequest from "./pages/hotel/hotel-request";
import OurHotel from "./pages/hotel/our-hotels";
import HotelReport from "./pages/hotel/hotel-report";
import HotelProfile from "./pages/hotel/hotel-profile";
import AboutHotel from "./pages/hotel/about-hotel";
import HotelReviews from "./pages/hotel/hotel-reviews";

import GuideLayout from "./layouts/guide/guide-layout";
import GuideDashboard from "./pages/tour-guide/guide-dashboard";
import GuideRequest from "./pages/tour-guide/guide-requests";
import GuideRequestForm from "./pages/tour-guide/guide-request-form";
import GuideTrip from "./pages/tour-guide/guide-trips";
import GuideTripForm from "./pages/tour-guide/guide-trips-form";
import GuideReport from "./pages/tour-guide/guide-report";
import GuideProfile from "./pages/tour-guide/guide-profile";
import HotelChat from "./pages/hotel/hotel-chat";
import GuideChat from "./pages/tour-guide/guide-chat";

import HolidayPlannerLayout from "./layouts/holiday-planner/holiday-planner-layout";
import Holiday_dashboard from "./pages/holiday-planner/holidayplanner_dashboard";
import Holidayprofile from "./pages/holiday-planner/holidayplanner_profile";
import HPPackage from "./pages/holiday-planner/HPPackage";
import HPEvent from "./pages/holiday-planner/HPEvent";
import HPItem from "./pages/holiday-planner/HPItem";
import HPUpdateEvent1 from "./pages/holiday-planner/HPUpdateEvent1";
import HPUpdatePackage1 from "./pages/holiday-planner/HPUpdatePackage1";
import HPUpdatePackage2 from "./pages/holiday-planner/HPUpdatePackage2";
import HPUpdatePackage3 from "./pages/holiday-planner/HPUpdatePackage3";
import HPViewpackage from "./pages/holiday-planner/HPViewPackage";
import HPUpdateItem1 from "./pages/holiday-planner/HPUpdateItem1";
import HPViewEvent from "./pages/holiday-planner/HPViewEvent";
import HPViewItem from "./pages/holiday-planner/HPViewItem";
import HPRequest from "./pages/holiday-planner/HPRequest";
import HPChat from "./pages/holiday-planner/HPChat";
import HPTrip from "./pages/holiday-planner/HPTrips";

import DriverLayout from "./layouts/driver/driver-layout";
import Driver from "./pages/driver/dashboard";
import Profile from "./pages/driver/profile";
import DriverReport from "./pages/driver/report";
import DriverChat from "./pages/driver/chat";
import DriverVehicle from "./pages/driver/vehicle";
import DrivernewVehicle from "./pages/driver/newVehicle";
import DriverRequest from "./pages/driver/requests";
import DriverTrips from "./pages/driver/trips";
import { useSession } from "./Context/SessionContext";


const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />} errorElement={<SystemError />}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="explore" element={<Explore/>}></Route>
        <Route path="blogs" element={<Blog/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
      </Route>


      <Route path="/tourist/" element={<TouristLayout />} errorElement={<SystemError />}>
        <Route index element={<TouristDashboard />}></Route>
        <Route path="touristDashboard" element={<TouristDashboard />}></Route>
        <Route path="touristBookings" element={<TouristBookings />}></Route>
        <Route path="touristPackages" element={<TouristPackages />}></Route>
        <Route path="touristHotel" element={<TouristHotel />}></Route>
        <Route path="touristGuide" element={<ToursitGuide />}></Route>
        <Route path="touristAllGuide" element={<ToursitAllGuide />}></Route>
        <Route path="touristGuideView" element={<ToursitGuideView />}></Route>
        <Route path="touristDriver" element={<TouristBookings />}></Route>
        <Route path="touristGadgets" element={<TouristAccessories />}></Route>
        <Route path="touristBlog" element={<TouristBlog />}></Route>
        <Route path="touristBlogView" element={<TouristBlogView />}></Route>
        <Route path="touristChat" element={<TouristChat />}></Route>
        <Route path="touristProfile" element={<TouristProfile />}></Route>
        <Route path="touristAccessoriesView" element={<ToursitAccessoriesView />}></Route>
        <Route path="rentItem" element={<ToursitAccessoriesRent />}></Route>
        <Route path="touristHotelSearchList" element={<ToursitHotelSearchList />}></Route>
        <Route path="toursitHotelViewRoom" element={<ToursitHotelViewRoom />}></Route>
        <Route path="touristBlogList" element={<TouristBlogList />}></Route>
      </Route>

      <Route path="/hotel/" element={<HotelLayout />} errorElement={<SystemError />}>
        <Route index element={<HotelDashboard />}></Route>
        <Route path="hotelDashboard" element={<HotelDashboard />}></Route>
        <Route path="hotelBooking" element={<HotelBooking />}></Route>
        <Route path="ourHotel" element={<OurHotel />}></Route>
        <Route path="hotelRequest" element={<HotelRequest />}></Route>
        <Route path="hotelChat" element={<HotelChat />}></Route>
        <Route path="hotelReport" element={<HotelReport />}></Route>
        <Route path="hotelProfile" element={<HotelProfile />}></Route>
        <Route path="aboutHotel" element={<AboutHotel/>}></Route>
        <Route path="hotelReviews" element={<HotelReviews/>}></Route>
      </Route>

      <Route path="/guide/" element={<GuideLayout />} errorElement={<SystemError />}>
        <Route index element={<GuideDashboard />}></Route>
        <Route path="guideDashboard" element={<GuideDashboard />}></Route>
        <Route path="guideRequest" element={<GuideRequest />}></Route>
        <Route path="guideRequestForm" element={<GuideRequestForm />}></Route>
        <Route path="guideTrip" element={<GuideTrip />}></Route>
        <Route path="guideTripForm" element={<GuideTripForm />}></Route>
        <Route path="guideReport" element={<GuideReport />}></Route>
        <Route path="guideProfile" element={<GuideProfile />}></Route>
        <Route path="guideChat" element={<GuideChat />}></Route>
      </Route>

      <Route path="/admin/" element={<AdminLayout />} errorElement={<SystemError />}>
        <Route index path="admindashboard" element={<AdminDashboard/>}></Route>
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
        <Route path="adminpackageaccept" element={<AdminPackageAccept/>}></Route>
      </Route>
          
      <Route path="/holidayPlanner/" element={<HolidayPlannerLayout />} errorElement={<SystemError />}>
        <Route index element={<Holiday_dashboard />}></Route>
        <Route path="plannerDashboard" element={<Holiday_dashboard />}></Route>
        <Route path="plannerProfile" element={<Holidayprofile />}></Route>
        <Route path="plannerPackage" element={<HPPackage />}></Route>
        <Route path="plannerEvent" element={<HPEvent />}></Route>
        <Route path="plannerItem" element={<HPItem />}></Route>
        <Route path="plannerEvent1" element={<HPUpdateEvent1 />}></Route>
        <Route path="plannerPackage1" element={<HPUpdatePackage1 />}></Route>
        <Route path="plannerPackage2" element={<HPUpdatePackage2 />}></Route>
        <Route path="plannerPackage3" element={<HPUpdatePackage3 />}></Route>
        <Route path="plannerViewPackage" element={<HPViewpackage />}></Route>
        <Route path="plannerItem1" element={<HPUpdateItem1 />}></Route>
        <Route path="plannerViewEvent" element={<HPViewEvent />}></Route>
        <Route path="plannerViewItem" element={<HPViewItem />}></Route>
        <Route path="plannerRequest" element={<HPRequest />}></Route>
        <Route path="hpchat" element={<HPChat/>}></Route>
        <Route path="hptrip" element={<HPTrip/>}></Route>
      </Route>

      <Route path="/driver/" element={<DriverLayout />} errorElement={<SystemError />}>
        <Route index element={<Driver />}></Route>
        <Route path="driverDashboard" element={<Driver />}></Route>
        <Route path="driverRequests" element={<DriverRequest />}></Route>
        <Route path="driverProfile" element={<Profile />}></Route>
        <Route path="driverReport" element={<DriverReport />}></Route>
        <Route path="driverChat" element={<DriverChat />}></Route>
        <Route path="driverVehicle" element={<DriverVehicle />}></Route>
        <Route path="driverTrips" element={<DriverTrips />}></Route>
        <Route path="drivernewVehicle" element={<DrivernewVehicle />}></Route>
      </Route>

    </>
  )
);

function App() {

  const sessionData = useSession();
  console.log(sessionData);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}


export default App;
