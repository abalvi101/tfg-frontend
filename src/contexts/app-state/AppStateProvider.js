import { useReducer } from "react"
import AppStateContext from "./AppStateContext";
import initialState from "./initialState"
import appStateReducer from "./reducer"

const AppStateProvider = ({ children, }) => {
  const store = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider;