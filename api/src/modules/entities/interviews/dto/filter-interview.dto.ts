import { InterviewStatus } from "@prisma/client";
import { IsEnum, IsOptional } from "class-validator";

export class FilterInterviewDto {
  @IsOptional()
  @IsEnum(InterviewStatus, {
    message: "Status must be one of: APPROVED, PENDING, REJECTED",
  })
  status?: InterviewStatus;
}
