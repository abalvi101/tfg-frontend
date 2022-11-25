import { Fragment, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "../../common/button"
import { useAuth } from "../../../hooks";

export const Header = ({ className, }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, userUpdate] = useAuth();

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
            ? <Button onClick={userUpdate.logout}>
                Cerrar sesión
              </Button>
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