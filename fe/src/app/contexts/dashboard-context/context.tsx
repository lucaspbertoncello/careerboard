import { useCallback, useState } from "react";
import { DashboardContext } from "./index";

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [isNewInterviewModalOpen, setIsNewInterviewModalOpen] =
    useState<boolean>(false);

  const openNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(true);
  }, []);

  const closeNewInterviewModal = useCallback(() => {
    setIsNewInterviewModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        isNewInterviewModalOpen,
        openNewInterviewModal,
        closeNewInterviewModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
