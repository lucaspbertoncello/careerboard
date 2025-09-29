import { Injectable } from "@nestjs/common";
import { CreateInterviewDto } from "./dto/create-interview.dto";
import { InterviewsRepository } from "src/shared/repositories/interviews.repository";
import { IInterviewsService } from "./interfaces/interviews.service.interface";
import { Interview } from "@prisma/client";
import { FilterInterviewDto } from "./dto/filter-interview.dto";
import { UpdateInterviewDto } from "./dto/update-interview.dto";
import { ValidateInterviewOwnership } from "./services/validate-interview-ownership.service";
import { UpdateInterviewStatusDto } from "./dto/update-interview-status.dto";
import { IInterviewsSummary } from "./interfaces/interviews-summary.interface";

@Injectable()
export class InterviewsService implements IInterviewsService {
  constructor(
    private readonly interviewsRepository: InterviewsRepository,
    private readonly validateInterviewOwnership: ValidateInterviewOwnership,
  ) {}

  create(createInterviewDto: CreateInterviewDto, userId: string): Promise<Interview> {
    return this.interviewsRepository.create({ data: { userId, ...createInterviewDto } });
  }

  findAllByUserId(userId: string, filters: FilterInterviewDto): Promise<Interview[] | null | Interview> {
    const { status } = filters;
    return this.interviewsRepository.findMany({ where: { userId, status } });
  }

  async getInterviewsSummaryByUserId(userId: string): Promise<IInterviewsSummary> {
    const interviews = await this.interviewsRepository.findMany({ where: { userId }, select: { status: true } });

    const summary: IInterviewsSummary = {
      total: interviews.length,
      approved: interviews.filter((interview) => interview.status === "APPROVED").length,
      pending: interviews.filter((interview) => interview.status === "PENDING").length,
      rejected: interviews.filter((interview) => interview.status === "REJECTED").length,
    };

    return summary;
  }

  async update(userId: string, interviewId: string, updateInterviewDto: UpdateInterviewDto): Promise<Interview> {
    await this.validateInterviewOwnership.execute(userId, interviewId);
    return this.interviewsRepository.update({ where: { id: interviewId }, data: { ...updateInterviewDto } });
  }

  async updateStatus(
    userId: string,
    interviewId: string,
    updateInterviewStatusDto: UpdateInterviewStatusDto,
  ): Promise<Interview> {
    const { status } = updateInterviewStatusDto;

    await this.validateInterviewOwnership.execute(userId, interviewId);
    return this.interviewsRepository.update({ where: { id: interviewId }, data: { status } });
  }

  async delete(userId: string, interviewId: string) {
    await this.validateInterviewOwnership.execute(userId, interviewId);
    await this.interviewsRepository.delete({ where: { id: interviewId } });
  }
}
