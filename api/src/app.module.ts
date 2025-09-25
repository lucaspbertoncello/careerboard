import { Module } from "@nestjs/common";
import { PrismaModule } from "./shared/database/prisma.module";
import { AuthModule } from "./modules/features/auth/auth.module";
import { RepositoriesModule } from "./shared/repositories/repositories.module";

@Module({
  imports: [PrismaModule, RepositoriesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
