import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { studentsProviders } from './students.providers';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, ...studentsProviders],
})
export class StudentsModule {}
