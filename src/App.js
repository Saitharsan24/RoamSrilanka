import React from "react";
// import { 
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider
// }from 'react-router-dom';

// import TouristLayout from "./layouts/tourist/tourist-layout";
// import TouristDashboard from "./pages/Tourist/tourist-dashboard";

// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/tourist/" element={<TouristLayout />}>
//       <Route index element={<TouristDashboard />}></Route>
      
//     </Route>
//   )
// )

import SideNavbar from "./components/sidenavbar";
import { BrowserRouter, Switch, Route,Routes } from "react-router-dom";

function App() {
  return (

    <>     
    {/* <RouterProvider router={route}/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNavbar />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}


export default App;
