import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreComponent } from './are.component';

describe('AreComponent', () => {
  let component: AreComponent;
  let fixture: ComponentFixture<AreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
