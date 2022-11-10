import { LOCAL_STORAGE_TOKEN } from "../../consts/api";
import { LOGIN, LOGOUT } from "./actionTypes";
import initialState from "./initialState";


const login = (state, payload) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, payload.token)
  return {
    ...state,
    ...payload,
  }
}

const logout = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  return initialState;
}

const authReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return login(state, payload);
    case LOGOUT:
      return logout();
  }
}

export default authReducer;