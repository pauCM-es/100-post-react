import { useState } from 'react'
import { Link } from 'react-router-dom'

import User from '../../../components/User/User'
import { IconHome, IconMenu } from '../../../assets/svg-icons'
import './Sidebar.scss'


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <section className="sidebar">
      {/* backdrop */}
      <div className={`sidebar__backdrop ${!isSidebarOpen && "sidebar__backdrop--close"}`}
        onClick={ handleToggleSidebar } />
      {/* menu button */}
      <button className={`sidebar__menu-btn ${!isSidebarOpen && "sidebar--close"}`}
        onClick={ handleToggleSidebar }>
        <IconMenu className={ "menu-icon" } />
      </button>
      {/* sidebar */}
      <nav className={ `sidebar__nav ${!isSidebarOpen && "sidebar--close"}` }>
        <div className='sidebar__logo'>
          <div className="nav__logo">logo</div>
        </div>
        <div className="sidebar__user"><User /></div>
        <Link to="/" className='sidebar__link'>
          <span><IconHome className="sidebar__icon" /></span>
        Home</Link>
      </nav>
    </section>
  )
}

export default Sidebar