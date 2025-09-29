import { useAuth } from "@/app/hooks/use-auth";
import { Navigate, Outlet } from "react-router-dom";

export function AuthGuard({ isPrivate = true }: { isPrivate?: boolean }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
