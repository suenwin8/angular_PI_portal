import { TestBed } from '@angular/core/testing';

import { BnPiShipmentServiceService } from './bn-pi-shipment-service.service';

describe('BnPiShipmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnPiShipmentServiceService = TestBed.get(BnPiShipmentServiceService);
    expect(service).toBeTruthy();
  });
});
