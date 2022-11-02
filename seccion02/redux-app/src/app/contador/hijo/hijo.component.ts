import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetContador(event: number){
    this.contador = event;
    this.cambioContador.emit(event);
  }

}