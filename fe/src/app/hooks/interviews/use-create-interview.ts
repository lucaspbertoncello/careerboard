import { interviewsService } from "@/app/services/interviews-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: interviewsService.createInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      queryClient.invalidateQueries({ queryKey: ["interviews", "summary"] });
      toast.success("Interview created successfully");
    },
    onError: () => {
      toast.error("Ocurred an error while creating your interview");
    },
  });
}
