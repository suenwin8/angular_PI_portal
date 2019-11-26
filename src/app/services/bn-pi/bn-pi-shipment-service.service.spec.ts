import { TestBed } from '@angular/core/testing';

import { BnPiShipmentService } from './bn-pi-shipment-service.service';

describe('BnPiShipmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BnPiShipmentService = TestBed.get(BnPiShipmentService);
    expect(service).toBeTruthy();
  });
});
