import { useDeleteInterview } from "@/app/hooks/interviews/use-delete-interview";
import { useUpdateInterview } from "@/app/hooks/interviews/use-update-interview";
import { useDashboard } from "@/app/hooks/use-dashboard";
import { normalizeDateToUTC } from "@/app/utils/normalize-date-to-utc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  companyName: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters"),
  role: z.string().min(1, "Position is required"),
  salary: z.string().optional(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"], {
    message: "Please select a valid status",
  }),
  appliedAt: z
    .date({
      message: "Applied date is required",
    })
    .refine(
      (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // nullish hours to only compare days
        return date <= today;
      },
      {
        message: "Applied date cannot be in the future",
      },
    ),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function useEditInterviewModalForm() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { interviewBeingEdited, closeEditInterviewModal } = useDashboard();
  const { mutateAsync: deleteInterview, isPending: isDeletingInterview } = useDeleteInterview();
  const { mutateAsync: updateInterview, isPending: isUpdatingInterview } = useUpdateInterview();

  useEffect(() => {
    if (interviewBeingEdited) {
      const formattedSalary = interviewBeingEdited?.salary?.toString();
      const formattedDate = new Date(interviewBeingEdited?.appliedAt);

      reset({
        companyName: interviewBeingEdited?.companyName,
        role: interviewBeingEdited?.role,
        status: interviewBeingEdited?.status,
        salary: formattedSalary,
        appliedAt: formattedDate,
        description: interviewBeingEdited?.description,
      });
    }
  }, [interviewBeingEdited, reset]);

  const handleSubmit = hookFormSubmit(async (data) => {
    const cleanSalary = data.salary?.replace(/[$,.]/g, "");
    const formattedSalary = cleanSalary ? Number(cleanSalary) : undefined;
    const formattedDate = normalizeDateToUTC(data.appliedAt);

    const params = { ...data, appliedAt: formattedDate, salary: formattedSalary };
    await updateInterview({ params, interviewId: interviewBeingEdited!.id });
    closeEditInterviewModal();
  });

  async function handleDelete() {
    await deleteInterview(interviewBeingEdited!.id);
    closeEditInterviewModal();
  }

  return {
    register,
    handleSubmit,
    handleDelete,
    isDeletingInterview,
    isUpdatingInterview,
    errors,
    control,
  };
}
