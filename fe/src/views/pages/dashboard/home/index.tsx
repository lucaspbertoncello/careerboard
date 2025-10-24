import { SummaryCard } from "./components/summary-card";
import { SummaryChart } from "./components/summary-chart";
import { SummaryLastInterviews } from "./components/summary-last-interviews";
import { HomeErrorState } from "./components/home-error-state";
import { HomeEmptyState } from "./components/home-empty-state";
import { useHomeController } from "./use-home-controller";
import { HomeSkeleton } from "./skeleton";

export function Home() {
  const {
    openNewInterviewModal,
    interviewsSummary,
    isFetchingInterviewsSummary,
    error,
    refetchInterviewsSummary,
  } = useHomeController();

  const hasInterviews = interviewsSummary?.recentInterviews?.length ?? false;

  return (
    <section>
      {error && (
        <HomeErrorState
          onRetry={refetchInterviewsSummary}
          isLoading={isFetchingInterviewsSummary}
          disabled={isFetchingInterviewsSummary}
        />
      )}

      {!error && hasInterviews && (
        <div>
          {/* summary */}
          <div className="mt-6 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard
              title="Total interviews"
              data={interviewsSummary?.interviewsStats?.total ?? 0}
              percentage={12.5}
            />
            <SummaryCard
              title="Accepted interviews"
              data={interviewsSummary?.interviewsStats?.approved ?? 0}
              percentage={12.5}
            />
            <SummaryCard
              title="Pending interviews"
              data={interviewsSummary?.interviewsStats?.pending ?? 0}
              percentage={12.5}
            />
            <SummaryCard
              title="Rejected interviews"
              data={interviewsSummary?.interviewsStats?.rejected ?? 0}
              percentage={12.5}
            />
          </div>

          {/* last 1 year chart */}
          <SummaryChart chartData={interviewsSummary?.currentYearInterviews ?? []} />

          {/* last 3 interviews */}
          <SummaryLastInterviews lastInterviews={interviewsSummary?.recentInterviews ?? []} />
        </div>
      )}

      {!error && !hasInterviews && !isFetchingInterviewsSummary && (
        <HomeEmptyState onCreateInterview={openNewInterviewModal} />
      )}
      {!error && isFetchingInterviewsSummary && <HomeSkeleton />}
    </section>
  );
}
