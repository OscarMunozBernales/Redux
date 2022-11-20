import { createReducer, on } from '@ngrx/store';
import { createTodoAction } from './todo.actions';
import { TodoModel } from './todo.model';

export let initialState: TodoModel[] = [
  new TodoModel('Salvar al mundo 1'),
  new TodoModel('Comprar agua'),
  new TodoModel('Cargar celular')
];

export const todoReducer = createReducer(
  initialState,
  on(createTodoAction, (state, { texto }) => [...state, new TodoModel(texto)])
);
