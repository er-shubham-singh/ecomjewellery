import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Get token from storage

  return token ? <Outlet /> : <Navigate to="/login/sihnup" replace />;
};

export default ProtectedRoute;