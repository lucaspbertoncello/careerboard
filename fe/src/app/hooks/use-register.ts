import { authService } from "@/app/services/auth-service";
import type { ISignupParams } from "@/app/services/auth-service/signup";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: ISignupParams) => authService.signup(data),
  });

  return { isPending, mutateAsync };
}
