import { AuthLayout } from "@/views/layouts/auth-layout";
import { Login } from "@/views/pages/auth/login";
import { Register } from "@/views/pages/auth/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
