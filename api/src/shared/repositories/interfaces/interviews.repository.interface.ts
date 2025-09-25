import type { Interview, Prisma } from "@prisma/client";

export interface IInterviewsRepository {
  create(createDto: Prisma.InterviewCreateArgs): Promise<Interview>;
  findMany(findManyDto: Prisma.InterviewFindManyArgs): Promise<Interview[]>;
  findFirst(findFirstDto: Prisma.InterviewFindFirstArgs): Promise<Interview | null>;
  update(updateDto: Prisma.InterviewUpdateArgs): Promise<Interview>;
  delete(deleteDto: Prisma.InterviewDeleteArgs): Promise<Interview>;
}
