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
  const { openNewInterviewModal, interviews, error, isLoadingInterviews } =
    useInterviewsController();

  const handleRetry = () => {
    // TODO: add refetch logic when integrating use-intervies hook
  };

  const hasInterviews = interviews.length > 0 && interviews;
  const hasError = error;
  const contentReady = !hasError && !isLoadingInterviews;

  return (
    <div>
      {!hasError && (
        <div>
          {/* header */}
          <div className="flex items-center justify-between">
            <PageHeader
              title="Interviews"
              description="View and organize your interview history, upcoming sessions and results"
            />

            <Button onClick={openNewInterviewModal} className="h-10 w-[200px]">
              <Plus />
              Add an interview
            </Button>
          </div>

          {/* filters */}
          <div className="mt-6 mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                disabled={isLoadingInterviews}
                placeholder="Search companies or positions..."
                className="pl-10"
              />
            </div>
          </div>

          {/* interviews */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {!isLoadingInterviews ? (
              <>
                {interviews.map((interview) => (
                  <InterviewCard key={interview.id} data={interview} />
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InterviewCardSkeleton key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {!hasInterviews && contentReady && <InterviewsEmptyState />}

      {hasError && <InterviewsErrorState onRetry={handleRetry} />}
    </div>
  );
}
