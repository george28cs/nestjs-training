import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Ruta para crear estudiantes' })
  @ApiBody({
    description: 'Datos para creación de estudiantes',
    type: CreateStudentDto,
  })
  @ApiOkResponse({
    schema: {
      allOf: [
        {
          properties: {
            status: {
              type: 'number',
            },
            data: {
              type: 'array',
              items: { $ref: getSchemaPath(CreateStudentDto) },
            },
          },
        },
      ],
    },
  })
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const createdStudent = await this.studentsService.create(createStudentDto);
    const successResponse = {
      status: 200,
      data: createdStudent,
    };
    return successResponse;
  }

  @ApiOperation({ summary: 'Ruta para consultar estudiantes registrados' })
  @ApiOkResponse({
    schema: {
      allOf: [
        {
          properties: {
            status: {
              type: 'number',
            },
            data: {
              type: 'object',
            },
          },
        },
      ],
    },
  })
  @ApiQuery({
    name: 'createdAt',
    description: 'Fecha de creación',
    type: Date,
    example: '2022-01-15',
  })
  @Get()
  async findAll(@Query('createdAt') createdAt: Date) {
    const students = await this.studentsService.findAll(createdAt);
    const successResponse = {
      status: 200,
      data: students,
    };
    return successResponse;
  }
}
