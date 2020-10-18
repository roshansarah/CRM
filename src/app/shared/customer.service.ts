import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../shared/customer.model';
import { catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string= 'http://localhost:3000/customers'

  constructor(private http:HttpClient) { }

  //Save data in mock
  createCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl,
    customer).pipe(
      catchError(this.errorHandler)
    )
  }

  //Retrieve customer from mock
  getCustomers():Observable<Customer[]>{
   return this.http.get<Customer[]>(this.apiUrl)
    .pipe(catchError(this.errorHandler))
  }

  getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.apiUrl}/${id}`)
    .pipe(catchError(this.errorHandler))
  }

  updateCustomer(customer:Customer,id:number):Observable<Customer>{
    return this.http.put<Customer>(`${this.apiUrl}/${id}`,customer)
    .pipe(catchError(this.errorHandler))
  }

  deleteCustomer(id:number):Observable<Customer>{
     return this.http.delete<Customer>(`${this.apiUrl}/${id}`)
     .pipe(
      catchError(this.errorHandler)
    )
  }

  //Handle Error
  errorHandler(error){
    let errorMsg ='';
    if(error.error instanceof ErrorEvent){
      errorMsg=error.error.message;
    } else{
      errorMsg=`Error: ${error.message}`
    }
    return throwError(errorMsg)
  }
}
