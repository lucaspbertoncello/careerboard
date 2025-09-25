import { compare, hash } from "bcryptjs";
import { IBcryptService } from "../interfaces/bcrypt.service.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BcryptService implements IBcryptService {
  SALT: number;

  constructor() {
    this.SALT = 8;
  }

  hash(password: string): Promise<string> {
    return hash(password, this.SALT);
  }

  compare(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}
