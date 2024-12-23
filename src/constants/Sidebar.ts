import { DoubleArrowRounded, FormatListNumberedRounded, CalendarMonthOutlined, StickyNote2Outlined } from '@mui/icons-material';
import { SidebarItemType } from '../components/Sidebar/SidebarItem/SidebarItem';

export const sidebarItems: SidebarItemType[] = [
    { label: 'Upcoming', icon: DoubleArrowRounded, path: '/upcoming' },
    { label: 'Today', icon: FormatListNumberedRounded, path: '/today' },
    { label: 'Calendar', icon: CalendarMonthOutlined, path: '/calendar' },
    { label: 'Sticky Wall', icon: StickyNote2Outlined, path: '/sticky-wall' }
];