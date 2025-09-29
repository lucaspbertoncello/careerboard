import { Button } from "@/views/components/button";
import { Input } from "@/views/components/input";
import { Link } from "react-router-dom";
import { useRegisterForm } from "./use-register-form";

export function Register() {
  const { register, errors, handleSubmit, isPending } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit} className="w-[400px]">
      <div className="mb-4">
        <h1 className="text-secondary-foreground text-3xl font-semibold">
          Create an account
        </h1>

        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input
          placeholder="Full name"
          type="text"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          placeholder="E-mail"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <Button isLoading={isPending} className="mt-6">
        Create account
      </Button>
    </form>
  );
}
