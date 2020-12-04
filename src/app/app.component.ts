import { Component } from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerApp';
  faCheckCircle =faCheckCircle;
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
