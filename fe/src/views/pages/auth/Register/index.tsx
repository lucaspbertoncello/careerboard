import { Button } from "@/views/components/button";
import { Input } from "@/views/components/input";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <form className="w-[400px]">
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
        <Input placeholder="Full name" type="text" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Password" type="password" />
      </div>

      <Button className="mt-6">Create account</Button>
    </form>
  );
}
