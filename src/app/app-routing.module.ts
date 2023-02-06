import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { loguinGuard } from './login/loguin-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'proyectos', component: ProyectosComponent, canActivate:[loguinGuard]},
  {path:'quienes-somos', component: QuienesSomosComponent},
  {path:'contactos', component: ContactosComponent, canActivate:[loguinGuard]},
  {path:'actualiza/:id', component: ActualizaComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
