import { createReducer, on } from '@ngrx/store';
import { createTodoAction } from './todo.actions';
import { TodoModel } from './todo.model';

export const initialState: TodoModel[] = [
  {
    id: new Date().getTime(),
    texto: 'Salvar al mundo',
    completado: false
  },
];

export const todoReducer = createReducer(
  initialState,
  on(createTodoAction, (state, { texto }) => [...state, { id: new Date().getTime(), texto: texto, completado: false }])
);
