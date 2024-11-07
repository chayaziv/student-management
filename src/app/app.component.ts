import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/students-list/students-list.component';

//import { StudentListComponent } from './components/students-list/students-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-component'



}
