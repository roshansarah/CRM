import { Component } from '@angular/core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerApp';
  faCheckCircle =faCheckCircle;
  navbarOpen=false;

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

  scrollToSection(target){
     console.log(target);
     console.log('Hi')
  }
 
}
