import { Component, OnInit } from '@angular/core';
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

    let customer = this.customerForm.value
    
    if(this.editMode){
       this.customerService.updateCustomer(this.customerForm.value,this.id)
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

    if(this.editMode){
      this.customerService.getCustomer(this.id).subscribe(result=>{
         console.log('result',result)
        this.customerForm.setValue({
          firstName:result['firstName'],
           lastName:result['lastName'],
          //dateOfBirth:new Date(result.dateOfBirth)//Added this to fix binding issue in form
        })
      })
    }

      this.customerForm = new FormGroup({
        firstName: new FormControl(firstName,Validators.required),
        lastName: new FormControl(lastName,Validators.required),
        //dateOfBirth:new FormControl(dateOfBirth)
      })
  }
}
//Can we pass id in url just like that