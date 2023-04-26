import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.scss'
import { useEffect, useState } from 'react'

const Breadcrumbs = () => {
  const {pathname} = useLocation()
  const [crumbs, setCrumbs] = useState<string[]>([])

  useEffect(() => {
    const crumbsArray = pathname.split("/")
    setCrumbs(crumbsArray)
  }, [pathname])

  return (

    <nav className='breadcrumbs'>
        {crumbs[0] === '' 
        && <Link to='/'
          className={`crumb ${pathname === "/" ? 'crumb--active' : 'crumb--not-active'}`}
        > Home {">"}</Link>}

        {crumbs[1] === 'login' 
        && <Link to='login'
          className={`crumb ${pathname === "/login" ? 'crumb--active' : 'crumb--not-active'}`}
        > Login {">"}</Link>}

        {crumbs.includes('post') 
        && <Link to={`${crumbs[1]}/${crumbs[2]}`}
          className={`crumb ${pathname.includes('post/') && !pathname.includes('edit') ? 'crumb--active' : 'crumb--not-active'}`}
        > View Post {crumbs[2]} {">"}</Link>}
        
        {crumbs[1] === 'post' && crumbs.includes('edit') 
        && <Link to={pathname}
          className={`crumb ${pathname.includes('edit') ? 'crumb--active' : 'crumb--not-active'}`}
        > Edit </Link>}
    </nav>
  )
}

export default Breadcrumbs