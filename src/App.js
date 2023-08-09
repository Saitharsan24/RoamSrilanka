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
