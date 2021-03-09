import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { FaIconComponent } from "@fortawesome/angular-fontawesome";
// import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.style.css']
})
export class HomeComponent implements OnInit {
   
    faCheckCircle =faCheckCircle;
    constructor(){}

    ngOnInit(){}
}