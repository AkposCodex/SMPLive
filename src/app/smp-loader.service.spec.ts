import { TestBed } from '@angular/core/testing';

import { SmpLoaderService } from './smp-loader.service';

describe('SmpLoaderService', () => {
  let service: SmpLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmpLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
