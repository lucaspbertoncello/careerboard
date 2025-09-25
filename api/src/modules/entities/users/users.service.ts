import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersRepository } from "src/shared/repositories/users.repository";
import { IUsersService } from "./interfaces/users.service.interface";
import { User } from "@prisma/client";

@Injectable()
export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async me(userId: string): Promise<Pick<User, "name" | "email">> {
    const user = await this.usersRepository.findUnique({ where: { id: userId }, select: { name: true, email: true } });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return user;
  }
}
