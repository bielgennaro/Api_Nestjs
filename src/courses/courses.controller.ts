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
import { CreateCoursesDto } from './dto/create-courses.dto';
import { UpdateCoursesDto } from './dto/update-courses.dto';

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
  create(@Body() createCourseDto: CreateCoursesDto) {
    return this.courseService.create(createCourseDto);
  }

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() updateCoursesDto: UpdateCoursesDto) {
    return this.courseService.update(id, updateCoursesDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}
