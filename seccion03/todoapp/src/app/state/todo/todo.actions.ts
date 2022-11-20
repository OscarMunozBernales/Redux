import { createAction, props } from '@ngrx/store';

export const createTodoAction = createAction(
  '[TODO] Create TODO',
  props<{texto: string}>()
);
