import { TestBed } from '@angular/core/testing';

import { BnPiShipmentLoaderServiceService } from './bn-pi-shipment-loader-service.service';

describe('BnPiShipmentLoaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnPiShipmentLoaderServiceService = TestBed.get(BnPiShipmentLoaderServiceService);
    expect(service).toBeTruthy();
  });
});
