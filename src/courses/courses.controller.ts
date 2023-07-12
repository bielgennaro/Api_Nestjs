import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response): string {
    return response.status(302).send('Lista de cursos');
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return `Curso #${id}`;
  }

  @Post('/create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: string) {
    return body;
  }
}
