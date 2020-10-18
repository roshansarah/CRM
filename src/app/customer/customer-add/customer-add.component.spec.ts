import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAddComponent } from './customer-add.component';
import { By ,BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule,FormGroup } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CustomerService } from '../../shared/customer.service';
import { Router, RouterModule } from '@angular/router';



describe('CustomerAddComponent', () => {
  let component: CustomerAddComponent;
  let fixture: ComponentFixture<CustomerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddComponent ],
      imports:[ReactiveFormsModule,HttpClientModule,RouterModule.forRoot([]),],
      providers:[CustomerService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Customer Add Component', () => {
    expect(component).toBeDefined();
  });

  it('should create a FormGroup', () => {
    component.ngOnInit();
    expect(component.customerForm instanceof FormGroup).toBe(true);
});

  it('should check if form is valid when values are entered',()=>{
    component.ngOnInit();
    let firstName=component.customerForm.controls['firstName']
    firstName.setValue('Sam')
    let lastName = component.customerForm.controls['lastName']
    lastName.setValue('Tom')
     let dateOfBirth = component.customerForm.controls['dateOfBirth']
     dateOfBirth.setValue(new Date('1998-05-11T14:00:00.000Z'))
    
    expect(component.customerForm.valid).toBeTruthy()
  })
});
