import { User } from "@prisma/client";

export interface IUsersService {
  me(userId: string): Promise<Pick<User, "name" | "email">>;
}
