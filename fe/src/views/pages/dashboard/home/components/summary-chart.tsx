import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/views/components/chart";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

// replace with interview-summary hook and receive via prop
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

const chartConfig = {
  total: {
    label: "Interviews",
    color: "var(--chart-1)",
  },
  approved: {
    label: "Approved",
    color: "var(--chart-2)",
  },
  rejected: {
    label: "Rejected",
    color: "var(--chart-3)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function SummaryChart() {
  return (
    <div className="card mb-4">
      <h1 className="mb-4 font-semibold">Total interviews for the last year</h1>

      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
        >
          <defs>
            <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8} />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="total"
            type="natural"
            fill="url(#fillTotal)"
            fillOpacity={0.6}
            stroke="var(--chart-1)"
            strokeWidth={2}
          />
          <Area
            dataKey="approved"
            type="natural"
            fillOpacity={0.4}
            stroke="var(--chart-2)"
            strokeWidth={2}
            fill="var(--chart-2)"
          />
          <Area
            dataKey="rejected"
            type="natural"
            fillOpacity={0.4}
            stroke="var(--chart-3)"
            strokeWidth={2}
            fill="var(--chart-3)"
          />
          <Area
            dataKey="pending"
            type="natural"
            fillOpacity={0.4}
            stroke="var(--chart-4)"
            strokeWidth={2}
            fill="var(--chart-4)"
          />
        </AreaChart>
      </ChartContainer>

      {/* Legend manual */}
      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "var(--chart-1)" }}
          />
          <span className="text-muted-foreground text-sm">Total</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "var(--chart-2)" }}
          />
          <span className="text-muted-foreground text-sm">Approved</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "var(--chart-3)" }}
          />
          <span className="text-muted-foreground text-sm">Rejected</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "var(--chart-4)" }}
          />
          <span className="text-muted-foreground text-sm">Pending</span>
        </div>
      </div>
    </div>
  );
}
