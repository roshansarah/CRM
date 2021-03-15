import {Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector:'app-forgot-password',
    templateUrl:'./forgot-password.component.html'
})
export class ForgotPasswordComponent{

    faEnvelope = faEnvelope;
    
    constructor(private authService:AuthService){
        
    }

    resetEmail(email:string){
        this.authService.forgotPassword(email)
    }
}