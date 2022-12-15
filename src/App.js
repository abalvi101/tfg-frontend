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
import { apiURL, ENDPOINTS } from "./consts/api";
import ProtectedRoute from "./components/common/protected-route/ProtectedRoute";
import { useAuth } from "./hooks";
import Profile from "./components/views/profile/Profile.styled";
import Animal from "./components/views/animal/Animal.styled";
import Home from "./components/views/home/Home.styled";

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/perfil",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
        ]
      },
      {
        path: "/animal/:animalID",
        element: <Animal />,
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
