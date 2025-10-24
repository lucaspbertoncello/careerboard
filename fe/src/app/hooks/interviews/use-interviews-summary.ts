import type { InterviewSummary } from "@/app/entities/Interview";
import { interviewsService } from "@/app/services/interviews-service";
import { useQuery } from "@tanstack/react-query";

export function useInterviewsSummary() {
  const {
    isFetching: isFetchingInterviewsSummary,
    isLoading: isLoadingInterviewsSummary,
    data: interviewsSummary,
    refetch: refetchInterviewsSummary,
    error,
  } = useQuery<InterviewSummary>({
    queryKey: ["interviews", "summary"],
    queryFn: () => interviewsService.getInterviewsSummary(),
  });

  return {
    isFetchingInterviewsSummary, // to spinners on refetch
    isLoadingInterviewsSummary, // to skeleton on initialLoading
    interviewsSummary,
    refetchInterviewsSummary,
    error,
  };
}
