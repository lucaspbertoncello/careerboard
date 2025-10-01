import { Outlet, Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger,
} from "@/views/components/sidebar";

import {
  ChartBarDecreasing,
  House,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "@/app/lib/cn";
import { Button } from "@/views/components/button";
import { Separator } from "../components/separator";
import { Fab } from "../components/fab";
import { NewInterviewModal } from "../pages/dashboard/modals/new-interview-modal";
import { useAuth } from "@/app/hooks/auth/use-auth";

const dashboardMenuItens = [
  {
    url: "/dashboard",
    icon: House,
  },
  {
    url: "/dashboard/interviews",
    icon: ChartBarDecreasing,
  },
  {
    url: "/dashboard/profile",
    icon: User,
  },
  {
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardLayout() {
  const location = useLocation();
  const { signout } = useAuth();

  return (
    <SidebarProvider className="h-full">
      <Sidebar className="bg-sidebar" variant="inset">
        <SidebarContent className="flex h-full justify-center">
          <SidebarMenu className="flex flex-col items-center justify-center gap-8">
            {dashboardMenuItens.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url;

              return (
                <SidebarMenuItem key={item.url}>
                  <Link
                    to={item.url}
                    className={cn(
                      "flex items-center justify-center rounded-md p-3 transition-colors",
                      "hover:bg-accent rounded-full",
                      isActive &&
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                  >
                    <Icon className="size-5" />
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <Button
            onClick={signout}
            className="bg-transparent hover:bg-transparent"
          >
            <LogOut className="size-5 text-red-500" />
          </Button>
        </SidebarFooter>
      </Sidebar>

      <div className="size-full overflow-auto p-4">
        <main className="bg-background relative min-h-full w-full rounded-lg border border-none p-8 shadow-lg shadow-black/5">
          <div className="mb-4 space-y-2">
            <SidebarTrigger />
            <Separator />
          </div>

          <Outlet />
          <NewInterviewModal />
          <Fab />
        </main>
      </div>
    </SidebarProvider>
  );
}
