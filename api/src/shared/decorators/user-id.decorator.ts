import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IAuthRequest } from "../interfaces/auth-request.interface";

export const UserId = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const request: IAuthRequest = context.switchToHttp().getRequest();
  return request.userId;
});
