import { TestBed } from '@angular/core/testing';

import { LegalhistoryService } from './legalhistory.service';

describe('LegalhistoryService', () => {
  let service: LegalhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
