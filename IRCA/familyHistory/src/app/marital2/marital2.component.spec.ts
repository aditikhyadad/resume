import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marital2Component } from './marital2.component';

describe('Marital2Component', () => {
  let component: Marital2Component;
  let fixture: ComponentFixture<Marital2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Marital2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Marital2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
