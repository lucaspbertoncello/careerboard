import { Outlet } from "react-router-dom";
import authImage from "../../assets/auth-image.svg";

export function AuthLayout() {
  return (
    <div className="bg-background flex h-full w-full gap-8">
      <div className="hidden flex-1 place-items-center lg:grid">
        <img src={authImage} alt="Auth imagem" />
      </div>

      <div className="flex h-full flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
