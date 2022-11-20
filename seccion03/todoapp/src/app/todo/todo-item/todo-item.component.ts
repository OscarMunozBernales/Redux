import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as actions from 'src/app/state/todo/todo.actions';
import { TodoModel } from 'src/app/state/todo/todo.model';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @ViewChild('idTxtInput') idTxtInput: ElementRef;

  chkComplete: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.chkComplete = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkComplete.valueChanges.subscribe(
      valor => this._store.dispatch(actions.completedTodoAction({ id: this.todo.id }))
    );

  }

  editar(): void {
    this.editando = true;
    this.txtInput.setValue( this.todo.texto );

    setTimeout(() => {
      this.idTxtInput.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;

    if ( this.txtInput.invalid ) { return; }
    if ( this.txtInput.value === this.todo.texto ) { return; }

    this._store.dispatch(actions.editTextTodoAction({
      id: this.todo.id,
      text: this.txtInput.value
    }));
  }

}
