import { InterviewStatus } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInterviewDto {
  @ApiProperty({
    description: "Company name",
    example: "Google",
  })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({
    description: "Job role",
    example: "Software Engineer",
  })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    description: "Application date",
    example: "2024-01-15T10:00:00Z",
  })
  @IsNotEmpty()
  @IsDateString()
  appliedAt: string;

  @ApiProperty({
    description: "Job salary",
    example: 80000,
  })
  @IsNumber()
  salary: number;

  @ApiProperty({
    description: "Interview status",
    enum: InterviewStatus,
    example: InterviewStatus.PENDING,
  })
  @IsEnum(InterviewStatus)
  status: InterviewStatus;

  @ApiProperty({
    description: "Job description",
    example: "Full-stack developer position",
  })
  @IsString()
  description: string;
}
