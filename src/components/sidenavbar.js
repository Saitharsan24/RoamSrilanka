import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'

import '../styles/sidenavbar.css'


function SideNavbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const sidebardata = [
      {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
      },

      {
        title:'My Bookings',
        path:'/bookings',
        icon:<BiIcons.BiTrip />,
        cName: 'nav-text'
      },

      {
        title:'Hotel',
        path:'/touristhotel',
        icon:<BiIcons.BiSolidHotel />,
        cName: 'nav-text'
      },

      {
        title:'Tour Guide',
        path:'/touristguide',
        icon:<MdIcons.MdTour />,
        cName: 'nav-text'
      },

      {
        title:'Ride',
        path:'/touristdriver',
        icon:<BiIcons.BiSolidCar />,
        cName: 'nav-text'
      },

      {
        title:'Accessories',
        path:'/touristgadgets',
        icon:<TbIcons.TbTools />,
        cName: 'nav-text'
      },

      {
        title:'Blogs',
        path:'/touristblog',
        icon:<BiIcons.BiSolidBook />,
        cName: 'nav-text'
      },

      {
        title:'Chat',
        path:'/touristchat',
        icon:<BsIcons.BsChatSquareDotsFill />,
        cName: 'nav-text'
      },

      {
        title:'Profile',
        path:'/touristprofile',
        icon:<MdIcons.MdAccountCircle />,
        cName: 'nav-text'
      }
    ]

  return (
    <div>
      <div className="sideNavBar">
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <Link className='d-flex justify-content-end mb-4 sidenav-baricon'> 
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {sidebardata.map((item, index) => {
              return (
                <div key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              )
            })}
        </nav>
      </div>
    </div>
  )
}

export default SideNavbar
