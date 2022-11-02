import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreContador } from 'src/app/models/store-contador.model';
import * as actions from 'src/app/state/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  public contador: number;
  constructor(
    private _store: Store<StoreContador>
  ) {}

  ngOnInit(): void {
    this._store.select('contador').subscribe(
      contador => this.contador = contador
    );
  }

  multiplicar(){
    this._store.dispatch( actions.multiplicar({ numero : 10}) );
  }

  dividir(){
    this._store.dispatch( actions.dividir({numero: 10}));
  }

}
