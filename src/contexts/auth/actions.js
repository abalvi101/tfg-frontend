import ACTION_TYPES from "./actionTypes";

const actions = {
  login: (user) => ({
    type: ACTION_TYPES.LOGIN,
    payload: user,
  }),
  logout: () => ({
    type: ACTION_TYPES.LOGOUT,
    payload: null,
  }),
}

export default actions;