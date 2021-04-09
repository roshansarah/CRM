import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private fireAuth:AngularFireAuth, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      return this.fireAuth.authState.pipe(map((user)=>{
        if(user){
          console.log('in auth guard')
          return true
        }
        this.router.navigate(['/home'])
        console.log('in auth guard')
        return false
      }))
    }
}
