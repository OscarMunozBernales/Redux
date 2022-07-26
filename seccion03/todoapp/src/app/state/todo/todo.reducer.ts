import { identifierName } from '@angular/compiler';
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
  on(actions.createTodoAction, ( state, { texto }) => [...state, new TodoModel(texto)]),
  on(actions.completedTodoAction, ( state, { id }) => {
    return state.map( todo => {
      return todo.id === id
        ? { ...todo, completado: !todo.completado }
        : todo
    });
  }),
  on(actions.editTextTodoAction, ( state, { id, text }) => {
    return state.map( todo => {
      return todo.id === id
        ? { ...todo, texto: text }
        : todo
    });
  }),

  on(actions.deleteTodoACtion, ( state, { id }) => {
    return state.filter( todo => {
      return todo.id !== id;
    })
  }),

  on(actions.completeAllTodoAction, (state, { complete }) => {
    return state.map(
      todo => {
        return { ...todo, completado: complete }
      }
    );
  }),

  on(actions.deleteAllTodoAction, (state) => {
    return state.filter( todo => !todo.completado )
  })
);
