import type { Interview } from "@/app/entities/Interview";
import { httpClient } from "../http-client";

export async function getAllInterviews(): Promise<Interview[]> {
  const { data } = await httpClient.get<Interview[]>("/interviews");
  return data;
}
