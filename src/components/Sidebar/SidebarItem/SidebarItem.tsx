import { SvgIconComponent } from '@mui/icons-material';

import './SidebarItem.css'

export interface SidebarItemType {
    label: string,
    icon: SvgIconComponent,
    path: string
}

interface Props {
    item: SidebarItemType,
    isCollapsed: boolean,
}

export default function SidebarItem({item, isCollapsed}: Props) {

    const Icon = item.icon;

    return <div className="sidebar-item-container" style={{justifyContent: `${isCollapsed ? 'center' : 'start'}`}}>
        <Icon className='icon'/>
        {!isCollapsed && 
            <div className="label">{item.label}</div>
        }
    </div>
}