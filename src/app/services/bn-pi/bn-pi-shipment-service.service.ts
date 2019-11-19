import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RepositoryService } from '../environment/repository.service';
import { ErrorHandlerService } from '../environment/error-handler.service';
import { IBnPiShipmentDetail } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';

@Injectable({
  providedIn: 'root'
})
export class BnPiShipmentService {
  public form: FormGroup;
  public result: any;
  public errorMessage = '';
  constructor(private fb: FormBuilder
    , private repo: RepositoryService
    , private errorHandler: ErrorHandlerService) {
    this.form = this.fb.group({
      shipment_detail: this.fb.group({
        shipment_no: new FormControl(),
        supplier_code: new FormControl(),
        next_shipment_date: new FormControl(),
        shipment_type: new FormControl(),
        bulu_ringan_beautiful_birdsNest_qty: new FormControl(),
        bulu_ringan_medium_birdsNest_qty: new FormControl(),
        bulu_ringan_small_birdsNest_qty: new FormControl(),
        bulu_ringan_broken_qty: new FormControl(),
        bulu_ringan_beautiful_birdsNest_unit: new FormControl(),
        bulu_ringan_medium_birdsNest_unit: new FormControl(),
        bulu_ringan_small_birdsNest_unit: new FormControl(),
        bulu_ringan_broken_unit: new FormControl(),
        bulu_behat_beautiful_birdsNest_qty: new FormControl(),
        bulu_behat_medium_birdsNest_qty: new FormControl(),
        bulu_behat_small_birdsNest_qty: new FormControl(),
        bulu_behat_broken_qty: new FormControl(),
        bulu_behat_beautiful_birdsNest_unit: new FormControl(),
        bulu_behat_medium_birdsNest_unit: new FormControl(),
        bulu_behat_small_birdsNest_unit: new FormControl(),
        bulu_behat_broken_unit: new FormControl(),
        seriti_BirdsNest_qty: new FormControl(),
        seriti_BirdsNest_unit: new FormControl(),
        any_others: new FormControl(),
        any_others_translated: new FormControl(),
        remarks: new FormControl(),
        remarks_translated: new FormControl(),
        submitted_date: new FormControl(),
        txn_no: new FormControl(),
        reference_pi_no: new FormControl(),
        Airway_Bill_no: new FormControl(),
        rec_type: new FormControl(),
        status: new FormControl(),
        created_date: new FormControl(),
        created_by: new FormControl(),
        last_updated_date: new FormControl(),
        last_updated_by: new FormControl(),
      })

    });
  }

  createPIReplyDto(data: IBnPiShipmentDetail): IBnPiShipmentDetail {
    const reply = data;
    return reply;
  }
}
