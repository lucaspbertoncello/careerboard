import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { useAuth } from "@/app/hooks/auth/use-auth";
import { useRegister } from "@/app/hooks/auth/use-register";

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
  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
      toast.success("Account created successfuly");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  });

  return { register, handleSubmit, errors, isPending };
}
