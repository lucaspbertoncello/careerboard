import { useDashboard } from "@/app/hooks/use-dashboard";

export function useNewInterviewModalController() {
  const { isNewInterviewModalOpen, closeNewInterviewModal } = useDashboard();

  return { isNewInterviewModalOpen, closeNewInterviewModal };
}
