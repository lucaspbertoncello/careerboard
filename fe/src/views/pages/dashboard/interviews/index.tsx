import { Input } from "@/views/components/input";
import { PageHeader } from "@/views/components/page-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/views/components/select";
import { Plus, Search } from "lucide-react";
import { InterviewCard } from "./components/interview-card";
import type { IInterview } from "@/app/entities/Interview";
import { Button } from "@/views/components/button";

// replace with use-interviews hook
const mockInterviews: IInterview[] = [
  {
    id: "1",
    companyName: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    salary: 102500,
    description:
      "Looking for an experienced React developer to join our frontend team. Must have experience with TypeScript, Next.js, and modern development practices.",
    status: "APPROVED",
    appliedAt: "Applied Dec 10, 2024",
  },
  {
    id: "2",
    companyName: "StartupXYZ",
    role: "Full Stack Engineer",
    salary: 82500,
    description:
      "Join our fast-growing startup as a full-stack engineer. Work with cutting-edge technologies including React, Node.js, and AWS cloud services.",
    status: "PENDING",
    appliedAt: "Applied Dec 8, 2024",
  },
  {
    id: "3",
    companyName: "BigTech Solutions",
    role: "React Developer",
    salary: 110000,
    description:
      "We're seeking a passionate React developer to build scalable web applications. Experience with Redux, GraphQL, and testing frameworks required.",
    status: "REJECTED",
    appliedAt: "Applied Dec 5, 2024",
  },
  {
    id: "4",
    companyName: "Innovation Labs",
    role: "Frontend Architect",
    salary: 130000,
    description:
      "Lead our frontend architecture initiatives. Design and implement scalable frontend solutions for enterprise applications.",
    status: "APPROVED",
    appliedAt: "Applied Dec 2, 2024",
  },
  {
    id: "5",
    companyName: "Digital Agency",
    role: "UI/UX Developer",
    salary: 75000,
    description:
      "Combine your development skills with design expertise. Work closely with designers to create beautiful and functional user interfaces.",
    status: "PENDING",
    appliedAt: "Applied Nov 28, 2024",
  },
];

export function Interviews() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader
          title="Interviews"
          description="View and organize your interview history, upcoming sessions and results"
        />

        <Button className="h-10 w-[200px]">
          <Plus />
          Add an interview
        </Button>
      </div>

      {/* filters */}
      <div className="mt-6 mb-4 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search companies or positions..."
            className="pl-10"
          />
        </div>

        <Select>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="APPROVED">Approved</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="REJECTED">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* interviews */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockInterviews.map((interview) => (
          <InterviewCard key={interview.id} data={interview} />
        ))}
      </div>
    </div>
  );
}
