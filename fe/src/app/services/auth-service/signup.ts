import type { CreateUserDto } from "@/app/entities/User";
import { httpClient } from "../http-client";

export async function signup(params: CreateUserDto) {
  const { data } = await httpClient.post<{ accessToken: string }>(
    "auth/signup",
    params,
  );

  return data;
}
