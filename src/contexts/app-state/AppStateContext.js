import { createContext } from "react";
import initialState from "./initialState";

const AppStateContext = createContext(initialState);

export default AppStateContext;