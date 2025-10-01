import { useAuth } from "@/app/hooks/auth/use-auth";
import { useLogin } from "@/app/hooks/auth/use-login";
import { getErrorMessage } from "@/app/utils/get-error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const schema = z.object({
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

export function useLoginForm() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useLogin();
  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
      toast.success("Login sucessfully!");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  });

  return { register, handleSubmit, errors, isPending };
}
