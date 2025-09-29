import { InterviewStatus } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

export class UpdateInterviewStatusDto {
  @ApiProperty({
    description: "New interview status",
    enum: InterviewStatus,
    example: InterviewStatus.APPROVED,
  })
  @IsNotEmpty()
  @IsEnum(InterviewStatus)
  status: InterviewStatus;
}
