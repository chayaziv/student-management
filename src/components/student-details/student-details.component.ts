import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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

  change(): void { }
  

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
    const studentToSave: Student = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      address: address,
      email: email,
      active: isActive,
      leavingDate: date,
    };
    this.saveStudentDetails.emit(studentToSave);
  }
  closeDetails = () => {
    this.saveStudentDetails.emit();
  }
}
