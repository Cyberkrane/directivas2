import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { DataService } from '../service/data.service';
import { EmpleadosService } from '../service/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private MyService: EmpleadosService, private servicioDeDatos: DataService){
    // this.empleados = this.servicioDeDatos.empleados
  }
    ngOnInit(): void {
      // this.empleados = this.servicioDeDatos.empleados

      this.servicioDeDatos.cargarEmpleados().subscribe(misEmpleados => {
        console.log(misEmpleados);
        this.empleados =Object.values(misEmpleados);
        this.servicioDeDatos.setEmpleados(this.empleados);
      })
    }
  
  Qnombre: string = '';
  Qapellido: string = '';
  Qcargo: string = '';
  Qsalario: number = 0;
  
  empleados: Empleado[] = [];
  
  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.Qnombre, this.Qapellido, this.Qcargo, this.Qsalario);
    this.servicioDeDatos.agregarEmpleadoService(nuevoEmpleado);
    // this.MyService.mostrarMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
  }
}
