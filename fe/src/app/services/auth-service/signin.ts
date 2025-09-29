import { httpClient } from "../http-client";

export interface ISigninParams {
  email: string;
  password: string;
}

export async function signin(params: ISigninParams) {
  const { data } = await httpClient.post<{ accessToken: string }>(
    "auth/signin",
    params,
  );

  return data;
}
