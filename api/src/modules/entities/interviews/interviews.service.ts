import { Injectable } from "@nestjs/common";
import { CreateInterviewDto } from "./dto/create-interview.dto";
import { InterviewsRepository } from "src/shared/repositories/interviews.repository";
import { IInterviewsService } from "./interfaces/interviews.service.interface";
import { Interview } from "@prisma/client";

@Injectable()
export class InterviewsService implements IInterviewsService {
  constructor(private readonly interviewsRepository: InterviewsRepository) {}

  create(createInterviewDto: CreateInterviewDto, userId: string): Promise<Interview> {
    return this.interviewsRepository.create({ data: { userId, ...createInterviewDto } });
  }
}
