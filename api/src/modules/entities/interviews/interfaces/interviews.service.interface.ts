import { Interview } from "@prisma/client";
import { CreateInterviewDto } from "../dto/create-interview.dto";
import { FilterInterviewDto } from "../dto/filter-interview.dto";

export interface IInterviewsService {
  create(createInterviewDto: CreateInterviewDto, userId: string): Promise<Interview>;
  findAllByUserId(userId: string, filters: FilterInterviewDto): Promise<Interview[] | null | Interview>;
}
