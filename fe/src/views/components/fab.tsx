import { useDashboard } from "@/app/hooks/use-dashboard";
import { Plus } from "lucide-react";

export function Fab() {
  const { openNewInterviewModal } = useDashboard();

  return (
    <div
      onClick={openNewInterviewModal}
      className="bg-primary fixed right-10 bottom-10 cursor-pointer rounded-full p-4"
    >
      <Plus className="text-white" />
    </div>
  );
}
