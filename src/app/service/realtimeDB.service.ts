import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado.model";
import { LoginService } from "./login.service";


@Injectable()

export class RealtimeService {


    constructor(private httpClient: HttpClient,
        private loginServeice: LoginService){}

  
    obtenerEmpleados(){
        const token = this.loginServeice.getIdToken();
        return this.httpClient.get('https://empleados-830bc-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.put('https://empleados-830bc-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log('se han guardado los datos.....'),
            error => console.log(error)
        )
    }

    actualizarEmleado(indice: number, empleado: Empleado){
        let url = 'https://empleados-830bc-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(
            response => console.log('se han guardado los datos del empleado.....' + response),
            error => console.log('Error:' + error)
        )
    }

    elimianarEmpleado(indice: number){
        let url = 'https://empleados-830bc-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log('se han eliminado los datos del empleado.....' + response),
            error => console.log('Error:' + error)
        )
    }
}