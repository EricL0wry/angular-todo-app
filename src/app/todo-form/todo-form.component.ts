import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    todoName: new FormControl('', [Validators.min(1), Validators.required]),
  });

  submitTodo(): void {
    console.log(this.todoForm.value.todoName);
    this.todoForm.setValue({ todoName: '' });
  }
}
