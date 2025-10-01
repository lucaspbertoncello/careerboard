import { createInterview } from "./create-interview";
import { deleteInterview } from "./delete-interview";
import { getAllInterviews } from "./get-all-interviews";
import { getInterviewsSummary } from "./get-interviews-summary";
import { updateInterview } from "./update-interview";

export const interviewsService = {
  getAllInterviews,
  getInterviewsSummary,
  createInterview,
  updateInterview,
  deleteInterview,
};
