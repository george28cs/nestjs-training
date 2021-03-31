import { IsNotEmpty } from 'class-validator';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class GetStudentDto {
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  createdAt: Date;
}
