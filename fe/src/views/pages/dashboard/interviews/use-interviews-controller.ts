import { useInterviews } from "@/app/hooks/interviews/use-interviews";
import { useDashboard } from "@/app/hooks/use-dashboard";

export function useInterviewsController() {
  const { openNewInterviewModal } = useDashboard();
  const {
    hasError,
    interviews,
    isFetchingInterviews,
    isLoadingInterviews,
    refetchInterviews,
  } = useInterviews();

  return {
    openNewInterviewModal,
    refetchInterviews,
    hasError,
    interviews,
    isFetchingInterviews,
    isLoadingInterviews,
  };
}
