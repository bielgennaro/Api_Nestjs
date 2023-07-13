import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}

  @Get('list')
  findAll() {
    return this.courseService.findAll();
  }

  @Get('unique/:id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: string) {
    return this.courseService.create(body);
  }

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() body: string) {
    return this.courseService.update(id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}
