import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { TodoModel } from 'src/app/state/todo/todo.model';
import { TodoModule } from '../todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @ViewChild('txtInput') txtInput: ElementRef;

  chkComplete: FormControl = new FormControl();
  textINput: FormControl = new FormControl();

  editando: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkComplete.setValue( this.todo.completado );
    this.textINput = new FormControl( this.todo.texto, Validators.required )
  }

  editar(): void {
    this.editando = true;

    setTimeout(() => {
      this.txtInput.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
  }

}
