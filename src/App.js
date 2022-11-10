import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Layout from "./components/layouts/public-layout";
import Error from "./components/views/error";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import Login from "./components/views/login";
import Register from "./components/views/register";
import { AuthContext, login } from "./contexts/auth";
import Button from "./components/common/button";
import { apiURL, ENDPOINTS, LOCAL_STORAGE_TOKEN } from "./consts/api";
import ProtectedRoute from "./components/common/protected-route/ProtectedRoute";
import { useAuth } from "./hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <Error />,
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
]);

function App() {

  const [user, dispatch] = useAuth();
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    axios.defaults.baseURL = apiURL;
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`;
    if (localStorage.getItem(LOCAL_STORAGE_TOKEN));
      getUser(localStorage.getItem(LOCAL_STORAGE_TOKEN));
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.defaults.withCredentials = true;
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = token_var;
  }, [])

  useEffect(() => {
    console.log(user);
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  }, [user])

  const getUser = async (token) => {
    await axios.post(ENDPOINTS.USER.GET_USER, {token})
    .then(({ data }) => {
      console.log('Se recogió el token bien :D')
      dispatch(login(data.data));
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout>
          <RouterProvider router={router} />
          <Button onClick={() => dispatch(login({name: 'Paco', surname: 'Sánchez', email: 'samuelito@gmail.com'}))}>
            Cambiar user!
          </Button>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
