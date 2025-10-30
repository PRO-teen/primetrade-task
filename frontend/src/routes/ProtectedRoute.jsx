import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if token exists

  if (!token) {
    return <Navigate to="/login" replace />; // redirect to login
  }

  return children; // if token exists, show the page
};

export default ProtectedRoute;
