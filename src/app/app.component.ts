import { Component,OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'customerApp';
  isLoggedIn:boolean=false;
  currentUser:any;
  currentUserSubscription: Subscription;

  navbarOpen=false;

  constructor(private modalService:NgbModal,public authService:AuthService){
      //  this.currentUserSubscription = this.authService.currentUser.subscribe((user)=>{
      //    this.currentUser =user;
      //  })
  }

  ngOnInit(){
      //this.isLoggedIn = this.authService.isLoggedIn
      //console.log('authservice user value', this.authService.user$)
      //this.authService.user$.subscribe()
      console.log('app compo: current user value', this.authService.currentUser)
  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

 openForm(){
   const modalLogin = this.modalService.open(LoginComponent)
 }
 
 logOut(){
   this.authService.logOut()
 }
 


 
}
