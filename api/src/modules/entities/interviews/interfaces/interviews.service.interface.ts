import { Interview } from "@prisma/client";
import { CreateInterviewDto } from "../dto/create-interview.dto";

export interface IInterviewsService {
  create(createInterviewDto: CreateInterviewDto, userId: string): Promise<Interview>;
}
