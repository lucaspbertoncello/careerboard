import { Button } from "@/views/components/button";
import { Input } from "@/views/components/input";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <form className="w-[400px]">
      <div className="mb-4">
        <h1 className="text-secondary-foreground text-3xl font-semibold">
          Log in into your account
        </h1>

        <p className="text-muted-foreground">
          Dont have an account?{" "}
          <Link className="text-primary" to="/register">
            Register
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Password" type="password" />
      </div>

      <Button className="mt-6">Log in</Button>
    </form>
  );
}
