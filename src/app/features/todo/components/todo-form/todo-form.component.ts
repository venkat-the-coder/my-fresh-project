import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTodoDto } from '../../../../core/models';
import { CategorySelect } from '../category-select/category-select';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, CategorySelect],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  todoAdded = output<CreateTodoDto>();

  title = '';
  description = '';
  categoryId: string | undefined = undefined;

  onSubmit(): void {
    if (!this.title.trim()) {
      return;
    }

    this.todoAdded.emit({
      title: this.title,
      description: this.description || undefined,
      categoryId: this.categoryId
    });

    this.title = '';
    this.description = '';
    this.categoryId = undefined;
  }
}
