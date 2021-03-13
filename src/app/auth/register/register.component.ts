import {Component, OnInit} from '@angular/core';
// import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { NgForm } from '@angular/forms';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-register',
    templateUrl:'./register.component.html'

})
export class RegisterComponent implements OnInit{

    faEnvelope = faEnvelope;
    faKey = faKey;

    constructor( private authService:AuthService){}

    ngOnInit(){
        //console.log('Hi')

    }

    register(form:NgForm){
         this.authService.register(form.value.email,form.value.password)
    }
}