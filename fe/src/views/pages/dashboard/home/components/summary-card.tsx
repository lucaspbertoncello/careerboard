import { TrendingUp } from "lucide-react";

interface ISummaryCardProps {
  title: string;
  data: number;
  percentage: number;
}

export function SummaryCard({ title, data, percentage }: ISummaryCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h1 className="text-muted-foreground text-sm">{title}</h1>

        <div className="flex cursor-pointer items-center gap-2 rounded-lg border p-2">
          <TrendingUp className="size-4" />
          <p className="text-xs">+{percentage}%</p>
        </div>
      </div>

      <h1 className="text-2xl font-semibold">{data}</h1>

      <div className="mt-8">
        <p className="flex items-center gap-2 text-sm font-medium">
          Trending up this month <TrendingUp className="size-4" />
        </p>

        <p className="text-muted-foreground text-sm">
          Visitors for the last 6 months
        </p>
      </div>
    </div>
  );
}
