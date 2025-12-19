import { Component } from '@angular/core';
import { TodoListComponent } from './features/todo/components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'My Todo App';
}
