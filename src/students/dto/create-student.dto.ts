import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  first_name: string;
  last_name: string;
  group_id: number;
}
