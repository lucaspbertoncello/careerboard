import type { Interview } from "@/app/entities/Interview";
import { capitalizeFirstLetter } from "@/app/utils/capitalize-first-letter";
import { formatDate } from "@/app/utils/format-date";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/views/components/table";

interface SummaryLastInterviewsProps {
  lastInterviews: Interview[];
}

export function SummaryLastInterviews({ lastInterviews }: SummaryLastInterviewsProps) {
  return (
    <div className="card">
      <h1 className="mb-4 font-semibold">Your last 3 interviews</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Company</TableHead>
            <TableHead className="font-bold">Role</TableHead>
            <TableHead className="font-bold">Applied at</TableHead>
            <TableHead className="font-bold">Salary</TableHead>
            <TableHead className="font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {lastInterviews?.map((interview) => (
            <TableRow key={interview.id}>
              <TableCell className="font-medium">{interview.companyName}</TableCell>

              <TableCell>{interview.role}</TableCell>

              <TableCell>{formatDate(new Date(interview.appliedAt))}</TableCell>

              <TableCell>{interview.salary?.toLocaleString()}</TableCell>

              <TableCell>
                <span
                  className={`inline-flex w-[70px] cursor-pointer items-center justify-center rounded-full py-1 text-xs font-medium ${
                    interview.status === "APPROVED"
                      ? "bg-green-100 text-green-800"
                      : interview.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {capitalizeFirstLetter(interview.status)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
