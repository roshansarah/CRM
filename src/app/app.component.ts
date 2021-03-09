import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerApp';
  navbarOpen=false;

  constructor(private modalService:NgbModal){

  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

 openForm(){
   const modalLogin = this.modalService.open(LoginComponent)
 }
 
}
