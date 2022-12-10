import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../common/button"
import { useAuth, useClickOutside } from "../../../hooks";

export const Header = ({ className, }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, userUpdate] = useAuth();
  const userMenuRef = useRef(null);
  const menuRef = useRef(null);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  }

  const closeUserMenu = () => {
    setIsUserMenuVisible(false);
  }

  const openMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const closeMenu = () => {
    setIsMenuVisible(false);
  }

  useClickOutside(userMenuRef, closeUserMenu);
  useClickOutside(menuRef, closeMenu);

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
          <div className='brand'>
            <img src="/LogoWhite.svg" />
            <h1 onClick={() => navigate('/')}>Adogtanos</h1>
          </div>
          <img
            className="menu_icon"
            src="/icons/menu.svg"
            onClick={openMenu}
          />
          <div className={`links_wrapper ${isMenuVisible ? null : 'hidden'}`} ref={menuRef}>
            <ul className='links' onClick={closeMenu}>
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
            <section className="auth" ref={userMenuRef}>
              {
                user.token
                ? <Fragment>
                    <section
                      className="user"
                      onClick={toggleUserMenu}
                    >
                      <span>{user.name}</span>
                      <img
                        src="/icons/user.svg"
                        alt="User icon"
                        className="user_icon"
                      />
                      <ul
                        className={`user_menu ${isUserMenuVisible ? null : 'hidden'}`}
                      >
                        <li onClick={() => {closeUserMenu(); closeMenu()}}>
                          <Link to='/perfil'>Perfil</Link>
                        </li>
                        <li onClick={() => {closeUserMenu(); closeMenu()}}>
                          <Link to='/'>Ajustes</Link>
                        </li>
                        <li onClick={() => {closeUserMenu(); closeMenu()}}>  
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
        </div>
      </div>
    </header>
  )
}