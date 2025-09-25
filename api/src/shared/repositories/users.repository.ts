import { PrismaService } from "src/shared/database/prisma.service";
import { Prisma, User } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "./interfaces/users.repository.interface";

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data: createDto });
  }
  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prismaService.user.findUnique(findUniqueDto);
  }
}
