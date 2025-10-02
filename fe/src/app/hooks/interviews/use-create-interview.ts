import type { CreateInterviewDto } from "@/app/entities/Interview";
import { interviewsService } from "@/app/services/interviews-service";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateInterviewDto) => {
      return interviewsService.createInterview(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      queryClient.invalidateQueries({ queryKey: ["interviews", "summary"] });
      toast.success("Interview created successfully");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
