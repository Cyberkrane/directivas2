import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../models/empleado.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  empleado!: Empleado;
  accion!: number;
  constructor(
    private servicioDeDatos: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accionUrl']);
    this.empleados = this.servicioDeDatos.empleados;
    this.indice = this.route.snapshot.params['id'];
    this.empleado = this.servicioDeDatos.encontrarEmpleado(this.indice);
    
    this.Qnombre = this.empleado.nombre;
    this.Qapellido = this.empleado.apellido;
    this.Qcargo = this.empleado.cargo;
    this.Qsalario = this.empleado.salario;
  }

  Qnombre: string = '';
  Qapellido: string = '';
  Qcargo: string = '';
  Qsalario: number = 0;

  indice: number = 0;

  empleados: Empleado[] = [];

  // actualizaEmpleado() {
  //   let nuevoEmpleado = new Empleado(this.Qnombre, this.Qapellido, this.Qcargo, this.Qsalario);
  //   this.servicioDeDatos.actualizarEmpleadoService(this.indice, nuevoEmpleado);
  //   this.router.navigate(['home']);
  // }

  // eliminaEmpleado(){
  //   this.servicioDeDatos.eliminarEmpleado(this.indice);
  //   this.router.navigate(['home']);
  // }

  actualizaEmpleado() {

    if (this.accion == 1) {
      let nuevoEmpleado = new Empleado(this.Qnombre, this.Qapellido, this.Qcargo, this.Qsalario);
      this.servicioDeDatos.actualizarEmpleadoService(this.indice, nuevoEmpleado);
      this.router.navigate(['home']);
    } else{
      this.servicioDeDatos.eliminarEmpleado(this.indice);
      this.router.navigate(['home']);
    }
  }

}
