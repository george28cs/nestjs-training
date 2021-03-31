import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';
import { Op } from 'sequelize';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('studentsRepository') private studentsRepository: typeof Student,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = new Student();
    student.first_name = createStudentDto.first_name;
    student.last_name = createStudentDto.last_name;
    student.group_id = createStudentDto.group_id;
    const data = await student.save();
    return data;
  }

  async findAll(startDate: Date) {
    const date = JSON.stringify(startDate);
    if (date === 'null') {
      const errorMessage = {
        error: 'Invalid date',
      };
      return errorMessage;
    }
    const students = await this.studentsRepository.findAll({
      where: {
        createdAt: {
          [Op.gt]: startDate,
        },
      },
    });
    return students;
  }
}
