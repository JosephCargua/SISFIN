import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulledDocumentsComponent } from './annulled-documents.component';

describe('AnnulledDocumentsComponent', () => {
  let component: AnnulledDocumentsComponent;
  let fixture: ComponentFixture<AnnulledDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnulledDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulledDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
