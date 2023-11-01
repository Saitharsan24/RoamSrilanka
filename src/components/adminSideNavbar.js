import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as FiIcons from 'react-icons/fi'
import * as RiIcons from  'react-icons/ri'
import * as IoIcons from 'react-icons/io'

import '../styles/tourist/touristsidenavbar.css'


function AdminSideNavbar() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebardata = [
      {
        title:'Dashboard',
        path:'admindashboard',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text',
      },

      {
        title:'Users',
        path:'adminusers',
        icon:<AiIcons.AiOutlineUsergroupDelete />,
        cName: 'nav-text',
      },

      {
        title:'Blog',
        path:'adminblog',
        icon:<RiIcons.RiDraftFill />,
        cName: 'nav-text',
      },

      {
        title:'Reports',
        path:'adminreport',
        icon:<BiIcons.BiSolidReport />,
        cName: 'nav-text',
      },
      {
        title:'Package',
        path:'adminpackage',
        icon:<FiIcons.FiPackage />,
        cName: 'nav-text',
      },

      {
        title:'Vehicle',
        path:'adminvehicle',
        icon:<AiIcons.AiFillCar />,
        cName: 'nav-text',
      },

      {
        title:'System setting',
        path:'adminSystemSetting',
        icon:<AiIcons.AiFillSetting />,
        cName: 'nav-text',
      },

      {
        title:'Profile',
        path:'adminprofile',
        icon:<BiIcons.BiSolidUserCircle />,
        cName: 'nav-text',
      },

     
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

export default AdminSideNavbar
