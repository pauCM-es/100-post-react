import { useSelector } from 'react-redux'
import './User.scss'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { logout } from '../../redux/login/loginService'
import { IconAvatar } from '../../assets/svg-icons'


const User = () => {
  const { username, isLoggedIn } = useSelector((state: RootState) => state.login)

  const handleLogout = (): void => {
    logout()
  }

  return (
    isLoggedIn
      ? (
        <div className="user">
          <div className='user__container'>
            <p className="user__name">{ username }</p>
            <button
              className='user__btn btn--logout'
              onClick={ handleLogout }
            >LOG OUT</button>
          </div>
          <div className="user__avatar-container">
            <img
              src={ `https://i.pravatar.cc/50?img=${username}` }
              className="user__avatar-img"
              alt="user avatar" />
          </div>
        </div>
      )
      : (
        <div className="user">
          <div className='user__container'>
            <Link to='/login'
              className='user__btn btn--login'
            >SIGN IN</Link>
          </div>

          <div className="user__avatar-container">
            <IconAvatar className={ "user__avatar-img" } />
          </div>
        </div>
      )
  )
}

export default User