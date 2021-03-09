import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Customer } from '../shared/customer.model';
import { catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string= 'http://localhost:3000/customers'

  constructor(private firestore:AngularFirestore) { }

  //Save data in firestore
  createCustomer(customer:Customer){
    
    return this.firestore
           .collection('customers')
           .add({...customer})//send copy of customer obj
           .then(res=>{
             console.log(res)
           })
  }

  //Retrieve data from firestore
    getCustomers(){

    return this.firestore.collection('customers').snapshotChanges()
   }

  getCustomer(id:string){
    
    return this.firestore.collection('customers')
    .doc(id)
    .valueChanges()
    
  }

   updateCustomer(customer:Customer,id:string){//need to change id to number and add return
  
    return this.firestore.collection('customers')
    .doc(id)
    .set(customer,{merge:true});
   }

  deleteCustomer(id:string){//change id to munber
     
    return this.firestore.collection('customers')
    .doc(id)
    .delete()
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
