import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    todoName: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  constructor(private todoService: TodoService) {}

  submitTodo(): void {
    if (this.todoName.valid) {
      this.todoService.addTodo(this.todoForm.value.todoName);
      this.todoForm.setValue({ todoName: '' });
    }
  }

  get todoName(): AbstractControl | null {
    return this.todoForm.get('todoName');
  }
}
