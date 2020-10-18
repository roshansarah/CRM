import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';


const appRoutes: Routes=[
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'add',component:CustomerAddComponent},
  {path:'edit/:id',component:CustomerAddComponent},
  {path:'customer',component:CustomerListComponent},
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
