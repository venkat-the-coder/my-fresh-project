import { Component, input, output } from '@angular/core';
import { Todo } from '../../../../core/models';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();

  toggled = output<string>();
  deleted = output<string>();

  onToggle(): void {
    this.toggled.emit(this.todo().id);
  }

  onDelete(): void {
    this.deleted.emit(this.todo().id);
  }
}
