import type { LoginUserDto } from "@/app/entities/User";
import { httpClient } from "../http-client";

export async function signin(params: LoginUserDto) {
  const { data } = await httpClient.post<{ accessToken: string }>(
    "auth/signin",
    params,
  );

  return data;
}
