import type { LoginUserDto } from "@/app/entities/User";
import { authService } from "@/app/services/auth-service";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signin"],
    mutationFn: (data: LoginUserDto) => authService.signin(data),
  });

  return { isPending, mutateAsync };
}
