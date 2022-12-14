import { TestBed } from '@angular/core/testing';

import { AddyurlserviceService } from './addyurlservice.service';

describe('AddyurlserviceService', () => {
  let service: AddyurlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddyurlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
