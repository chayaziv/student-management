import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  @Input()
  student?: Student;
  @Output()
  saveStudentDetails = new EventEmitter<Student>();

  sendDetails(
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    email: string,
    isActive: boolean,
    date: string
  ) {
    const studentToSave: Student = new Student(
      id,
      firstName,
      lastName,
      phone,
      address,
      email,
      isActive,
      date
    );
    this.saveStudentDetails.emit(studentToSave);
  }
}
