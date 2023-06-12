import { useContext } from "react"
import { actions, AppStateContext } from "../contexts/app-state";

const useAppState = () => {
  const [appState, dispatch] = useContext(AppStateContext);

  const update = {
    startLoading: () => dispatch(actions.startLoading()),
    finishLoading: () => dispatch(actions.finishLoading()),
    newNotification: (notification) => dispatch(actions.newNotification(notification)),
    deleteNotification: (notificationId) => dispatch(actions.deleteNotification(notificationId)),
  }

  return ([appState, update]);
}

export default useAppState;