import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
// import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../shared/auth.service';

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

  login(email,password){
    this.authService.login(email,password)
  }
}
