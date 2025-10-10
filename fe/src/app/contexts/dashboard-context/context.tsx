import { useCallback, useState } from "react";
import { DashboardContext } from "./index";
import type { Interview } from "@/app/entities/Interview";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [isNewInterviewModalOpen, setIsNewInterviewModalOpen] = useState<boolean>(false);
  const [isEditInterviewModalOpen, setIsEditInterviewModalOpen] = useState<boolean>(true);
  const [interviewBeingEdited, setInterviewBeingEdited] = useState<Interview | null>(null);

  const openNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(true);
  }, []);

  const closeNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(false);
  }, []);

  const openEditInterviewModal = useCallback((interview: Interview) => {
    setInterviewBeingEdited(interview);
    setIsEditInterviewModalOpen(true);
  }, []);

  const closeEditInterviewModal = useCallback(() => {
    setInterviewBeingEdited(null);
    setIsEditInterviewModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        isNewInterviewModalOpen,
        openNewInterviewModal,
        closeNewInterviewModal,
        isEditInterviewModalOpen,
        interviewBeingEdited,
        openEditInterviewModal,
        closeEditInterviewModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
