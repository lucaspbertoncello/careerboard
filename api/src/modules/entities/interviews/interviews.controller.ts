import { Controller, Post, Body, Get, Query, Put, Param, ParseUUIDPipe, Patch, Delete, HttpCode } from "@nestjs/common";
import { InterviewsService } from "./interviews.service";
import { CreateInterviewDto } from "./dto/create-interview.dto";
import { UserId } from "src/shared/decorators/user-id.decorator";
import { FilterInterviewDto } from "./dto/filter-interview.dto";
import { UpdateInterviewDto } from "./dto/update-interview.dto";
import { UpdateInterviewStatusDto } from "./dto/update-interview-status.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("interviews")
@ApiBearerAuth()
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

  @Get("summary")
  getInterviewsSummaryByUserId(@UserId() userId: string) {
    return this.interviewsService.getInterviewsSummaryByUserId(userId);
  }

  @Put(":interviewId")
  update(
    @UserId() userId: string,
    @Param("interviewId", ParseUUIDPipe) interviewId: string,
    @Body() updateInterviewDto: UpdateInterviewDto,
  ) {
    return this.interviewsService.update(userId, interviewId, updateInterviewDto);
  }

  @Patch(":interviewId/status")
  updateStatus(
    @UserId() userId: string,
    @Param("interviewId", ParseUUIDPipe) interviewId: string,
    @Body() updateInterviewStatusDto: UpdateInterviewStatusDto,
  ) {
    return this.interviewsService.updateStatus(userId, interviewId, updateInterviewStatusDto);
  }

  @Delete(":interviewId")
  @HttpCode(204)
  delete(@UserId() userId: string, @Param("interviewId", ParseUUIDPipe) interviewId: string) {
    return this.interviewsService.delete(userId, interviewId);
  }
}
