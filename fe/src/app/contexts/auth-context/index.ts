import { createContext } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
