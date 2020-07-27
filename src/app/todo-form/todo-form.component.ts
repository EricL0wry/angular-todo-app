import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    todoName: new FormControl(''),
  });

  submitTodo(): void {
    console.log(this.todoFormControl.value);
    this.todoFormControl.setValue('');
  }
}
