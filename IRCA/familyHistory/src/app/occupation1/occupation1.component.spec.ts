import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Occupation1Component } from './occupation1.component';

describe('Occupation1Component', () => {
  let component: Occupation1Component;
  let fixture: ComponentFixture<Occupation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Occupation1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Occupation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
