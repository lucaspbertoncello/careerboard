export interface IValidateInterviewOwnership {
  execute(userId: string, interviewId: string): Promise<boolean | null>;
}
