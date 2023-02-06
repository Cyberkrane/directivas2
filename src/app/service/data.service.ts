import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from './empleados.service';
import { RealtimeService } from './realtimeDB.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private servicioVentanaEmergente: EmpleadosService,
    private basedeDatosEmpleadosFire: RealtimeService) { }

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados
  }


  cargarEmpleados() {
    return this.basedeDatosEmpleadosFire.obtenerEmpleados();
  }

  empleados: Empleado[] = [];

  // empleados: Empleado[] = [
  //   new Empleado("Rolando", "Corral", "Presidente", 10000),// esto es una instancia de la clase empleado.
  //   new Empleado("Ana", "Karousky", "Tactica y estrategia", 8000),
  //   new Empleado("Marcos", "Ventana", "Operativo", 5000),
  //   new Empleado("juliana", "birmen", "Operativa", 5000),
  // ];

  agregarEmpleadoService(empleado: Empleado) {
    this.servicioVentanaEmergente.mostrarMensaje("persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario)
    this.empleados.push(empleado);

    this.basedeDatosEmpleadosFire.guardarEmpleados(this.empleados)

  }

  actualizarEmpleadoService(indice: number, empleado: Empleado) {

    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.basedeDatosEmpleadosFire.actualizarEmleado(indice, empleado)

  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
    this.basedeDatosEmpleadosFire.elimianarEmpleado(indice);
    if (this.empleados != null) this.basedeDatosEmpleadosFire.guardarEmpleados(this.empleados);
    
    
  }

}
