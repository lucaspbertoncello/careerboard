import type { IUser } from "@/app/entities/User";
import { httpClient } from "../http-client";

export async function me() {
  const data = await httpClient.get<IUser>("users/me");
  return data;
}
