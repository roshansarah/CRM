import {Component, OnInit} from '@angular/core';
// import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
    selector: 'app-register',
    templateUrl:'./register.component.html'

})
export class RegisterComponent implements OnInit{

    constructor( private authService:AuthService){}

    ngOnInit(){
        //console.log('Hi')

    }

    register(email:string,password:string){
         this.authService.register(email,password)
    }
}