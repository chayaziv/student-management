import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent, StudentComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
})
export class StudentListComponent {
  studentList: Student[] = [
    new Student(
      '215252800',
      'chani',
      'ziv',
      '036161828',
      'BB',
      'a34@gmail.com',
      false,
      '2020-02-02'
    ),
    new Student(
      '389554747',
      'sari',
      'miler',
      '036161828',
      'BB',
      'a34@gmail.com',
      false,
      '2020-02-02'
    ),
    new Student(
      '2669554321',
      'shoshi',
      'diner',
      '036161828',
      'BB',
      'a34@gmail.com',
      true,
      ''
    ),
    new Student(
      '2247986614',
      'rachel',
      'choen',
      '036161828',
      'BB',
      'a34@gmail.com',
      true,
      ''
    ),
  ];

  deleteStudent = (student: Student): void => {
    this.studentList = this.studentList.filter((s) => s.id != student.id);
  };

  studentToEdit?: Student;

  editStudent = (student: Student): void => {
    this.studentToEdit = { ...student };
  };
  flagAdd: boolean = false;
  addStudent = (): void => {
    this.flagAdd = true;
  };
  updateStudent = (student: Student): void => {
    if (student == null) {
      this.flagAdd = false;
      this.studentToEdit = undefined;
      return;
    }

    const index = this.studentList.findIndex((s) => s.id == student.id);
    if (index == -1) {
      this.studentList = [...this.studentList, student];
    } else {
      this.studentList[index] = { ...this.studentList[index], ...student };
    }
    this.flagAdd = false;
    this.studentToEdit = undefined;
  };
}
