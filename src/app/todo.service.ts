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
}
