import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTodoDto } from '../../../../core/models';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  todoAdded = output<CreateTodoDto>();

  title = '';
  description = '';

  onSubmit(): void {
    if (!this.title.trim()) {
      return;
    }

    this.todoAdded.emit({
      title: this.title,
      description: this.description || undefined
    });

    this.title = '';
    this.description = '';
  }
}
