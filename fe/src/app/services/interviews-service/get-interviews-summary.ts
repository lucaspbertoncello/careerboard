import type { InterviewSummary } from "@/app/entities/Interview";
import { httpClient } from "../http-client";

export async function getInterviewsSummary(): Promise<InterviewSummary> {
  const { data } = await httpClient.get<InterviewSummary>("/interviews/summary");
  return data;
}
