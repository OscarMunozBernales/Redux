import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { createTodoAction } from 'src/app/state/todo/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  public txtInput: FormControl;

  constructor(
    private _store: Store<AppState>
  ){
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){
    if(this.txtInput.invalid) return;
    this._store.dispatch( createTodoAction({ texto: this.txtInput.value }) );
    this.txtInput.reset();
  }

}
