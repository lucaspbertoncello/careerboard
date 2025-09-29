import { InterviewStatus } from "@prisma/client";
import { IsEnum, IsNotEmpty } from "class-validator";

export class UpdateInterviewStatusDto {
  @IsNotEmpty()
  @IsEnum(InterviewStatus)
  status: InterviewStatus;
}
