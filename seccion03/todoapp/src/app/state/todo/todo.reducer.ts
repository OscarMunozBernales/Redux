import { createReducer, on } from '@ngrx/store';
import { createTodoAction } from './todo.actions';
import { TodoModel } from './todo.model';

export const initialState: TodoModel[] = [];

export const todoReducer = createReducer(
  initialState,
  on(createTodoAction, (state, {texto}) => [...state, new TodoModel(texto)])
);
