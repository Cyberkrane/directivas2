import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Lista de empleados';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyCy27sN0ELaKt3uY2sD31BCExBy-7QzBtY",
      authDomain: "empleados-830bc.firebaseapp.com",
    })
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['home'])
  }

}
