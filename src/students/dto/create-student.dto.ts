import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  group_id: number;
}
