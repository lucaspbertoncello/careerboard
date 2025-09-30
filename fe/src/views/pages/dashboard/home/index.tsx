import { PageHeader } from "@/views/components/page-header";
import { SummaryCard } from "./components/summary-card";
import { SummaryChart } from "./components/summary-chart";
import { SummaryLastInterviews } from "./components/summary-last-interviews";

export function Home() {
  return (
    <section>
      <PageHeader
        title="Home"
        description="Track your interview progress and performance metrics"
      />

      {/* summary */}
      <div className="mt-6 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Total interviews" data={128} percentage={12.5} />
        <SummaryCard title="Accepted interviews" data={32} percentage={12.5} />
        <SummaryCard title="Pending interviews" data={45} percentage={12.5} />
        <SummaryCard title="Rejected interviews" data={51} percentage={12.5} />
      </div>

      {/* last 1 year chart */}
      <SummaryChart />

      {/* last 3 interviews */}
      <SummaryLastInterviews />
    </section>
  );
}
