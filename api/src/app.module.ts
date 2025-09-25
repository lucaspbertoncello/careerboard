import { Module } from "@nestjs/common";
import { PrismaModule } from "./shared/database/prisma.module";
import { AuthModule } from "./modules/features/auth/auth.module";
import { RepositoriesModule } from "./shared/repositories/repositories.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./modules/features/auth/auth.guard";
import { UsersModule } from "./modules/entities/users/users.module";
import { InterviewsModule } from "./modules/entities/interviews/interviews.module";

@Module({
  imports: [PrismaModule, RepositoriesModule, AuthModule, UsersModule, InterviewsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
