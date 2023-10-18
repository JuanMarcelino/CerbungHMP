import { TestBed } from '@angular/core/testing';

import { CerbungService } from './cerbung.service';

describe('CerbungService', () => {
  let service: CerbungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerbungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
