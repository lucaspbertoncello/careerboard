import { useInterviews } from "@/app/hooks/interviews/use-interviews";
import { useDashboard } from "@/app/hooks/use-dashboard";

export function useInterviewsController() {
  const { openNewInterviewModal } = useDashboard();
  const { error, interviews, isFetchingInterviews, isLoadingInterviews } =
    useInterviews();

  return {
    openNewInterviewModal,
    error,
    interviews: interviews ?? [],
    isFetchingInterviews,
    isLoadingInterviews,
  };
}
