import ProtectedRoute from "../components/common/protected-route/ProtectedRoute";
import Layout from "../components/layouts/public-layout";
import Adoptions from "../components/views/adoptions";
import Error from "../components/views/error";
import Login from "../components/views/login";
import Register from "../components/views/register";

const ROUTES = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h3>Home</h3>,
        errorElement: <Error />,
      },
      {
        path: "/adopciones",
        element: <Adoptions />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registro",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <div>Perfil</div>,
          },
          {
            path: "favourites",
            element: <h1>Favoritos</h1>,
          }
        ]
      }
    ]
  }
  
]