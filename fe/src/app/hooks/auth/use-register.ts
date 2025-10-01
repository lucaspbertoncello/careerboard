import type { CreateUserDto } from "@/app/entities/User";
import { authService } from "@/app/services/auth-service";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: CreateUserDto) => authService.signup(data),
  });

  return { isPending, mutateAsync };
}
