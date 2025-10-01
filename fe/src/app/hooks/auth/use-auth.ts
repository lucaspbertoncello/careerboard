import { AuthContext } from "@/app/contexts/auth-context";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext);
}
