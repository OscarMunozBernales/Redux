import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './state/contador/contador.actions';

interface StoreContador{
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contador: number;

  constructor(
    private _store: Store<StoreContador>
  ){
  }

  ngOnInit(): void {
    this._store.subscribe(state => {
      console.log("🚀 ~ file: app.component.ts ~ line 19 ~ AppComponent ~ ngOnInit ~ state", state);
      this.contador = state.contador
    });
  }

  incrementar(){
    this._store.dispatch( actions.incrementar() )
  }

  decrementar(){
    this._store.dispatch( actions.decrementar() )
  }
}
