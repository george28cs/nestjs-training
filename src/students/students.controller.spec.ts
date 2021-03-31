import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { studentsProviders } from './students.providers';

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [StudentsService, ...studentsProviders],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});