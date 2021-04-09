import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
 import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
 import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import {AuthGuard} from './shared/guard/auth.guard';


const appRoutes: Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'customer',component:CustomerComponent,canActivate:[AuthGuard] ,children:[
  {path:'', component:CustomerListComponent},
  {path:'add',component:CustomerAddComponent},
  {path:'edit/:id',component:CustomerAddComponent},
  {path:'list', redirectTo:'',component:CustomerListComponent},
  {path:'**', redirectTo:'home'}    
  ]},
  
  // {path:'list',component:CustomerListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
