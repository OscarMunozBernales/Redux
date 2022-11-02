import { createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";

export const contadorInicial: number = 10;

export const contadorReducer = createReducer(
  contadorInicial,
  on(incrementar, state => state + 1 ),
  on(decrementar, state => state - 1 ),
);
