import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { queryClient } from "./app/lib/query-client";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./app/contexts/auth-context/context";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
