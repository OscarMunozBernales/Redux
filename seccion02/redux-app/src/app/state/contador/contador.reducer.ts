import { createReducer, on } from "@ngrx/store";
import * as actions from "./contador.actions";

export const contadorInicial: number = 10;

export const contadorReducer = createReducer(
  contadorInicial,
  on(actions.incrementar, state => state + 1 ),
  on(actions.decrementar, state => state - 1 ),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero),
  on(actions.reset, state => contadorInicial)
);
