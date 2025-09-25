import { Controller, Post, Body } from "@nestjs/common";
import { InterviewsService } from "./interviews.service";
import { CreateInterviewDto } from "./dto/create-interview.dto";
import { UserId } from "src/shared/decorators/user-id.decorator";

@Controller("interviews")
export class InterviewsController {
  constructor(private readonly interviewsService: InterviewsService) {}

  @Post()
  create(@Body() createInterviewDto: CreateInterviewDto, @UserId() userId: string) {
    return this.interviewsService.create(createInterviewDto, userId);
  }
}
