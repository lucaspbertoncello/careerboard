import type { IInterview } from "@/app/entities/Interview";
import { capitalizeFirstLetter } from "@/app/utils/capitalize-first-letter";
import { Calendar, DollarSign, Building2 } from "lucide-react";

interface IInterviewCard {
  data: IInterview;
}

export function InterviewCard({ data }: IInterviewCard) {
  return (
    <div className="card cursor-pointer transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        {/* Company & Position */}
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-4">
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
              <Building2 className="h-6 w-6 text-white" />
            </div>

            <div>
              <h3 className="font-semibold">{data.role}</h3>
              <p className="text-muted-foreground text-sm">
                {data.companyName}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            data.status === "APPROVED"
              ? "bg-green-100 text-green-800"
              : data.status === "PENDING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {capitalizeFirstLetter(data.status)}
        </span>
      </div>

      {/* Description */}
      <div className="mt-3">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {data.description}
        </p>
      </div>

      {/* Interview Details */}
      <div className="mt-4 flex items-center justify-between text-sm">
        {data.salary && (
          <div className="text-muted-foreground flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>{data.salary.toLocaleString()}</span>
          </div>
        )}

        <div className="text-muted-foreground flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{data.appliedAt}</span>
        </div>
      </div>
    </div>
  );
}
