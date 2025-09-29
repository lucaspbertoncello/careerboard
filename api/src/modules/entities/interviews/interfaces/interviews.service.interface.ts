import { Interview } from "@prisma/client";
import { CreateInterviewDto } from "../dto/create-interview.dto";
import { FilterInterviewDto } from "../dto/filter-interview.dto";
import { UpdateInterviewDto } from "../dto/update-interview.dto";
import { UpdateInterviewStatusDto } from "../dto/update-interview-status.dto";
import { IInterviewsSummary } from "./interviews-summary.interface";

export interface IInterviewsService {
  create(createInterviewDto: CreateInterviewDto, userId: string): Promise<Interview>;
  findAllByUserId(userId: string, filters: FilterInterviewDto): Promise<Interview[] | null | Interview>;
  getInterviewsSummaryByUserId(userId: string): Promise<IInterviewsSummary>;
  update(userId: string, interviewId: string, updateInterviewDto: UpdateInterviewDto): Promise<Interview>;
  updateStatus(userId: string, interviewId: string, updateInterviewStatusDto: UpdateInterviewStatusDto): Promise<Interview>;
  delete(userId: string, interviewId: string): Promise<void>;
}
