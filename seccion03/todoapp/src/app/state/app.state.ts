import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./filter/filter.reducer";
import { TodoModel } from "./todo/todo.model";
import { todoReducer } from "./todo/todo.reducer";


export interface AppState{
  todo: TodoModel[],
  filter: string
}

export const appReducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
  filter: filterReducer,
}
