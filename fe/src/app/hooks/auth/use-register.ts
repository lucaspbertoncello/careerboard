import type { CreateUserDto } from "@/app/entities/User";
import { authService } from "@/app/services/auth-service";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useRegister() {
  return useMutation({
    mutationFn: (data: CreateUserDto) => authService.signup(data),
    onSuccess: () => {
      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
