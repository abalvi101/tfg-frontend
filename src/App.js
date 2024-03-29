import axios from "axios";
import { useEffect, useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Layout from "./views/layouts/public-layout/Layout.styled";
import Error from "./views/error/Error.styled";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import Login from "./views/login/Login.styled";
import Register from "./views/register/Register.styled";
import Adoptions from "./views/adoptions/Adoptions.styled";
import Home from "./views/home/Home.styled";
import { ENDPOINTS } from "./consts/api";
import ProtectedRoute from "./components/common/protected-route/ProtectedRoute";
import { useAuth } from "./hooks";
import Profile from "./views/profile/Profile.styled";
import Animal from "./views/animal/Animal";
import Associations from "./views/associations/Associations.styled";
import Association from "./views/association/Association.styled";

function App() {

  const [user, userUpdate] = useAuth();
  const [theme, setTheme] = useState(true);

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout setTheme={setTheme} themeLight={theme} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/adopciones",
          element: <Adoptions themeLight={theme} />,
        },
        {
          path: "/asociaciones",
          element: <Associations />,
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
          path: "/perfil",
          element: <ProtectedRoute />,
          children: [
            {
              path: "",
              element: <Profile themeLight={theme} />,
            },
          ]
        },
        {
          path: "/animal/:animalID",
          element: <Animal />,
        },
        {
          path: "/asociacion/:associationID",
          element: <Association themeLight={theme} />,
        },
      ]
    }
  ]);

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  }, [user])

  const getUser = () => {
    if (!user.token) return false
    axios.get(ENDPOINTS.AUTH.GET_USER)
    .then(({data}) => {
      if (data.success) {
        userUpdate.login(data.data);
      } else {
        userUpdate.logout();
      }
    })
    .catch((error) => {
      console.log('ERROR AUTH', error);
      userUpdate.logout();
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
