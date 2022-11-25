import ACTION_TYPES from "./actionTypes";
import initialState from "./initialState";


const startLoading = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const finishLoading = (state) => {
  return {
    ...state,
    loading: false,
  }
}

const newNotification = (state, payload) => {
  let auxState = {...state}
  auxState.notification.push({
    ...payload,
    id: state.notification.length ? state.notification[-1].id + 1 : 1,
})
  return auxState;
}

const appStateReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTION_TYPES.START_LOADING:
      return startLoading(state);
    case ACTION_TYPES.FINISH_LOADING:
      return finishLoading(state);
    case ACTION_TYPES.NEW_NOTIFICATION:
      return newNotification(state, payload);
  }
}

export default appStateReducer;