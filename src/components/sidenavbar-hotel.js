import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'

import '../styles/hotel/sidenavbar-hotel.css'


function SideNavbarHotel() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebardata = [
      {
        title:'Dashboard',
        path:'hotelDashboard',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text',
      },

      {
        title:'Bookings',
        path:'hotelBooking',
        icon:<BiIcons.BiTrip />,
        cName: 'nav-text',
      },

      {
        title:'Chat',
        path:'hotelChat',
        icon:<BsIcons.BsChatSquareDotsFill />,
        cName: 'nav-text',
      },

      {
        title:'Reports',
        path:'hotelReport',
        icon:<MdIcons.MdTour />,
        cName: 'nav-text',
      },

      {
        title:'Profile',
        path:'hotelProfile',
        icon:<MdIcons.MdAccountCircle />,
        cName: 'nav-text',
      },

      {
        title:'Our Hotel',
        path:'ourHotel',
        icon:<TbIcons.TbTools />,
        cName: 'nav-text',
      }
    ]

  return (
    <div>
     <div className={isCollapsed ? 'Collapsed sideNavBar' : 'Expanded sideNavBar'}>
        <nav>
            <div className='d-flex justify-content-end mb-4 sidenav-baricon' onClick={() => setIsCollapsed(!isCollapsed)}> 
              <FaIcons.FaBars />
            </div>
            {sidebardata.map((item, index) => {
              return (
                <div key={index} className={item.cName} >
                  <NavLink to={item.path}>
                    {item.icon}
                    <span className='sideNav-span'>{item.title}</span>
                  </NavLink>
                </div>
              )
            })}
        </nav>
      </div>
    </div>
  )
}

export default SideNavbarHotel;