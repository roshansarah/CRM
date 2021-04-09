import {Injectable, Inject} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {  } from 'firebase/app';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class AuthService{

    //user$:Observable<any>;
    userData: any;
    public currentUser: Observable<any>;
    private currentUserSubject: BehaviorSubject<any>
    //private authStatus: Subject<boolean>
    //public isAuthenticated$


    constructor(private firestore :AngularFirestore,
    private fireAuth:AngularFireAuth, private router:Router){

        //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')))
        this.currentUserSubject = new BehaviorSubject<any>(null);
        this.currentUser = this.currentUserSubject.asObservable()

        //this.authStatus = new Subject<boolean>()
        //this.isAuthenticated$ = this.authStatus.asObservable()



        this.fireAuth.authState.subscribe(user=>{
            if(user){
                //this.userData=user;
                //localStorage.setItem('user',JSON.stringify(this.userData))
               
                this.currentUserSubject.next(user)
                //this.authStatus.next(true)
            }else{
                //localStorage.setItem('user',null);
                 this.currentUserSubject.next(null)
                 //this.authStatus.next(false)
            }
            console.log('user in auth service constructor',user)
            
        })

        // this.user$ = this.fireAuth.authState.pipe(
        //     switchMap(user=>{
        //         console.log('auth constructor')
        //      if(user){
                
        //          console.log('user constructor', user.uid)
        //          return this.firestore.doc(`users/${user.uid}`).valueChanges()
        //      }else{
        //         console.log('user constructor null', user)
        //          return of(null)
        //      }
        //     })
       // )
    }

    //Login 
    async logIn(email:string,password:string){
        
        var result = await this.fireAuth.signInWithEmailAndPassword(email,password);
        //localStorage.setItem('user',JSON.stringify(result.user))
        this.currentUserSubject.next(result.user)
        //this.authStatus.next(true)
        this.router.navigate(['/customer'])
        
    }

    //Register
    async register(email:string,password:string){
        var result=await this.fireAuth.createUserWithEmailAndPassword(email,password)
       
    }

    //Forgot Password
    async forgotPassword(email:string){
        var result =await this.fireAuth.sendPasswordResetEmail(email);
    }

    //Returns true when user is logged in 
    // get isLoggedIn():boolean{
    //      const user = JSON.parse(localStorage.getItem('user'))
    //      console.log('user in isloggedin', user)
    //      return (user !== null ) ? true : false

    // }

    //Signout
    async logOut(){
         var result =await this.fireAuth.signOut()
        //localStorage.removeItem('user')
        this.currentUserSubject.next(null)
       // this.authStatus.next(false)
        this.router.navigate(['login'])
        

    }

    

}