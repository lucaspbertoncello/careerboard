export interface IInterview {
  id: string;
  companyName: string;
  role: string;
  appliedAt: string;
  salary?: number;
  status: "APPROVED" | "PENDING" | "REJECTED";
  description?: string;
}
