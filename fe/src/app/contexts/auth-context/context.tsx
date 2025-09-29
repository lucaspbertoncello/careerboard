import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./index";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "@/app/services/users-service";
import toast from "react-hot-toast";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = localStorage.getItem("careerBoard:token");
    return !!token;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem("careerBoard:token", accessToken);
    setIsAuthenticated(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem("careerBoard:token");
    setIsAuthenticated(false);
  }, []);

  const { isError } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Session expired. Please login again.");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
