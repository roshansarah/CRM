import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { Customer } from '../../shared/customer.model'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Observable<Customer[]>
  searchTerm:string

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.getCustomers()

  }

  //Delete Customer
  onDeleteCustomer(id: string) {

    this.customerService.deleteCustomer(id)        
  }

  //Get customer list
  getCustomers() {

    this.customers=this.customerService.getCustomers()
      .pipe(
        map(c=>{
         return c.map(d=>{
            const data = d.payload.doc.data() as Customer
            const id = d.payload.doc.id
              return {id,...data} 
          })
           
        })
      )   
  }
}
