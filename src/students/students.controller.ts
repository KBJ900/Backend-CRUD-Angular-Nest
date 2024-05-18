import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Student {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Student[] {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Student {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: Partial<CreateStudentDto>): Student {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.studentsService.remove(+id);
  }
}
