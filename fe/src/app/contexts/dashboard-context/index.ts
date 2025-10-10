import type { Interview } from "@/app/entities/Interview";
import { createContext } from "react";

interface IDashboardContext {
  isNewInterviewModalOpen: boolean;
  openNewInterviewModal(): void;
  closeNewInterviewModal(): void;
  isEditInterviewModalOpen: boolean;
  interviewBeingEdited: Interview | null;
  openEditInterviewModal(interview: Interview): void;
  closeEditInterviewModal(): void;
}

export const DashboardContext = createContext<IDashboardContext>({} as IDashboardContext);
