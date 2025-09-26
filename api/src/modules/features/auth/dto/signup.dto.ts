import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto {
  @ApiProperty({
    description: "User full-name",
    example: "John Doe",
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    description: "User e-mail",
    example: "marcelo@bertoncello.com.br",
    format: "email",
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
