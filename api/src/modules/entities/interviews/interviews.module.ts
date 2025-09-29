import { Module } from "@nestjs/common";
import { InterviewsService } from "./interviews.service";
import { InterviewsController } from "./interviews.controller";
import { ValidateInterviewOwnership } from "./services/validate-interview-ownership.service";

@Module({
  controllers: [InterviewsController],
  providers: [InterviewsService, ValidateInterviewOwnership],
})
export class InterviewsModule {}
