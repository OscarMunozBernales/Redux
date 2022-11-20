import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { completeAllTodoAction } from 'src/app/state/todo/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  complete: boolean = false;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  completeAll(): void{
    this.complete = !this.complete;
    this._store.dispatch( completeAllTodoAction({ complete: this.complete }));
  }

}
