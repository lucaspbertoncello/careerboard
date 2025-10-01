import { Briefcase, Calendar, TrendingUp, Target } from "lucide-react";

export function InterviewsEmptyState() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      {/* icon container */}
      <div className="relative">
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
          <Briefcase className="text-primary h-8 w-8" />
        </div>

        <div className="bg-primary/5 absolute -top-2 -right-2 h-8 w-8 animate-pulse rounded-full" />
        <div className="bg-primary/5 absolute -bottom-2 -left-2 h-6 w-6 animate-pulse rounded-full delay-300" />
      </div>

      {/* content */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Start Your Interview Journey
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-base">
          Keep track of your job applications, interview dates, and follow-ups
          all in one place
        </p>
      </div>

      {/* features */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="bg-card flex flex-col items-center rounded-xl border p-6 text-center transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
            <Calendar className="h-6 w-6 text-blue-500" />
          </div>
          <h3 className="mt-4 font-semibold">Track Dates</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            Never miss an interview
          </p>
        </div>

        <div className="bg-card flex flex-col items-center rounded-xl border p-6 text-center transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="mt-4 font-semibold">Monitor Progress</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            See your success rate
          </p>
        </div>

        <div className="bg-card flex flex-col items-center rounded-xl border p-6 text-center transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
            <Target className="h-6 w-6 text-purple-500" />
          </div>
          <h3 className="mt-4 font-semibold">Achieve Goals</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            Land your dream job
          </p>
        </div>
      </div>

      {/* cta */}
      <div className="mt-10">
        <p className="text-muted-foreground text-sm">
          Click the{" "}
          <span className="text-foreground font-semibold">
            "Add an interview"
          </span>{" "}
          button above to get started
        </p>
      </div>
    </div>
  );
}
