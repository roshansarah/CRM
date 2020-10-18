export class Customer{
    public firstName:string;
    public lastName:string;
    public dateOfBirth:Date;

     constructor(firstName:string, lastName:string, dateOfBirth:Date){
         this.firstName=firstName;
         this.lastName=lastName;
         this.dateOfBirth=dateOfBirth;
     }
}