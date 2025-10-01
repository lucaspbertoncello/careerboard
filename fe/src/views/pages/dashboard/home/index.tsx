import { PageHeader } from "@/views/components/page-header";
import { SummaryCard } from "./components/summary-card";
import { SummaryChart } from "./components/summary-chart";
import { SummaryLastInterviews } from "./components/summary-last-interviews";
import { HomeErrorState } from "./components/home-error-state";
import { HomeEmptyState } from "./components/home-empty-state";
import { useDashboard } from "@/app/hooks/use-dashboard";
import type { Interview } from "@/app/entities/Interview";

// TODO: replace those 3 values with use-interviews-summary hook return
const chartData = [
  { month: "Jan", total: 18, approved: 4, rejected: 11, pending: 3 },
  { month: "Feb", total: 24, approved: 6, rejected: 15, pending: 3 },
  { month: "Mar", total: 29, approved: 7, rejected: 18, pending: 4 },
  { month: "Apr", total: 33, approved: 8, rejected: 20, pending: 5 },
  { month: "May", total: 38, approved: 10, rejected: 23, pending: 5 },
  { month: "Jun", total: 31, approved: 8, rejected: 19, pending: 4 },
  { month: "Jul", total: 35, approved: 9, rejected: 22, pending: 4 },
  { month: "Aug", total: 42, approved: 11, rejected: 25, pending: 6 },
  { month: "Sep", total: 51, approved: 13, rejected: 30, pending: 8 },
  { month: "Oct", total: 46, approved: 12, rejected: 28, pending: 6 },
  { month: "Nov", total: 39, approved: 10, rejected: 24, pending: 5 },
  { month: "Dec", total: 44, approved: 11, rejected: 26, pending: 7 },
];
const lastInterviews: Interview[] = [
  {
    id: "1",
    userId: "3",
    companyName: "TechCorp",
    role: "Senior Frontend Developer",
    appliedAt: "2025-09-28",
    salary: 8.0,
    status: "PENDING",
  },
  {
    id: "2",
    userId: "3",
    companyName: "StartupXYZ",
    role: "Full Stack Engineer",
    appliedAt: "2025-09-25",
    salary: 8.0,
    status: "APPROVED",
  },
  {
    id: "2",
    userId: "3",
    companyName: "BigTech Inc",
    role: "React Developer",
    appliedAt: "2025-09-22",
    salary: 8.0,
    status: "REJECTED",
  },
];
const error = false;

const hasInterviewsData = false;

export function Home() {
  const { openNewInterviewModal } = useDashboard();

  const handleRetry = () => {
    // TODO: add refetch logic when integrating use-interviews-summary hook
  };

  return (
    <section>
      {error && <HomeErrorState onRetry={handleRetry} />}

      {!error && hasInterviewsData && (
        <div>
          <PageHeader
            title="Home"
            description="Track your interview progress and performance metrics"
          />

          {/* summary */}
          <div className="mt-6 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard
              title="Total interviews"
              data={128}
              percentage={12.5}
            />
            <SummaryCard
              title="Accepted interviews"
              data={32}
              percentage={12.5}
            />
            <SummaryCard
              title="Pending interviews"
              data={45}
              percentage={12.5}
            />
            <SummaryCard
              title="Rejected interviews"
              data={51}
              percentage={12.5}
            />
          </div>

          {/* last 1 year chart */}
          <SummaryChart chartData={chartData} />

          {/* last 3 interviews */}
          <SummaryLastInterviews lastInterviews={lastInterviews} />
        </div>
      )}

      {!error && !hasInterviewsData && (
        <HomeEmptyState onCreateInterview={openNewInterviewModal} />
      )}
    </section>
  );
}
