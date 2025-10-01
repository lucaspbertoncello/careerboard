import { httpClient } from "../http-client";

export async function deleteInterview(interviewId: string): Promise<void> {
  await httpClient.delete<void>(`/interviews/${interviewId}`);
}
