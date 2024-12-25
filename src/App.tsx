import { RouterProvider, createBrowserRouter, BrowserRouter, Outlet } from 'react-router-dom';


import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import './variables/color.css'
import Upcoming from './pages/upcoming/Upcoming';
import Today from './pages/today/Today';
import Calendar from './pages/calendar/Calendar';
import StickyWall from './pages/stickyWall/stickyWall';

function AppLayout() {
  return (
    <div id='app-container' className='app-container'>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [ // Children are render in the Outlet
      {
        path: '/', // Route par défaut
        element: <Upcoming />
      },
      {
        path: '/upcoming',
        element: <Upcoming />
      },
      {
        path: '/today',
        element: <Today />
      },
      {
        path: '/calendar',
        element: <Calendar />
      },
      {
        path: '/sticky-wall',
        element: <StickyWall />
      }
    ]
  }
])


export default function App() {

  return (
    <RouterProvider router={router} />
  )

}