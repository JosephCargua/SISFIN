import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankReconciliationsComponent } from './bank-reconciliations.component';

describe('BankReconciliationsComponent', () => {
  let component: BankReconciliationsComponent;
  let fixture: ComponentFixture<BankReconciliationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankReconciliationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankReconciliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
