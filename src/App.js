import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Layout from "./components/layouts/public-layout";
import Error from "./components/views/error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import Login from "./components/views/login";
import Register from "./components/views/register";
import Adoptions from "./components/views/adoptions";
import { apiURL } from "./consts/api";
import ProtectedRoute from "./components/common/protected-route/ProtectedRoute";
import { useAuth } from "./hooks";

const router = createBrowserRouter([
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
]);

function App() {

  const [user, userUpdate] = useAuth();
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    // console.log('cambia user', user);
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  }, [user])

  const getUser = () => {
    if (!user.token) return false
    axios.get('user/get')
    .then(({data}) => {
      console.log('RESPONSE AUTH', data);
      if (data.success) {
        userUpdate.login(data.data);
      } else {
        userUpdate.logout();
      }
    })
    .catch((error) => {
      console.log('ERROR AUTH', error);
    })
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        {/* <Layout> */}
          <RouterProvider router={router} />
        {/* </Layout> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
