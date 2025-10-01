export type InterviewStatus = "APPROVED" | "PENDING" | "REJECTED";

export interface Interview {
  id: string;
  userId: string;
  companyName: string;
  role: string;
  appliedAt: string;
  salary?: number;
  status: "APPROVED" | "PENDING" | "REJECTED";
  description?: string;
}

export interface InterviewSummary {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
}

export type CreateInterviewDto = Omit<Interview, "id" | "userId">;
export type UpdateInterviewDto = Partial<Omit<Interview, "id" | "userId">>;
