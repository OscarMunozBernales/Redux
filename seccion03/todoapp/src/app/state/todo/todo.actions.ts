import { createAction, props } from '@ngrx/store';

export const createTodoAction = createAction(
  '[TODO] Create TODO',
  props<{ texto: string }>()
);

export const completedTodoAction = createAction(
  '[TODO] completed TODO item',
  props<{ id: number }>()
);

export const editTextTodoAction = createAction(
  '[TODO] Edit text TODO item',
  props<{ id: number, text: string }>()
);

export const deleteTodoACtion = createAction(
  '[TODO] Delete todo action',
  props<{ id: number }>()
);


