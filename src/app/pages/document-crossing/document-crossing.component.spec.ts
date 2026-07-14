import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCrossingComponent } from './document-crossing.component';

describe('DocumentCrossingComponent', () => {
  let component: DocumentCrossingComponent;
  let fixture: ComponentFixture<DocumentCrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCrossingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
