import { AlertTriangle, RefreshCw, TrendingDown, Database } from "lucide-react";
import { Button } from "@/views/components/button";

interface HomeErrorStateProps {
  onRetry: () => void;
}

export function HomeErrorState({ onRetry }: HomeErrorStateProps) {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* icon container */}
      <div className="relative">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-orange-500/10 shadow-xl">
          <AlertTriangle className="h-14 w-14 text-orange-500" />
        </div>

        <div className="absolute -top-3 -right-3 h-10 w-10 animate-pulse rounded-full bg-orange-500/5" />
        <div className="absolute -bottom-3 -left-3 h-8 w-8 animate-pulse rounded-full bg-orange-500/5 delay-300" />
      </div>

      {/* content */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Unable to Load Dashboard
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-base">
          We're having trouble loading your interview statistics. This could be
          a temporary connection issue or our servers might be down.
        </p>
      </div>

      {/* retry button */}
      <div className="mt-10">
        <Button
          onClick={onRetry}
          size="lg"
          className="gap-2 px-8 shadow-lg transition-all"
        >
          <RefreshCw className="h-5 w-5" />
          Reload Dashboard
        </Button>
      </div>

      {/* help cards */}
      <div className="mt-14 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        <div className="bg-card flex items-start gap-4 rounded-xl border p-5 transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
            <TrendingDown className="h-6 w-6 text-red-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Data Unavailable</h3>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              Your statistics and charts couldn't be loaded at this time
            </p>
          </div>
        </div>

        <div className="bg-card flex items-start gap-4 rounded-xl border p-5 transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
            <Database className="h-6 w-6 text-amber-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Database Issue</h3>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              There may be a temporary issue with our database servers
            </p>
          </div>
        </div>
      </div>

      {/* help text */}
      <div className="bg-muted/30 mt-12 rounded-xl border p-6 text-center">
        <p className="text-muted-foreground text-sm">
          Problem not resolving?{" "}
          <a
            href="mailto:support@careerboard.com"
            className="text-primary font-semibold transition-colors hover:underline"
          >
            Contact our support team
          </a>{" "}
          and we'll help you out
        </p>
      </div>
    </div>
  );
}
