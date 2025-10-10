import { Input } from "@/views/components/input";
import { PageHeader } from "@/views/components/page-header";
import { Plus, Search } from "lucide-react";
import { InterviewCard } from "./components/interview-card";
import { Button } from "@/views/components/button";
import { useInterviewsController } from "./use-interviews-controller";
import { InterviewsEmptyState } from "./components/interviews-empty-state";
import { InterviewsErrorState } from "./components/interviews-error-state";
import { InterviewCardSkeleton } from "./components/interview-card-skeleton";

export function Interviews() {
  const {
    openNewInterviewModal,
    interviews,
    hasError,
    isFetchingInterviews,
    refetchInterviews,
    openEditInterviewModal,
  } = useInterviewsController();

  const hasInterviews = interviews.length > 0 && interviews;

  const showContent = !hasError && !isFetchingInterviews && hasInterviews;
  const showSkeleton = isFetchingInterviews && !hasError;
  const showEmpty = !hasError && !isFetchingInterviews && !hasInterviews;

  return (
    <div>
      {showContent && (
        <div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <PageHeader
              title="Interviews"
              description="View and organize your interview history, upcoming sessions and results"
            />
            <Button
              onClick={openNewInterviewModal}
              disabled={isFetchingInterviews}
              className="h-10 w-[200px]"
            >
              <Plus />
              Add an interview
            </Button>
          </div>

          <div className="mt-6 mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                disabled={isFetchingInterviews}
                placeholder="Search companies or positions..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interviews.map((interview) => (
              <InterviewCard
                onClick={() => openEditInterviewModal(interview)}
                key={interview.id}
                data={interview}
              />
            ))}
          </div>
        </div>
      )}

      {showSkeleton && (
        <div>
          <div className="flex items-center justify-between">
            <PageHeader
              title="Interviews"
              description="View and organize your interview history, upcoming sessions and results"
            />
            <Button disabled className="h-10 w-[200px]">
              <Plus />
              Add an interview
            </Button>
          </div>

          <div className="mt-6 mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input disabled placeholder="Search companies or positions..." className="pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <InterviewCardSkeleton key={index} />
            ))}
          </div>
        </div>
      )}

      {showEmpty && <InterviewsEmptyState />}

      {hasError && <InterviewsErrorState onRetry={refetchInterviews} />}
    </div>
  );
}
