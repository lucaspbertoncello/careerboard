import type { Prisma, User } from "@prisma/client";

export interface IUsersRepository {
  create(createDto: Prisma.UserCreateInput): Promise<User>;
  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs): Promise<User | null>;
}
