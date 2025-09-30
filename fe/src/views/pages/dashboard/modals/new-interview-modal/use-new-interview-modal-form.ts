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
  appliedAt: z.date({
    message: "Applied date is required",
  }),
  description: z.string().optional(),
});

type TFormData = z.infer<typeof schema>;

export function useNewInterviewModalForm() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  return { handleSubmit, register, errors, control };
}
