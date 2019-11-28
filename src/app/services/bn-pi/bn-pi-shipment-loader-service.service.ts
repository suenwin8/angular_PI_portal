import { Injectable } from '@angular/core';
import { IBnPiShipmentDetail } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';
import { BnPiShipmentService } from './bn-pi-shipment-service.service';

@Injectable({
  providedIn: 'root'
})
export class BnPiShipmentLoaderService {

  constructor(private shipmentservice: BnPiShipmentService) { }

  loadReplyForEdit(data: IBnPiShipmentDetail): void {
    // console.log(data);
    this.shipmentservice.form.patchValue({
      shipment_detail: {
        ...data
      }
    });


  }

}
