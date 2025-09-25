import { ConflictException, Injectable } from "@nestjs/common";
import { UsersRepository } from "src/shared/repositories/users.repository";
import { IAuthService } from "./interfaces/auth.service.interface";
import { SigninDto } from "./dto/signin.dto";
import { SignupDto } from "./dto/signup.dto";
import { BcryptService } from "./services/bcrypt.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<{ accessToken: string }> {
    const { name, email, password } = signupDto;

    const emailAlreadyInUse = await this.usersRepository.findUnique({ where: { email } });
    if (emailAlreadyInUse) {
      throw new ConflictException("This e-mail is already in use");
    }

    const hashedPassword = await this.bcryptService.hash(password);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    const accessToken = await this.generateAccessToken(user.id);
    return { accessToken };
  }

  signin(signinDto: SigninDto): Promise<{ accessToken: string }> {
    return signinDto as any;
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
