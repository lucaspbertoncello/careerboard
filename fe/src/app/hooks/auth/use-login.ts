import type { LoginUserDto } from "@/app/entities/User";
import { authService } from "@/app/services/auth-service";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginUserDto) => authService.signin(data),
    onSuccess: () => {
      toast.success("Welcome back!");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
