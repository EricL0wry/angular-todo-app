import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = Todos;

  constructor() {}

  ngOnInit(): void {}
}
