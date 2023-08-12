import React from "react";
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}from 'react-router-dom';

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
      </Route>

      <Route path="/Hotel/" element={<TouristLayout />} errorElement={<SystemError />}>
        
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
