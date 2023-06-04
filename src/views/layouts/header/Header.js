import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../../components/common/button";
import { useAuth, useClickOutside } from "../../../hooks";

export const Header = ({ className, }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, userUpdate] = useAuth();
  const userMenuRef = useRef(null);
  const menuRef = useRef(null);
  const iconMenuRef = useRef(null);

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  }

  const closeUserMenu = () => {
    setIsUserMenuVisible(false);
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const closeMenu = () => {
    setIsMenuVisible(false);
  }

  useClickOutside(userMenuRef, closeUserMenu);
  useClickOutside(menuRef, closeMenu, iconMenuRef);

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
      <div className="brand">
        <img src="/LogoWhite.svg" />
        <h1 onClick={() => navigate('/')}>ADOGTANOS</h1>
      </div>

      <nav className={`${isMenuVisible ? null : 'hidden'}`} ref={menuRef}>
        <ul>
          {
            routes.map(
              (route, index) => (
                <li key={index}>
                  <Link to={route.path} className={checkSelected(route.path)}>
                    {route.label}
                  </Link>
                </li>
              )
            )
          }
        </ul>

        {
          user.token
          ? <Fragment>
              <section
                className="user-profile"
                onClick={toggleUserMenu}
              >
                <span>{user.name}</span>
                <img
                  src="/icons/user.svg"
                  alt="User icon"
                  className="user_icon"
                />
                <ul
                  className={`user-menu ${isUserMenuVisible ? null : 'hidden'}`}
                  ref={userMenuRef}
                >
                  <li onClick={() => {closeUserMenu(); closeMenu()}}>
                    <Link to='/perfil'>Perfil</Link>
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
            </Fragment>
        }
      </nav>
      <img
        ref={iconMenuRef}
        onClick={toggleMenu}
        className='icon-menu'
        src="/icons/menu.svg"
        alt="menu"
      />
    </header>
  )
}