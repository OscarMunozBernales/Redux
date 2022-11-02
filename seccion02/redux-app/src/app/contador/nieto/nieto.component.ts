import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreContador } from 'src/app/models/store-contador.model';
import { reset } from 'src/app/state/contador/contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  public contador: number;

  constructor(
    private _store: Store<StoreContador>
  ) { }

  ngOnInit(): void {
    this._store.select('contador').subscribe(
      contador => this.contador = contador
    );
  }

  reset(){
    this._store.dispatch( reset() );
  }

}
