import { Input } from "@/views/components/input";
import { PageHeader } from "@/views/components/page-header";
import { Plus, Search } from "lucide-react";
import { InterviewCard } from "./components/interview-card";
import type { Interview } from "@/app/entities/Interview";
import { Button } from "@/views/components/button";
import { useInterviewsController } from "./use-interviews-controller";
import { SelectInput } from "@/views/components/select-input";
import { InterviewsEmptyState } from "./components/interviews-empty-state";
import { InterviewsErrorState } from "./components/interviews-error-state";

// TODO: replace those values w use-interviews hook return
const interviews: Interview[] = [];
const error = false;

export function Interviews() {
  const { openNewInterviewModal } = useInterviewsController();

  const handleRetry = () => {
    // TODO: add refetch logic when integrating use-intervies hook
  };

  return (
    <div>
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

      {interviews.length > 0 && !error && (
        <div>
          {/* filters */}
          <div className="mt-6 mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search companies or positions..."
                className="pl-10"
              />
            </div>

            <SelectInput
              data={["APPROVED", "PENDING", "REJECTED"]}
              triggerPlaceholder="All statuses"
            />
          </div>

          {/* interviews */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interviews.map((interview) => (
              <InterviewCard key={interview.id} data={interview} />
            ))}
          </div>
        </div>
      )}

      {interviews.length === 0 && !error && <InterviewsEmptyState />}
      {error && (
        <InterviewsErrorState
          onRetry={handleRetry}
          errorMessage="Failed to load interviews. Please try again."
        />
      )}
    </div>
  );
}
