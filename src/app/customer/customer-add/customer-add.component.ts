import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Customer} from '../../shared/customer.model'
import { CustomerService } from '../../shared/customer.service';
import { Params, ActivatedRoute } from '@angular/router';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  model:NgbDateStruct;
  faCalender=faCalendar;

  id:string//need to check

  editMode:boolean=false

  submitted:boolean=false
  
  customerForm:FormGroup

  btnDisable:boolean

  constructor(private customerService:CustomerService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

     console.log("Customer Add")
       this.route.params.subscribe((params:Params)=>{
        
        this.id =params['id'];
        console.log('id',this.id)

         if(this.id)
         this.editMode=true;    
   
       this.initform()
       })
     
  }

  onSubmit(){
    
    this.submitted=true

    if(this.customerForm.invalid){
      return
    }

   
    //console.log(this.customerForm.value)
    // let ngbDate = this.customerForm.value.dateOfBirth
    // let myDate = new Date(ngbDate.year, ngbDate.month -1, ngbDate.day )

    let customer = this.customerForm.value
    // customer['dateOfBirth'] = myDate
    // console.log('customer',customer)
    
    if(this.editMode){
       this.customerService.updateCustomer(customer,this.id)
       .then(result=>console.log(result))
    }else{
      this.customerService.createCustomer(customer)
      .then(()=>{
        console.log('Success')
      })

    }
    
    //To Disable submit button & display success message
    this.btnDisable=true

  }

  initform(){
    let firstName=''
    let lastName=''
    let dateOfBirth=null
    let email=''
    let mobile=''
    let comment

    if(this.editMode){
      this.customerService.getCustomer(this.id).subscribe(result=>{
         console.log('result',result)
         
        this.customerForm.setValue({
          firstName:result['firstName'],
           lastName:result['lastName'],
           email:result['email'],
           mobile:result['mobile'],
           comment:result['comment'],
           dateOfBirth:result['dateOfBirth']
           //dateOfBirth:new Date(result['dateOfBirth'])//Added this to fix binding issue in form
        })
      })

      
    }

      this.customerForm = new FormGroup({
        firstName: new FormControl(firstName,Validators.required),
        lastName: new FormControl(lastName,Validators.required),
        dateOfBirth:new FormControl(dateOfBirth),
        email:new FormControl(email),
        mobile:new FormControl(mobile),
        comment:new FormControl(comment)
      })
  }
}
//Can we pass id in url just like that