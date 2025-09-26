import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { InterviewsService } from "./interviews.service";
import { CreateInterviewDto } from "./dto/create-interview.dto";
import { UserId } from "src/shared/decorators/user-id.decorator";
import { FilterInterviewDto } from "./dto/filter-interview.dto";

@Controller("interviews")
export class InterviewsController {
  constructor(private readonly interviewsService: InterviewsService) {}

  @Post()
  create(@Body() createInterviewDto: CreateInterviewDto, @UserId() userId: string) {
    return this.interviewsService.create(createInterviewDto, userId);
  }

  @Get()
  findAllByUserId(@UserId() userId: string, @Query() filters: FilterInterviewDto) {
    return this.interviewsService.findAllByUserId(userId, filters);
  }
}
