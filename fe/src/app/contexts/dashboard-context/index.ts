import { createContext } from "react";

interface IDashboardContext {
  isNewInterviewModalOpen: boolean;
  openNewInterviewModal(): void;
  closeNewInterviewModal(): void;
  isEditInterviewModalOpen: boolean;
  interviewBeingEdited: string | null;
  openEditInterviewModal(interviewId: string): void;
  closeEditInterviewModal(): void;
}

export const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext);
