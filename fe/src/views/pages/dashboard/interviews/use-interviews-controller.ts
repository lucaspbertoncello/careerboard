import { useDashboard } from "@/app/hooks/use-dashboard";

export function useInterviewsController() {
  const { openNewInterviewModal } = useDashboard();

  return { openNewInterviewModal };
}
