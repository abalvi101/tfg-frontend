import ACTION_TYPES from "./actionTypes";
import initialState from "./initialState";


const login = (state, payload) => {
  return {
    ...state,
    ...payload,
  }
}

const logout = () => {
  return {
    name: '',
    surname: '',
    role: '',
    token: '',
  };
}

const authReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTION_TYPES.LOGIN:
      return login(state, payload);
    case ACTION_TYPES.LOGOUT:
      return logout();
  }
}

export default authReducer;