import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from './customer.model'

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: Customer[], searchTerm: string): Customer[] {
    
    if(!customers || !searchTerm){
      return customers
    }

    searchTerm = searchTerm.toLowerCase()

    //Filter on the basis of first name
    return customers.filter(customer=>
    customer.firstName.toLowerCase().includes(searchTerm))
  }

}
