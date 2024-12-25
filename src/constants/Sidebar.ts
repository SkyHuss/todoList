import { DoubleArrowRounded, FormatListNumberedRounded, CalendarMonthOutlined, StickyNote2Outlined } from '@mui/icons-material';
import { SidebarItemType } from '../components/Sidebar/SidebarItem/SidebarItem';

export const sidebarItems: SidebarItemType[] = [
    { label: 'Upcoming', icon: DoubleArrowRounded, path: '/upcoming', notification: 12 },
    { label: 'Today', icon: FormatListNumberedRounded, path: '/today', notification: 5 },
    { label: 'Calendar', icon: CalendarMonthOutlined, path: '/calendar', notification: 0 },
    { label: 'Sticky Wall', icon: StickyNote2Outlined, path: '/sticky-wall', notification: 0 }
];