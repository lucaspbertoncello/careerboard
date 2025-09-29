import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { useRegister } from "@/app/hooks/use-register";

const schema = z.object({
  name: z.string().nonempty("Full name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type TFormData = z.infer<typeof schema>;

export function useRegisterForm() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useRegister();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Account created successfuly");
      // do the auth logic
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  });

  return { register, handleSubmit, errors, isPending };
}
