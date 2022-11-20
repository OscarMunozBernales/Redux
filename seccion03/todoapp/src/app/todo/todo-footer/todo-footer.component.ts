import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { setFilterTodoAction } from 'src/app/state/filter/filter.actions';
import { deleteAllTodoAction } from 'src/app/state/todo/todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filters: string[] = [ 'TODOS', 'ACTIVOS', 'COMPLETADOS' ];
  public currentFilter: string;
  public pendigTask: number = 0;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this._store.subscribe(
      state => {
        this.pendigTask    = state.todo.filter( filter => !filter.completado ).length;
        this.currentFilter = state.filter;
      }
    );

  }

  filterAction( filter: string ){
    this._store.dispatch( setFilterTodoAction({ filter: filter }));

  }

  deleteAllTodo(): void{
    this._store.dispatch( deleteAllTodoAction() );
  }

}
