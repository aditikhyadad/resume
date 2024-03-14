import { TestBed } from '@angular/core/testing';

import { Marital2Service } from './marital2.service';

describe('Marital2Service', () => {
  let service: Marital2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Marital2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
