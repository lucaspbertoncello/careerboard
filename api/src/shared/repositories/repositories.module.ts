import { Global, Module } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { InterviewsRepository } from "./interviews.repository";

@Global()
@Module({
  providers: [UsersRepository, InterviewsRepository],
  exports: [UsersRepository, InterviewsRepository],
})
export class RepositoriesModule {}
