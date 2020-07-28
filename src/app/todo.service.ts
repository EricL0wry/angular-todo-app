import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Todo[] {
    return Todos;
  }

  addTodo(todo: string): void {
    const nextId = Todos[Todos.length - 1].id + 1;
    const newTodo = {
      id: nextId,
      status: 'new',
      todo,
    };
    Todos.push(newTodo);
  }
}
