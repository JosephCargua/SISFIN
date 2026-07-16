import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReconciliationComponent } from './register-reconciliation.component';

describe('RegisterReconciliationComponent', () => {
  let component: RegisterReconciliationComponent;
  let fixture: ComponentFixture<RegisterReconciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterReconciliationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
