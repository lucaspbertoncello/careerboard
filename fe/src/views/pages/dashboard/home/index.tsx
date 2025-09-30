import { PageHeader } from "@/views/components/page-header";
import { SummaryCard } from "./components/summary-card";

export function Home() {
  return (
    <section>
      <PageHeader
        title="Home"
        description="Track your interview progress and performance metrics"
      />

      {/* summary */}
      <div className="my-6 flex gap-4">
        <SummaryCard title="Total interviews" data={128} percentage={12.5} />
        <SummaryCard title="Accepted interviews" data={32} percentage={12.5} />
        <SummaryCard title="Pending interviews" data={45} percentage={12.5} />
        <SummaryCard title="Rejected interviews" data={51} percentage={12.5} />
      </div>

      {/* last 3 months chart */}
      <div className="card">
        <h1 className="mb-4 font-semibold">
          Total interviews for the last 3 months
        </h1>
      </div>
    </section>
  );
}
