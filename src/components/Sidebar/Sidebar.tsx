import { useState } from 'react'
import { DoubleArrowRounded, FormatListNumberedRounded, CalendarMonthOutlined, StickyNote2, Menu } from '@mui/icons-material';

import './Sidebar.css'
import SidebarItem, { SidebarItemType } from './SidebarItem/SidebarItem';


export default function Sidebar() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarItems: SidebarItemType[] = [
        {label: 'Upcoming', icon: DoubleArrowRounded, path: '/'},
        {label: 'Today', icon: FormatListNumberedRounded, path: '/'},
        {label: 'Calendar', icon: CalendarMonthOutlined, path: '/'},
        {label: 'Sticky Wall', icon: StickyNote2, path: '/'}
    ];

    const collapseSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return <div className={`sidebar-container ${isCollapsed && 'collapsed'}`}>
        <div className="header">
            {!isCollapsed && 
                <div className="title">Menu</div>
            }
            <div className="collapse-button" onClick={collapseSidebar}><Menu/></div>
        </div>

        <div className="menu-container">
            {sidebarItems.map(item => (
                <SidebarItem key={item.label} item={item} isCollapsed={isCollapsed}/>
            ))}
        </div>
    </div>
}