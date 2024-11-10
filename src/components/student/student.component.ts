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
  student?: Student;
  @Output()
  deleteStudent = new EventEmitter<Student>();
  @Output()
  editStudent = new EventEmitter<Student>();

  delete = ():void => {
    this.deleteStudent.emit(this.student);
  };
  edit = ():void => {
    this.editStudent.emit(this.student);
  };
}
