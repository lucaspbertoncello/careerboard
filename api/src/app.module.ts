import { Module } from "@nestjs/common";
import { PrismaModule } from "./shared/database/prisma.module";
import { AuthModule } from "./modules/features/auth/auth.module";
import { RepositoriesModule } from "./shared/repositories/repositories.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./modules/features/auth/auth.guard";

@Module({
  imports: [PrismaModule, RepositoriesModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
