import ACTION_TYPES from "./actionTypes";

const actions = {
  startLoading: () => ({
    type: ACTION_TYPES.START_LOADING,
  }),
  finishLoading: () => ({
    type: ACTION_TYPES.FINISH_LOADING,
  }),
  newNotification: (notification) => ({
    type: ACTION_TYPES.FINISH_LOADING,
    payload: notification,
  }),
}

export default actions;