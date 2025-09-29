import { useLogin } from "@/app/hooks/use-login";
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

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Login sucessfully!");
      // do the auth logic
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  });

  return { register, handleSubmit, errors, isPending };
}
