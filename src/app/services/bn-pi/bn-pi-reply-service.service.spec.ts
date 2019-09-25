import { TestBed } from '@angular/core/testing';

import { BnPiReplyServiceService } from './bn-pi-reply-service.service';

describe('BnPiReplyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnPiReplyServiceService = TestBed.get(BnPiReplyServiceService);
    expect(service).toBeTruthy();
  });
});
