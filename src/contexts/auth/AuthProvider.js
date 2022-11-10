import { useReducer } from "react"
import AuthContext from "./AuthContext";
import initialState from "./initialState"
import authReducer from "./reducer"

const AuthProvider = ({ children, }) => {
  const store = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;