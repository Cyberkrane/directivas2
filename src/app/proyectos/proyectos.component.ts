import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../models/empleado.model';
import { DataService } from '../service/data.service';
import { EmpleadosService } from '../service/empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(
    private MyService: EmpleadosService, 
    private servicioDeDatos: DataService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  Qnombre: string = '';
  Qapellido: string = '';
  Qcargo: string = '';
  Qsalario: number = 0;
  
  empleados: Empleado[] = [];
  
  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.Qnombre, this.Qapellido, this.Qcargo, this.Qsalario);
    this.servicioDeDatos.agregarEmpleadoService(nuevoEmpleado);
    this.router.navigate(['home']);
    // this.MyService.mostrarMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
  }

}
