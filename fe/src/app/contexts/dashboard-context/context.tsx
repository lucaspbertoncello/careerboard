import { useCallback, useState } from "react";
import { DashboardContext } from "./index";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [isNewInterviewModalOpen, setIsNewInterviewModalOpen] = useState<boolean>(false);
  const [isEditInterviewModalOpen, setIsEditInterviewModalOpen] = useState<boolean>(true);
  const [interviewBeingEdited, setInterviewBeingEdited] = useState<string | null>(null);

  const openNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(true);
  }, []);

  const closeNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(false);
  }, []);

  const openEditInterviewModal = useCallback((interviewId: string) => {
    setInterviewBeingEdited(interviewId);
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
