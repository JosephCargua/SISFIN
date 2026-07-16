import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdvanceComponent } from './register-advance.component';

describe('RegisterAdvanceComponent', () => {
  let component: RegisterAdvanceComponent;
  let fixture: ComponentFixture<RegisterAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAdvanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
