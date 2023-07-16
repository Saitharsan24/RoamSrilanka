import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Contact from '../pages/Contact';

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing