import { AlertCircle, RefreshCw, ServerCrash, Wifi } from "lucide-react";
import { Button } from "@/views/components/button";

interface InterviewsErrorStateProps {
  onRetry: () => void;
  isRefetching?: boolean;
}

export function InterviewsErrorState({
  onRetry,
  isRefetching = false,
}: InterviewsErrorStateProps) {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* icon container */}
      <div className="relative">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-red-500/10 shadow-lg">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-2 -right-2 h-8 w-8 animate-pulse rounded-full bg-red-500/5" />
        <div className="absolute -bottom-2 -left-2 h-6 w-6 animate-pulse rounded-full bg-red-500/5 delay-300" />
      </div>

      {/* content */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Oops! Something Went Wrong
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base">
          We couldn't load your interviews. This might be a temporary issue.
        </p>
      </div>

      {/* retry button */}
      <div className="mt-8">
        <Button
          onClick={onRetry}
          isLoading={isRefetching}
          size="lg"
          className="gap-2 shadow-md transition-all hover:shadow-lg"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>

      {/* help cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="bg-card flex items-start gap-3 rounded-xl border p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
            <Wifi className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Check Connection</h3>
            <p className="text-muted-foreground mt-1 text-xs">
              Make sure you're connected to the internet
            </p>
          </div>
        </div>

        <div className="bg-card flex items-start gap-3 rounded-xl border p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
            <ServerCrash className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Server Issue</h3>
            <p className="text-muted-foreground mt-1 text-xs">
              Our servers might be experiencing issues
            </p>
          </div>
        </div>
      </div>

      {/* help text */}
      <div className="mt-8">
        <p className="text-muted-foreground text-xs">
          If the problem persists, please contact{" "}
          <a
            href="mailto:support@careerboard.com"
            className="text-primary font-medium hover:underline"
          >
            support
          </a>
        </p>
      </div>
    </div>
  );
}
