import { Link } from 'react-router-dom'

import './Navbar.scss'
import User from '../../../components/User/User'
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs'
import { IconMenu } from '../../../assets/svg-icons'

function Navbar () {

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">logo</Link>
      
      <div className="nav__breadcrumbs">
        <Breadcrumbs />
      </div>

      <div className="nav__user" >
        <User />
      </div>

    </nav>
  )
}

export default Navbar