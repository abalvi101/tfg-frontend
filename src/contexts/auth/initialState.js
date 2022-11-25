import { LOCAL_STORAGE } from "../../consts/api";

const initialState = {
  token: localStorage.getItem(LOCAL_STORAGE.API_TOKEN),
  name: localStorage.getItem(LOCAL_STORAGE.USER_NAME),
  surname: localStorage.getItem(LOCAL_STORAGE.USER_SURNAME),
  role: localStorage.getItem(LOCAL_STORAGE.USER_ROLE),
}

export default initialState;