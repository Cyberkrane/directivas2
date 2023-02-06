import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from '../service/empleados.service';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoDeLista!: Empleado;// esta informacion viene del padre.
  @Input() indice!: number;


  constructor(private myService: EmpleadosService) { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.myService.mostrarMensaje(nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
    
  }
}
