import { useDashboard } from "@/app/hooks/use-dashboard";

export function useEditInterviewModalController() {
  const { closeEditInterviewModal, isEditInterviewModalOpen } = useDashboard();

  return {
    closeEditInterviewModal,
    isEditInterviewModalOpen,
  };
}
