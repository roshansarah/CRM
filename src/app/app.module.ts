import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
//  import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AuthComponent } from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent } from './auth/register/register.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';

import { AppRoutingModule } from './app-routing.module';
import { CustomerFilterPipe } from './shared/customer-filter.pipe';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CustomerFilterPipe,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule
  
  ],
//  entryComponents:[
//     LoginComponent
//     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
