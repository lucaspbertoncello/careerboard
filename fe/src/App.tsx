import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { queryClient } from "./app/lib/query-client";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}
