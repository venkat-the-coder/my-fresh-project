export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export type CreateTodoDto = Pick<Todo, 'title' | 'description'>;
export type UpdateTodoDto = Partial<Pick<Todo, 'title' | 'description' | 'completed'>>;
