import { Button } from "@/views/components/button";
import { Link } from "react-router-dom";
import { useLoginForm } from "./use-login-form";
import { InputWithLabel } from "@/views/components/input-with-label";
import { Card } from "@/views/components/card";

export function Login() {
  const { register, handleSubmit, errors, isPending } = useLoginForm();

  return (
    <div className="w-full max-w-[480px] px-4">
      <Card className="border-border/60 p-8 shadow-xs">
        {/* header */}
        <div className="mt-4">
          <div className="space-y-2">
            <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              Welcome back!
            </h1>

            <p className="text-muted-foreground text-base">
              Sign in to continue to your account
            </p>
          </div>
        </div>

        {/* content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <InputWithLabel
              labelText="Email Address"
              placeholder="name@example.com"
              type="email"
              autoComplete="email"
              {...register("email")}
              error={errors.email?.message}
            />

            <InputWithLabel
              labelText="Password"
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <div className="space-y-4">
            <Button isLoading={isPending} className="w-full" type="submit">
              Sign in
            </Button>

            <div className="flex justify-center text-sm">
              <span className="bg-card text-muted-foreground px-4 font-medium">
                New to CareerBoard?
              </span>
            </div>

            <div className="text-center">
              <Link
                to="/register"
                className="text-primary hover:text-primary/80 group inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
              >
                Create your account
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </form>
      </Card>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
}
