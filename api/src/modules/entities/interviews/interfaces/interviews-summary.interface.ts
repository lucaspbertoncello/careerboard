export interface IInterviewsStats {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
}
export interface IRecentInterview {
  id: string;
  companyName: string;
  role: string;
  appliedAt: Date;
  status: string;
}

export interface ICurrentYearInterviews {
  month: string;
  total: number;
  approved: number;
  pending: number;
  rejected: number;
}

export interface IInterviewsSummary {
  interviewsStats: IInterviewsStats;
  recentInterviews: IRecentInterview[];
  currentYearInterviews: ICurrentYearInterviews[];
}
