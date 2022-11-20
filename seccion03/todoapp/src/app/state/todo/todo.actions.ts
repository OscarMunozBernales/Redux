import { createAction, props } from '@ngrx/store';

export const createTodoAction = createAction(
  '[TODO] Create TODO',
  props<{ texto: string }>()
);

export const completedTodoAction = createAction(
  '[TODO] completed TODO item',
  props<{ id: number }>()
);
