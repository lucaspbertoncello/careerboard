import type { UpdateInterviewDto } from "@/app/entities/Interview";
import { interviewsService } from "@/app/services/interviews-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      params,
      interviewId,
    }: {
      params: UpdateInterviewDto;
      interviewId: string;
    }) => interviewsService.updateInterview(params, interviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      queryClient.invalidateQueries({ queryKey: ["interviews", "summary"] });
      toast.success("Interview updated successfully");
    },
    onError: () => {
      toast.error("Ocurred an error while updating your interview");
    },
  });
}
