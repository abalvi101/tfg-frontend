import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../common/button"
import { useAuth, useClickOutside } from "../../../hooks";

export const Header = ({ className, }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, userUpdate] = useAuth();
  const userMenuRef = useRef(null);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const openUserMenu = () => {
    setIsUserMenuVisible(true);
  }

  const closeUserMenu = () => {
    setIsUserMenuVisible(false);
  }

  useClickOutside(userMenuRef, closeUserMenu);

  useEffect(() => {
    console.log(isUserMenuVisible ? 'VISIBLE' : 'NO VISIBLE')
  }, [isUserMenuVisible])

  const routes = [
    {
      path: '',
      label: 'Inicio',
    },
    {
      path: 'adopciones',
      label: 'Adopciones',
    }
  ]

  const checkSelected = (path) => {
    return location.pathname.split('/')[1] === path
      ? 'selected'
      : null
  }
  
  return (
    <header className={className}>
      <div className="content">
        <div className="menu">
          <h1>Título</h1>
          <ul className="links">
            {
              routes.map(
                (route, index) => (
                  <li key={index}>
                    <Link to={route.path} className={checkSelected(route.path)}>
                      {route.label}
                    </Link>
                    <div className="selected"/>
                  </li>
                )
              )
            }
          </ul>
        </div>
        <section className="auth">
          {
            user.token
            ? <Fragment>
                {/* <Button onClick={userUpdate.logout}>
                  Cerrar sesión
                </Button> */}
                <section className="user">
                  <span>{user.name}</span>
                  <img
                    onClick={openUserMenu}
                    src="icons/user.svg"
                    alt="User icon"
                    className="user_icon"
                  />
                  <ul
                    className={`user_menu ${isUserMenuVisible ? null : 'hidden'}`}
                    ref={userMenuRef}
                  >
                    <li onClick={closeUserMenu}>
                      <Link to='/'>Perfil</Link>
                    </li>
                    <li onClick={closeUserMenu}>
                      <Link to='/'>Ajustes</Link>
                    </li>
                    <li onClick={closeUserMenu}>  
                      <Link onClick={userUpdate.logout}>Cerrar sesión</Link>
                    </li>
                  </ul>
                </section>
              </Fragment>
            : <Fragment>
                <Button
                  onClick={() => navigate('/login')}
                  secondary
                >
                  Iniciar sesión
                </Button>
                <Button
                  onClick={() => navigate('/registro')}
                >
                  Regístrate
                </Button>
              </Fragment>
          }
        </section>
      </div>
    </header>
  )
}