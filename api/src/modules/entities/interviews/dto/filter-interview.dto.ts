import { InterviewStatus } from "@prisma/client";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";

export class FilterInterviewDto {
  @ApiPropertyOptional({
    description: "Filter by interview status",
    enum: InterviewStatus,
    example: InterviewStatus.PENDING,
  })
  @IsOptional()
  @IsEnum(InterviewStatus, {
    message: "Status must be one of: APPROVED, PENDING, REJECTED",
  })
  status?: InterviewStatus;
}
