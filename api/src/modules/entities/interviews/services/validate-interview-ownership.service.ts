import { Injectable, NotFoundException } from "@nestjs/common";
import { InterviewsRepository } from "src/shared/repositories/interviews.repository";
import { IValidateInterviewOwnership } from "../interfaces/validate-interview-ownership.interface";

@Injectable()
export class ValidateInterviewOwnership implements IValidateInterviewOwnership {
  constructor(private readonly interviewsRepository: InterviewsRepository) {}

  async execute(userId: string, interviewId: string): Promise<boolean | null> {
    if (!interviewId) {
      return null;
    }

    const isOwner = await this.interviewsRepository.findFirst({
      where: { userId, id: interviewId },
    });

    if (!isOwner) {
      throw new NotFoundException("Interview not found.");
    }

    return true;
  }
}
