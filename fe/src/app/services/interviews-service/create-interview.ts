import {
  type Interview,
  type CreateInterviewDto,
} from "@/app/entities/Interview";
import { httpClient } from "../http-client";

export async function createInterview(params: CreateInterviewDto) {
  const { data } = await httpClient.post<Interview>("/interviews", params);
  return data;
}
