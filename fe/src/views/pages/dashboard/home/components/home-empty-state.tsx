import { Sparkles, Plus, BarChart3, Calendar, Target } from "lucide-react";
import { Button } from "@/views/components/button";

interface HomeEmptyStateProps {
  onCreateInterview: () => void;
}

export function HomeEmptyState({ onCreateInterview }: HomeEmptyStateProps) {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* icon container */}
      <div className="relative">
        <div className="from-primary/20 to-primary/5 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br shadow-xl">
          <Sparkles className="text-primary h-14 w-14" />
        </div>

        <div className="bg-primary/10 absolute -top-3 -right-3 h-10 w-10 animate-pulse rounded-full" />
        <div className="bg-primary/10 absolute -bottom-3 -left-3 h-8 w-8 animate-pulse rounded-full delay-300" />
      </div>

      {/* content */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome to Your Career Dashboard
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-base leading-relaxed">
          You haven't added any interviews yet. Start tracking your career
          journey and visualize your progress with beautiful charts and
          insights.
        </p>
      </div>

      {/* cta button */}
      <div className="mt-10">
        <Button
          onClick={onCreateInterview}
          size="lg"
          className="gap-2 px-8 shadow-xl transition-all"
        >
          <Plus className="h-5 w-5" />
          Add Your First Interview
        </Button>
      </div>

      {/* features */}
      <div className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        <div className="bg-card flex flex-col items-center rounded-2xl border p-6 text-center transition-all hover:shadow-lg">
          <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
            <BarChart3 className="text-primary h-7 w-7" />
          </div>
          <h3 className="mt-5 font-semibold">Track Statistics</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            View approval rates and application trends over time
          </p>
        </div>

        <div className="bg-card flex flex-col items-center rounded-2xl border p-6 text-center transition-all hover:shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10">
            <Calendar className="h-7 w-7 text-green-500" />
          </div>
          <h3 className="mt-5 font-semibold">Manage Schedule</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Keep all your interview dates organized in one place
          </p>
        </div>

        <div className="bg-card flex flex-col items-center rounded-2xl border p-6 text-center transition-all hover:shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
            <Target className="h-7 w-7 text-purple-500" />
          </div>
          <h3 className="mt-5 font-semibold">Reach Goals</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Monitor your progress and land your dream job
          </p>
        </div>
      </div>
    </div>
  );
}
