import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent{

  @Output() CaracteristicasEmpleado = new EventEmitter<string>();

  constructor() { }

  agregarCaracteristicas(value: string){
    this.CaracteristicasEmpleado.emit(value)
  }
}
