import { Prisma, Interview } from "@prisma/client";
import { IInterviewsRepository } from "./interfaces/interviews.repository.interface";
import { PrismaService } from "../database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class InterviewsRepository implements IInterviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.InterviewCreateArgs): Promise<Interview> {
    return this.prismaService.interview.create(createDto);
  }
  findMany(findManyDto: Prisma.InterviewFindManyArgs): Promise<Interview[]> {
    return this.prismaService.interview.findMany(findManyDto);
  }
  findFirst(findFirstDto: Prisma.InterviewFindFirstArgs): Promise<Interview | null> {
    return this.prismaService.interview.findFirst(findFirstDto);
  }
  update(updateDto: Prisma.InterviewUpdateArgs): Promise<Interview> {
    return this.prismaService.interview.update(updateDto);
  }
  delete(deleteDto: Prisma.InterviewDeleteArgs): Promise<Interview> {
    return this.prismaService.interview.delete(deleteDto);
  }
}
