import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShistoryComponent } from './shistory.component';

describe('ShistoryComponent', () => {
  let component: ShistoryComponent;
  let fixture: ComponentFixture<ShistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
