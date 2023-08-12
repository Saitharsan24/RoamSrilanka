import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import TouristLayout from "./layouts/tourist/tourist-layout";
import TouristDashboard from "./pages/Tourist/tourist-dashboard";
import TouristBookings from "./pages/Tourist/tourist-bookings";
import TouristAccessories from "./pages/Tourist/tourist-accessories";
import ToursitAccessoriesView from "./pages/Tourist/tourist-accessories-view";
import SystemError from "./pages/error"
import ToursitAccessoriesRent from "./pages/Tourist/tourist-accessories-rent";
import TouristBlog from "./pages/Tourist/tourist-blog";
import TouristBlogView from "./pages/Tourist/tourist-blog-view";
import ToursitGuide from "./pages/Tourist/tourist-guide";
import ToursitAllGuide from "./pages/Tourist/tourist-all-guide";
import TouristPackages from "./pages/Tourist/tourist-all-guide";
import ToursitGuideView from "./pages/Tourist/tourist-guide-view";
import TouristHotel from "./pages/Tourist/tourist-hotel";
import ToursitHotelSearchList from "./pages/Tourist/tourist-hotel-searchlist";

import HotelLayout from "./layouts/hotel/hotel-layout";
import HotelDashboard from "./pages/hotel/hotel-dashboard";
import HotelBooking from "./pages/hotel/hotel-booking";
import HotelRequest from "./pages/hotel/hotel-request";
import OurHotel from "./pages/hotel/our-hotel";

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
import HotelReport from "./pages/hotel/hotel-report";
import HotelProfile from "./pages/hotel/hotel-profile";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
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
        <Route path="touristChat" element={<TouristBookings />}></Route>
        <Route path="touristProfile" element={<TouristBookings />}></Route>
        <Route path="touristAccessoriesView" element={<ToursitAccessoriesView />}></Route>
        <Route path="rentItem" element={<ToursitAccessoriesRent />}></Route>
        <Route path="touristHotelSearchList" element={<ToursitHotelSearchList />}></Route>
      </Route>

      <Route path="/hotel/" element={<HotelLayout />} errorElement={<SystemError />}>
        <Route path="hotelDashboard" element={<HotelDashboard />}></Route>
        <Route path="hotelBooking" element={<HotelBooking />}></Route>
        <Route path="ourHotel" element={<OurHotel />}></Route>
        <Route path="hotelRequest" element={<HotelRequest />}></Route>
        <Route path="hotelChat" element={<HotelChat />}></Route>
        <Route path="hotelReport" element={<HotelReport />}></Route>
        <Route path="hotelProfile" element={<HotelProfile />}></Route>
      </Route>

      <Route path="/guide/" element={<GuideLayout />} errorElement={<SystemError />}>
        <Route path="guideDashboard" element={<GuideDashboard />}></Route>
        <Route path="guideRequest" element={<GuideRequest />}></Route>
        <Route path="guideRequestForm" element={<GuideRequestForm />}></Route>
        <Route path="guideTrip" element={<GuideTrip />}></Route>
        <Route path="guideTripForm" element={<GuideTripForm />}></Route>
        <Route path="guideReport" element={<GuideReport />}></Route>
        <Route path="guideProfile" element={<GuideProfile />}></Route>
        <Route path="guideChat" element={<GuideChat />}></Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}


export default App;
