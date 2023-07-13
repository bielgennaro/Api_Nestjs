import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entitiy';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['nodejs', 'nestjs', 'javascript', 'backend'],
    },
    {
      id: 2,
      name: 'Fundamentos do framework Angular',
      description: 'Fundamentos do framework Angular',
      tags: ['angular', 'javascript', 'frontend'],
    },
    {
      id: 3,
      name: 'Fundamentos do framework React',
      description: 'Fundamentos do framework React',
      tags: ['react', 'javascript', 'frontend'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
