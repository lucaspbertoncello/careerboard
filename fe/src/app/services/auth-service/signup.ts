import { httpClient } from "../http-client";

export interface ISignupParams {
  name: string;
  email: string;
  password: string;
}

export async function signup(params: ISignupParams) {
  const { data } = await httpClient.post<{ accessToken: string }>(
    "auth/signup",
    params,
  );

  return data;
}
