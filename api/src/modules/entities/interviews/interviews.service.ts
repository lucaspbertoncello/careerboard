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
import { MONTHS } from "src/shared/constants/months";

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
    // get all interviews
    const interviews = await this.interviewsRepository.findMany({ where: { userId }, select: { status: true } });
    // get last 3 interviews
    const recentInterviews = await this.interviewsRepository.findMany({
      where: { userId },
      orderBy: { appliedAt: "desc" },
      take: 3,
    });

    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(Date.UTC(currentYear, 0, 1));
    const endOfYear = new Date(Date.UTC(currentYear, 11, 31, 23, 59, 59));

    // get all interviews on current year
    const yearlyInterviews = await this.interviewsRepository.findMany({
      where: {
        userId,
        appliedAt: {
          gte: startOfYear,
          lte: endOfYear,
        },
      },

      select: {
        appliedAt: true,
        status: true,
      },
    });

    const currentYearInterviews = MONTHS.map((month, index) => {
      const monthInterviews = yearlyInterviews.filter((interview) => {
        const interviewMonth = new Date(interview.appliedAt).getMonth();
        return interviewMonth === index;
      });

      return {
        month: month,
        total: monthInterviews.length,
        approved: monthInterviews.filter((i) => i.status === "APPROVED").length,
        pending: monthInterviews.filter((i) => i.status === "PENDING").length,
        rejected: monthInterviews.filter((i) => i.status === "REJECTED").length,
      };
    });

    const interviewsStats = {
      total: interviews.length,
      approved: interviews.filter((interview) => interview.status === "APPROVED").length,
      pending: interviews.filter((interview) => interview.status === "PENDING").length,
      rejected: interviews.filter((interview) => interview.status === "REJECTED").length,
    };

    const summary: IInterviewsSummary = {
      interviewsStats,
      recentInterviews,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      currentYearInterviews: currentYearInterviews as any,
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
