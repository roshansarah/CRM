import { Component, OnInit } from '@angular/core';
import {faUser,faKey} from '@fortawesome/free-solid-svg-icons';
import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser =faUser;
  faKey =faKey;
  
  constructor(public activeModal:NgbActiveModal) { }


  ngOnInit(): void {
  }

}
