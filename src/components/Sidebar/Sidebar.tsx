import { useState } from 'react'
import { Menu} from '@mui/icons-material';

import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem';
import { sidebarItems } from '../../constants/Sidebar';


export default function Sidebar() {

    const [isCollapsed, setIsCollapsed] = useState(false);
    
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