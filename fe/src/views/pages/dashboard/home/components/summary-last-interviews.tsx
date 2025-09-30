import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/views/components/table";

// replace with interview-summary hook and receive via prop
const lastInterviews = [
  {
    id: 1,
    companyName: "TechCorp",
    role: "Senior Frontend Developer",
    appliedAt: "2025-09-28",
    salary: 8.0,
    status: "Pending",
  },
  {
    id: 2,
    companyName: "StartupXYZ",
    role: "Full Stack Engineer",
    appliedAt: "2025-09-25",
    salary: 8.0,
    status: "Approved",
  },
  {
    id: 3,
    companyName: "BigTech Inc",
    role: "React Developer",
    appliedAt: "2025-09-22",
    salary: 8.0,
    status: "Rejected",
  },
];

export function SummaryLastInterviews() {
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
          {lastInterviews.map((interview) => (
            <TableRow key={interview.id}>
              <TableCell className="font-medium">
                {interview.companyName}
              </TableCell>

              <TableCell>{interview.role}</TableCell>

              <TableCell>
                {new Date(interview.appliedAt).toLocaleDateString()}
              </TableCell>

              <TableCell>{interview.salary}</TableCell>

              <TableCell>
                <span
                  className={`inline-flex w-[70px] cursor-pointer items-center justify-center rounded-full py-1 text-xs font-medium ${
                    interview.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : interview.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {interview.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
