import {Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
    selector:'app-forgot-password',
    templateUrl:'./forgot-password.component.html'
})
export class ForgotPasswordComponent{

    constructor(private authService:AuthService){
        
    }

    resetEmail(email:string){
        this.authService.forgotPassword(email)
    }
}