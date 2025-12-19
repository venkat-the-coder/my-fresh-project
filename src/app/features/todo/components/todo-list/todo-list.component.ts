import { Component, inject } from '@angular/core';
import { TodoService } from '../../../../core/services';
import { CreateTodoDto } from '../../../../core/models';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

type FilterType = 'all' | 'pending' | 'completed';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  private todoService = inject(TodoService);

  todos = this.todoService.todos;
  completedCount = this.todoService.completedCount;
  pendingCount = this.todoService.pendingCount;
  totalCount = this.todoService.totalCount;

  currentFilter: FilterType = 'all';

  get filteredTodos() {
    const allTodos = this.todos();
    switch (this.currentFilter) {
      case 'pending':
        return allTodos.filter(t => !t.completed);
      case 'completed':
        return allTodos.filter(t => t.completed);
      default:
        return allTodos;
    }
  }

  onTodoAdded(dto: CreateTodoDto): void {
    this.todoService.addTodo(dto);
  }

  onTodoToggled(id: string): void {
    this.todoService.toggleTodo(id);
  }

  onTodoDeleted(id: string): void {
    this.todoService.deleteTodo(id);
  }

  onClearCompleted(): void {
    this.todoService.clearCompleted();
  }

  setFilter(filter: FilterType): void {
    this.currentFilter = filter;
  }
}
