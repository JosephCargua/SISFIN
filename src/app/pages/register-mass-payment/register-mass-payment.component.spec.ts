import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMassPaymentComponent } from './register-mass-payment.component';

describe('RegisterMassPaymentComponent', () => {
  let component: RegisterMassPaymentComponent;
  let fixture: ComponentFixture<RegisterMassPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMassPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMassPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
