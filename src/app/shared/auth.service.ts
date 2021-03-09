import {Injectable, Inject} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {  } from 'firebase/app';

@Injectable({
    providedIn:'root'
})
export class AuthService{

    user:any;

    constructor(private firestore :AngularFirestore,
    private fireAuth:AngularFireAuth, private router:Router){
        this.fireAuth.authState.subscribe(user=>{
            if(user){
                this.user=user;
                localStorage.setItem('user',JSON.stringify(this.user))
            }else{
                localStorage.setItem('user',null);
            }
        })
    }

    //Login 
    async login(email:string,password:string){
        var result = await this.fireAuth.signInWithEmailAndPassword(email,password);
        
        this.router.navigate(['/add'])
    }

    //Register
    async register(email:string,password:string){
        var result=await this.fireAuth.createUserWithEmailAndPassword(email,password)
        console.log(result.user)
       
    }

    //Forgot Password
    async forgotPassword(email:string){
        var result =await this.fireAuth.sendPasswordResetEmail(email);
        console.log(result)
    }




}