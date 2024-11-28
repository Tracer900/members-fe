import { TestBed } from '@angular/core/testing';

import { MedlemService } from './medlem.service';

describe('MedlemService', () => {
  let service: MedlemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedlemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
