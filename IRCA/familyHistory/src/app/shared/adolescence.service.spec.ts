import { TestBed } from '@angular/core/testing';

import { AdolescenceService } from './adolescence.service';

describe('AdolescenceService', () => {
  let service: AdolescenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdolescenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
