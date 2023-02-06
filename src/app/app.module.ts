import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BotonComponent } from './atom/boton/boton.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { EmpleadosService } from './service/empleados.service';
import { DataService } from './service/data.service';
import { RealtimeService } from './service/realtimeDB.service';
import { LoginService } from './service/login.service';
import { CookieService } from "ngx-cookie-service";
import { loguinGuard } from './login/loguin-guard';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactosComponent,
    BotonComponent,
    ActualizaComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    EmpleadosService, 
    DataService, 
    RealtimeService,
    LoginService,
    CookieService,
    loguinGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
