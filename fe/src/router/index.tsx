import { AuthLayout } from "@/views/layouts/auth-layout";
import { Login } from "@/views/pages/auth/login";
import { Register } from "@/views/pages/auth/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./auth-guard";
import { Home } from "@/views/pages/dashboard/home";
import { DashboardLayout } from "@/views/layouts/dashboard-layout";
import { Interviews } from "@/views/pages/dashboard/interviews";
import { NotFound } from "@/views/pages/not-found";
import { UnderDevelopment } from "@/views/pages/under-development";

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

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/interviews" element={<Interviews />} />
            <Route path="/dashboard/profile" element={<UnderDevelopment />} />
            <Route path="/dashboard/settings" element={<UnderDevelopment />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
