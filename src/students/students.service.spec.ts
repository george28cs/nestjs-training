import { Test, TestingModule } from '@nestjs/testing';
import { StudentsService } from './students.service';
import { studentsProviders } from './students.providers';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService, ...studentsProviders],
    }).compile();

    service = module.get<StudentsService>(StudentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
