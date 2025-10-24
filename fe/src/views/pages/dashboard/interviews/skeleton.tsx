import { Skeleton } from "@/views/components/skeleton";

export function InterviewCardSkeleton() {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        {/* Company & Position */}
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-4">
            {/* Avatar skeleton */}
            <Skeleton className="h-12 w-12 rounded-full" />

            <div>
              {/* Role skeleton */}
              <Skeleton className="mb-2 h-5 w-40" />
              {/* Company name skeleton */}
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </div>

        {/* Status badge skeleton */}
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      {/* Description skeleton */}
      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {/* Interview Details skeleton */}
      <div className="mt-4 flex items-center gap-6">
        {/* Date skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Salary skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
