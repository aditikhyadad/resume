import { TestBed } from '@angular/core/testing';

import { FinHistoryService } from './fin-history.service';

describe('FinHistoryService', () => {
  let service: FinHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
