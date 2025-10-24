import { useInterviewsSummary } from "@/app/hooks/interviews/use-interviews-summary";
import { useDashboard } from "@/app/hooks/use-dashboard";

export function useHomeController() {
  const { interviewsSummary, isFetchingInterviewsSummary, error, refetchInterviewsSummary } =
    useInterviewsSummary();
  const { openNewInterviewModal } = useDashboard();

  return {
    openNewInterviewModal,
    interviewsSummary,
    isFetchingInterviewsSummary,
    error,
    refetchInterviewsSummary,
  };
}
