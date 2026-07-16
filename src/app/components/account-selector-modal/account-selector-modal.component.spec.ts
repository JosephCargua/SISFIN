import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectorModalComponent } from './account-selector-modal.component';

describe('AccountSelectorModalComponent', () => {
  let component: AccountSelectorModalComponent;
  let fixture: ComponentFixture<AccountSelectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSelectorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSelectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
