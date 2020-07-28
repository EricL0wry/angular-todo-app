import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    todoName: new FormControl('', [Validators.min(3), Validators.required]),
  });

  submitTodo(): void {
    if (this.todoName.valid) {
      console.log(this.todoForm.value.todoName);
      this.todoForm.setValue({ todoName: '' });
    } else {
      console.log('Please fill out form');
    }
  }

  get todoName(): AbstractControl | null {
    return this.todoForm.get('todoName');
  }
}
