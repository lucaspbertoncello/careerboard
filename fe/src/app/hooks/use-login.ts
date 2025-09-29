import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth-service";
import type { ISigninParams } from "../services/auth-service/signin";

export function useLogin() {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signin"],
    mutationFn: (data: ISigninParams) => authService.signin(data),
  });

  return { isPending, mutateAsync };
}
