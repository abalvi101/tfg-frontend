import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks";

const ProtectedRoute = () => {
  const [user, _] = useAuth()
  if (!user.token) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;