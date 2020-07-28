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
    let nextId: number;
    if (Todos.length >= 1) {
      nextId = Todos[Todos.length - 1].id + 1;
    } else {
      nextId = 1;
    }

    const newTodo = {
      id: nextId,
      status: 'new',
      todo,
    };
    Todos.push(newTodo);
  }

  deleteTodo(id: number): void {
    const index = Todos.findIndex((todo) => todo.id === id);
    Todos.splice(index, 1);
  }
}
