import {
  type Interview,
  type UpdateInterviewDto,
} from "@/app/entities/Interview";
import { httpClient } from "../http-client";

export async function updateInterview(
  params: UpdateInterviewDto,
  interviewId: string,
): Promise<Interview> {
  const { data } = await httpClient.put<Interview>(
    `/interviews/${interviewId}`,
    params,
  );
  return data;
}
