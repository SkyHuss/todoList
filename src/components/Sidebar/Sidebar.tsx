import { useState } from 'react'
import { Menu, ExpandCircleDownOutlined } from '@mui/icons-material';

import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem';
import { sidebarItems } from '../../constants/Sidebar';


export default function Sidebar() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return <>
        {/* default computer screen size */}
        <div className={`sidebar-container ${isCollapsed && 'collapsed'}`}>
            <div className="header">
                {!isCollapsed && 
                    <div className="title">Menu</div>
                }
                <div className="collapse-button" onClick={collapseSidebar}>
                    { isCollapsed ? <Menu/> : <ExpandCircleDownOutlined style={{rotate: '90deg'}}/> }
                </div>
            </div>

            <div className="menu-container">
                <div className="menu-list">
                    {!isCollapsed && <div className="title">TASKS</div>}
                    {sidebarItems.map(item => (
                        <SidebarItem key={item.label} item={item} isCollapsed={isCollapsed}/>
                    ))}
                </div>
            </div>
        </div>

        {/* mobile screens size */}
        <div className="mobile-navbar-container">
            {sidebarItems.map(item => (
                <SidebarItem key={item.label} item={item} isCollapsed={isCollapsed}/>
            ))}
        </div>
    </>
}