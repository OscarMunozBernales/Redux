import { createAction, props } from '@ngrx/store';

export const setFilterTodoAction = createAction(
  '[FILTER TODO] Set Filter',
  props<{ filter: string }>()
);
