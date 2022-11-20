import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { TodoModel } from 'src/app/state/todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: TodoModel[] = [];

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.select('todo').subscribe(
      todos => this.todos = todos
    );
  }

}
