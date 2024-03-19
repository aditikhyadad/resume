import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalhistoryComponent } from './legalhistory.component';

describe('LegalhistoryComponent', () => {
  let component: LegalhistoryComponent;
  let fixture: ComponentFixture<LegalhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
