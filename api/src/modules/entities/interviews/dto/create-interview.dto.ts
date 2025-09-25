import { InterviewStatus } from "@prisma/client";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInterviewDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  @IsDateString()
  appliedAt: string;

  @IsNumber()
  salary: number;

  @IsEnum(InterviewStatus)
  status: InterviewStatus;

  @IsString()
  description: string;
}
