export type InterviewStatus = "APPROVED" | "PENDING" | "REJECTED";

export interface Interview {
  id: string;
  userId: string;
  companyName: string;
  role: string;
  appliedAt: string;
  formattedDate: string;
  salary?: number;
  status: InterviewStatus;
  description?: string;
}

export interface CurrentYearInterviews {
  month: string;
  approved: number;
  rejected: number;
  pending: number;
}

export interface InterviewSummary {
  interviewsStats: {
    total: number;
    approved: number;
    pending: number;
    rejected: number;
  };
  recentInterviews: Interview[];
  currentYearInterviews: CurrentYearInterviews[];
}

export type CreateInterviewDto = Omit<Interview, "id" | "userId" | "formattedDate">;

// TODO: refactor this interface
export type UpdateInterviewDto = Partial<Omit<Interview, "id" | "userId" | "formattedDate">>;
