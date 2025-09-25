import { SigninDto } from "../dto/signin.dto";
import { SignupDto } from "../dto/signup.dto";

export interface IAuthService {
  signup(signupDto: SignupDto): Promise<{ accessToken: string }>;
  signin(signinDto: SigninDto): Promise<{ accessToken: string }>;
}
