import { AuthLayout } from "@/views/layouts/auth-layout";
import { Login } from "@/views/pages/auth/login";
import { Register } from "@/views/pages/auth/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./auth-guard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
