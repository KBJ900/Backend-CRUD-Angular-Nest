import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private idCounter = 1;

  create(createStudentDto: CreateStudentDto): Student {
    const student: Student = {
      id: this.idCounter++,
      ...createStudentDto,
    };
    this.students.push(student);
    return student;
  }

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    return this.students.find(student => student.id === id);
  }

  update(id: number, updateStudentDto: Partial<CreateStudentDto>): Student {
    const student = this.findOne(id);
    if (student) {
      Object.assign(student, updateStudentDto);
    }
    return student;
  }

  remove(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }
}
