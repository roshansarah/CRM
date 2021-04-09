import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
// import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../shared/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope = faEnvelope;
  faKey  = faKey;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    
    if(form.invalid){
      return;
    }

    this.authService.logIn(form.value.email,form.value.password)
  }
}
