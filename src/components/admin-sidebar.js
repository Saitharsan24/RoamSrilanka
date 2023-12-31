import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './../styles/sidebar.css';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {isCollapsed ? (
          <Icon.ChevronDoubleRight className='icon' color="white" />
        ) : (
          <Icon.ListColumns className='icon' color="white" />
        )}
      </button>
      <ul className="menu-items">
        <li
          className={`menu-item ${selectedItem === 'dashboard' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('dashboard')}
        >
          {isCollapsed ? (
            <Icon.ColumnsGap className='icon'/>
          ) : (
            <>
              <Icon.ColumnsGap className='icon'/>
              <span 
              className={`menu-items-list ${selectedItem === 'dashboard' ? 'selected' : 'not'}`}
            >Dashboard</span>
            </>
          )}
        </li>
        <li
            className={`menu-item ${selectedItem === 'requests' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('requests')}
        >
          {isCollapsed ? (
            <Icon.BriefcaseFill className='icon' />
          ) : (
            <>
              <Icon.BriefcaseFill className='icon' />
              <span className={`menu-items-list ${selectedItem === 'requests' ? 'selected' : 'not'}`}
              >Users</span>
            </>
          )}
        </li>
        <li
          className={`menu-item ${selectedItem === 'trips' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('chat')}
        >
          {isCollapsed ? (
            <Icon.ListCheck className='icon' />
          ) : (
            <>
              <Icon.ListCheck className='icon' />
              <span className={`menu-items-list ${selectedItem === 'trips' ? 'selected' : 'not'}`}
              >Blogs</span>
            </>
          )}
        </li>
        <li
          className={`menu-item ${selectedItem === 'chat' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('chat')}
        >
          {isCollapsed ? (
            <Icon.ChatSquareText className='icon' />
          ) : (
            <>
              <Icon.ChatSquareText className='icon' />
              <span className={`menu-items-list ${selectedItem === 'chat' ? 'selected' : 'not'}`}
              >Chat</span>
            </>
          )}
        </li>
        <li
          className={`menu-item ${selectedItem === 'reports' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('reports')}
        >
          {isCollapsed ? (
            <Icon.Clock className='icon' />
          ) : (
            <>
              <Icon.Clock className='icon' />
              <span className={`menu-items-list ${selectedItem === 'reports' ? 'selected' : 'not'}`}
              >Reports</span>
            </>
          )}
        </li>
        <li
          className={`menu-item ${selectedItem === 'profile' ? 'selected' : 'not'}`}
          onClick={() => handleItemClick('profile')}
        >
          {isCollapsed ? (
            <Icon.People className='icon' />
          ) : (
            <>
              <Icon.People className='icon' />
              <span className={`menu-items-list ${selectedItem === 'profile' ? 'selected' : 'not'}`}
              >Profile</span>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
