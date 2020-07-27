import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoFormControl = new FormControl('');

  submitTodo(control: FormControl): void {
    console.log(control.value);
  }
}
