import { interviewsService } from "@/app/services/interviews-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: interviewsService.deleteInterview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      queryClient.invalidateQueries({ queryKey: ["interviews", "summary"] });
      toast.success("Interview deleted successfully");
    },
    onError: () => {
      toast.error("Ocurred an error while deleting your interview");
    },
  });
}
