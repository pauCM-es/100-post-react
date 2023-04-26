import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconAvatar, IconLock, IconUser } from "../../assets/svg-icons";
import { LoginData, login } from "../../redux/login/loginService";
import './Login.scss'


const Login = () => {
  const [ userData, setUserData ] = useState<LoginData | null>({username: null})
  const navigate = useNavigate()

  //I would send a POST request with the form data to log in, but I'm just
  // gonna store the username and the isLoggedIn: true, to indicate there is
  // an user logged.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
    console.log('usuario login submit: ', userData);
    login(userData!)
    navigate('/')
  }

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    let user: LoginData = {
      ...userData!,
      [name]: value,
    }
    setUserData(user);
  };

  return (
    <section className="login">
      <div className="login__card">
        <h2 className="card__title">Please, Sign In</h2>
        <section className="card__content">
          <div className="form__icon-container">
            <IconAvatar className="form__avatar" />
          </div>

          <form onSubmit={ handleSubmit } className="form__content">
            <div className="form__field">
              <span>
                <IconUser className="form__icon" />
              </span>
              <input type="text" name="username" placeholder="User name"  
              onChange={handleInput}
              className="form__input" />
            </div>
            <div className="form__field">
              <span>
                <IconLock className="form__icon" />
              </span>
              <input type="password" name="password" placeholder="Password" 
              minLength={6}
              pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
              className="form__input" 
              onChange={handleInput}
              />
              <p className="form__input--error">Must contain: UpperCase, LowerCase, Number, SpecialChar and min 8 Chars</p>
            </div>
            <button type="submit" className="form__btn btn--submit">Sign In</button>
          </form>

        </section>
      </div>
    </section >
  )
}

export default Login
