import axios from "axios";
import { useContext, useEffect } from "react"
import { LOCAL_STORAGE } from "../consts/api";
import { actions, AuthContext } from "../contexts/auth"

const useAuth = () => {
  const [user, dispatch] = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE.API_TOKEN, user.token);
    localStorage.setItem(LOCAL_STORAGE.USER_NAME, user.name);
    localStorage.setItem(LOCAL_STORAGE.USER_SURNAME, user.surname);
    localStorage.setItem(LOCAL_STORAGE.USER_ROLE, user.role);
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  }, [user]);

  const update = {
    login: (user) => dispatch(actions.login(user)),
    logout: () => dispatch(actions.logout()),
  }

  return ([user, update])
}

export default useAuth;