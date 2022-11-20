import { createReducer, on } from '@ngrx/store';
import { setFilterTodoAction } from './filter.actions';

export const initialFilter: string = 'TODOS';

export const filterReducer = createReducer(
  initialFilter,
  on( setFilterTodoAction, ( state, { filter }) => filter)
);
