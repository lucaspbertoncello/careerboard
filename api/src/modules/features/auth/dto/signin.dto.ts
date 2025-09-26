import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SigninDto {
  @ApiProperty({
    description: "User e-mail",
    format: "email",
    example: "marcelo@bertoncello.com.br",
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User password",
    example: "password123",
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
