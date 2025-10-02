import { useCreateInterview } from "@/app/hooks/interviews/use-create-interview";
import { useDashboard } from "@/app/hooks/use-dashboard";
import { normalizeDateToUTC } from "@/app/utils/normalize-date-to-utc";
import { zodResolver } from "@hookform/resolvers/zod";
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

type TFormData = z.infer<typeof schema>;

export function useNewInterviewModalForm() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useCreateInterview();
  const { closeNewInterviewModal } = useDashboard();

  const handleSubmit = hookFormSubmit(async (data) => {
    // remove all , .
    const cleanSalary = data.salary?.replace(/[$,.]/g, "");
    // transform to number
    const formattedSalary = cleanSalary ? Number(cleanSalary) : undefined;
    const formattedDate = normalizeDateToUTC(data.appliedAt);

    await mutateAsync({
      ...data,
      appliedAt: formattedDate,
      salary: formattedSalary,
    });

    reset();
    closeNewInterviewModal();
  });

  return {
    handleSubmit,
    register,
    errors,
    control,
    isCreatingInterview: isPending,
  };
}
