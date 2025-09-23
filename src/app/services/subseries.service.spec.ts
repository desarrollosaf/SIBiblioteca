import { TestBed } from '@angular/core/testing';

import { SubseriesService } from './subseries.service';

describe('SubseriesService', () => {
  let service: SubseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
