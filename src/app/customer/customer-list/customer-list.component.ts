import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { Customer } from '../../shared/customer.model'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[]
  searchTerm:string

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.getCustomers()

  }

  onDeleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
    .subscribe(result=>{
      console.log(result)
      this.getCustomers()
    })       
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(result => { this.customers = result })
  }

}
