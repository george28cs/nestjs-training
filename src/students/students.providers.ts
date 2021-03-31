import { Student } from './entities/student.entity';

export const studentsProviders = [
  {
    provide: 'studentsRepository',
    useValue: Student,
  },
];
