import type { Interview } from "@/app/entities/Interview";
import { interviewsService } from "@/app/services/interviews-service";
import { formatDate } from "@/app/utils/format-date";
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
    select: (interviews) => {
      return interviews.map((interview) => {
        return {
          ...interview,
          formattedDate: formatDate(new Date(interview.appliedAt)),
        };
      });
    },
  });

  return {
    isFetchingInterviews, // to spinners on refetch
    isLoadingInterviews, // to skeleton on initialLoading
    interviews: interviews ?? [],
    refetchInterviews,
    hasError,
  };
}
