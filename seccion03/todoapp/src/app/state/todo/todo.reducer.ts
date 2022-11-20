import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { TodoModel } from './todo.model';

export let initialState: TodoModel[] = [
  new TodoModel('Salvar al mundo 1'),
  new TodoModel('Comprar agua'),
  new TodoModel('Cargar celular'),
];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodoAction, (state, { texto }) => [...state, new TodoModel(texto)]),
  on(actions.completedTodoAction, ( state, { id }) => {
    return state.map( todo => {
      return todo.id === id
        ? { ...todo, completado: !todo.completado }
        : todo
    });
  })
);
