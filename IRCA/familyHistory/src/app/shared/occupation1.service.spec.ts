import { TestBed } from '@angular/core/testing';

import { Occupation1Service } from './occupation1.service';

describe('Occupation1Service', () => {
  let service: Occupation1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Occupation1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
