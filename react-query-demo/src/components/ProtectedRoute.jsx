import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // If NOT logged in → go to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → show page
  return children;
}