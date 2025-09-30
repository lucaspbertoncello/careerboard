import { createContext } from "react";

interface IDashboardContext {
  isNewInterviewModalOpen: boolean;
  openNewInterviewModal(): void;
  closeNewInterviewModal(): void;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext,
);
