import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = [
    {
      id: 1,
      status: 'new',
      todo: 'Wash and wax the car',
    },
    {
      id: 2,
      status: 'new',
      todo: 'Create a menu',
    },
    {
      id: 3,
      status: 'new',
      todo: 'Make a shopping list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
