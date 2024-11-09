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
      '01-02-2024'
    ),
    new Student(
      '389554747',
      'sari',
      'miler',
      '036161828',
      'BB',
      'a34@gmail.com',
      false,
      '01-02-2020'
    ),
    new Student(
      '2669554321',
      'shoshi',
      'diner',
      '036161828',
      'BB',
      'a34@gmail.com',
      true,
      '01-02-2025'
    ),
    new Student(
      '2247986614',
      'rachel',
      'choen',
      '036161828',
      'BB',
      'a34@gmail.com',
      true,
      '01-02-2026'
    ),
  ];

  deleteStudent = (student: Student) => {
    this.studentList = this.studentList.filter((s) => s.id != student.id);
  };

  studentToEdit?: Student ;

  editStudent = (student: Student) => {
    this.studentToEdit = student;
  };
  flagAdd: boolean = false;
  addStudent = () => {
    this.flagAdd = true;
  };
  updateStudent = (student: Student) => {
    const index = this.studentList.findIndex((s) => s.id == student.id);
    if (index == -1) this.studentList = [...this.studentList, student];
    else {
      //how should i do the update??
      this.studentList[index] = student;
    }
  };
}
