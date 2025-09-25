import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserId } from "src/shared/decorators/user-id.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  me(@UserId() userId: string) {
    return this.usersService.me(userId);
  }
}
