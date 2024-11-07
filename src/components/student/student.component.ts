import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @Input()
  student: Student | undefined;
  @Output()
  deleteStudent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  editStudent: EventEmitter<any> = new EventEmitter<any>();

  delete = () => {
    this.deleteStudent.emit(this.student);
  };
  edit = () => {
    this.editStudent.emit(this.student);
  };
}
