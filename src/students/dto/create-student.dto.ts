import { IsString, IsInt, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  age: number;
}
