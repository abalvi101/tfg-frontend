import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN } from "../../../consts/api";

const ProtectedRoute = (props) => {
  console.log(props);
  if (!localStorage.getItem(LOCAL_STORAGE_TOKEN)) {
    // user is not authenticated
    console.log('NO AUTH');
    return <Navigate to="/" />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;