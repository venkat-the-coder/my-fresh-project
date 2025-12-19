import { Injectable, signal, computed } from '@angular/core';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly STORAGE_KEY = 'todos';

  private todosSignal = signal<Todo[]>(this.loadFromStorage());

  readonly todos = this.todosSignal.asReadonly();

  readonly completedTodos = computed(() =>
    this.todosSignal().filter(todo => todo.completed)
  );

  readonly pendingTodos = computed(() =>
    this.todosSignal().filter(todo => !todo.completed)
  );

  readonly totalCount = computed(() => this.todosSignal().length);
  readonly completedCount = computed(() => this.completedTodos().length);
  readonly pendingCount = computed(() => this.pendingTodos().length);

  addTodo(dto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.generateId(),
      title: dto.title.trim(),
      description: dto.description?.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.todosSignal.update(todos => [...todos, newTodo]);
    this.saveToStorage();
    return newTodo;
  }

  updateTodo(id: string, dto: UpdateTodoDto): Todo | null {
    let updatedTodo: Todo | null = null;

    this.todosSignal.update(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          updatedTodo = {
            ...todo,
            ...dto,
            title: dto.title?.trim() ?? todo.title,
            description: dto.description?.trim() ?? todo.description,
            updatedAt: new Date()
          };
          return updatedTodo;
        }
        return todo;
      })
    );

    this.saveToStorage();
    return updatedTodo;
  }

  toggleTodo(id: string): void {
    this.todosSignal.update(todos =>
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
    this.saveToStorage();
  }

  deleteTodo(id: string): void {
    this.todosSignal.update(todos => todos.filter(todo => todo.id !== id));
    this.saveToStorage();
  }

  clearCompleted(): void {
    this.todosSignal.update(todos => todos.filter(todo => !todo.completed));
    this.saveToStorage();
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }

  private loadFromStorage(): Todo[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const todos = JSON.parse(stored) as Todo[];
        return todos.map(todo => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          updatedAt: todo.updatedAt ? new Date(todo.updatedAt) : undefined
        }));
      }
    } catch (error) {
      console.error('Error loading todos from storage:', error);
    }
    return [];
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todosSignal()));
    } catch (error) {
      console.error('Error saving todos to storage:', error);
    }
  }
}
