import type { Interview } from "@/app/entities/Interview";
import { interviewsService } from "@/app/services/interviews-service";
import { useQuery } from "@tanstack/react-query";

export function useInterviews() {
  const {
    isFetching: isFetchingInterviews,
    isLoading: isLoadingInterviews,
    data: interviews,
    refetch: refetchInterviews,
    error: hasError,
  } = useQuery<Interview[]>({
    queryKey: ["interviews"],
    queryFn: () => interviewsService.getAllInterviews(),
  });

  return {
    isFetchingInterviews, // to spinners on refetch
    isLoadingInterviews, // to skeleton on initialLoading
    interviews: interviews ?? [],
    refetchInterviews,
    hasError,
  };
}
