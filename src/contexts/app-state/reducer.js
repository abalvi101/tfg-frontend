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
  console.log('adding');
  let auxState = {...state}
  // console.log({payload, noti: auxState.notification, last: auxState.notification[auxState.notification.length -1]})
  auxState.notification.push({
    ...payload,
    id: state.notification.length ? auxState.notification[auxState.notification.length -1].id + 1 : 1,
})
  return auxState;
}

const deleteNotification = (state, notificationId) => {
  console.log('deleting');
  let auxState = {...state}
  auxState.notification = auxState.notification.filter(
    (notification) => notification.id !== notificationId
  )
  return auxState;
}

const appStateReducer = (state, action) => {
  const {type, payload} = action;
  console.log({type, payload})

  switch (type) {
    case ACTION_TYPES.START_LOADING:
      return startLoading(state);
    case ACTION_TYPES.FINISH_LOADING:
      return finishLoading(state);
    case ACTION_TYPES.NEW_NOTIFICATION:
      return newNotification(state, payload);
    case ACTION_TYPES.DELETE_NOTIFICATION:
      return deleteNotification(state, payload);
  }
}

export default appStateReducer;