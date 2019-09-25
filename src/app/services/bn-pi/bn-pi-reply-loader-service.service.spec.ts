import { TestBed } from '@angular/core/testing';

import { BnPiReplyLoaderServiceService } from './bn-pi-reply-loader-service.service';

describe('BnPiReplyLoaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnPiReplyLoaderServiceService = TestBed.get(BnPiReplyLoaderServiceService);
    expect(service).toBeTruthy();
  });
});
