import ACTION_TYPES from "./actionTypes";

const actions = {
  startLoading: () => ({
    type: ACTION_TYPES.START_LOADING,
  }),
  finishLoading: () => ({
    type: ACTION_TYPES.FINISH_LOADING,
  }),
  newNotification: (notification) => ({
    type: ACTION_TYPES.NEW_NOTIFICATION,
    payload: notification,
  }),
  deleteNotification: (notificationId) => ({
    type: ACTION_TYPES.DELETE_NOTIFICATION,
    payload: notificationId,
  }),
}

export default actions;