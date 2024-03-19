import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinHistoryComponent } from './fin-history.component';

describe('FinHistoryComponent', () => {
  let component: FinHistoryComponent;
  let fixture: ComponentFixture<FinHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
