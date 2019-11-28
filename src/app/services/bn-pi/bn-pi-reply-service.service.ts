import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IBnPiReply, IPOST_GetByTxnNo, IBnPiReplyDetail, IBnPiHdr, IPOST_INSERT_PIReplyDetail, IBnPiReplyShipment } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { RepositoryService } from '../environment/repository.service';
import { ErrorHandlerService } from '../environment/error-handler.service';
// nicole 20190927
import { map } from 'rxjs/operators';
import { APIResponse } from 'src/app/models/response/apiresponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BnPiReplyService {
  public form: FormGroup;
  public result: any;
  public errorMessage = '';

  constructor(private fb: FormBuilder
    , private repo: RepositoryService
    , private errorHandler: ErrorHandlerService
  ) {
    this.form = this.fb.group({
      reply_detail: this.fb.group({
        large_beautiful_birdnests_mark: new FormControl()
        , broken_birdnests_mark: new FormControl()
        , seriti_mark: new FormControl()
        , others_mark: new FormControl()
        , bulu_berat_price: new FormControl()
        , bulu_sedang_price: new FormControl()
        , bulu_ringan_price: new FormControl()
        , pinus_price: new FormControl()
        , cemara_price: new FormControl()
        , mix_price: new FormControl()
        , market_information: new FormControl()
        , any_others: new FormControl()
        , form_status: new FormControl()
        , created_date: new FormControl()
        , created_by: new FormControl()
        , last_updated_date: new FormControl()
        , last_updated_by: new FormControl()
      })
      , reply_hdr: this.fb.group({
        txn_no: new FormControl()
        , received_date: new FormControl()
        , notice_pi_reply_date: new FormControl()
        , airway_bill: new FormControl()
        , rc_status: new FormControl()
        , actual_reply_date: new FormControl()
      })
      , shipment_detail: this.fb.group({
        shipment_no: new FormControl({value: '', disabled: true}),
        supplier_code: new FormControl(),
        _next_shipment_date: new FormControl(),
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
        status: new FormControl({value: '', disabled: true}),
        created_date: new FormControl({value: '', disabled: true}),
        created_by: new FormControl(),
        last_updated_date: new FormControl(),
        last_updated_by: new FormControl(),
      })

    });
  }

  createPIReplyDto(data: IBnPiReply): IBnPiReply {
    const reply = {
      reply_hdr: data.reply_hdr,
      reply_detail: data.reply_detail
    };
    return reply;
  }

  createPIReplyDtoV2(data: IBnPiReplyShipment): IBnPiReplyShipment {
    const reply = {
      reply_hdr: data.reply_hdr,
      reply_detail: data.reply_detail,
      shipment_detail: data.shipment_detail
    };
    return reply;
  }



  public GetByReplyTxnNoV2(data: IPOST_GetByTxnNo) {
    return this.repo.post('api/BNPIReply/GetByTxnNo', data);
  }

  public GetByHdrTxnNoV2(data: IPOST_GetByTxnNo) {

    return this.repo.post('api/BNPIHdr/GetByTxnNo', data);
  }

  public InsertPIReplyDetail(data: IPOST_INSERT_PIReplyDetail) {

    return this.repo.post('api/BNPIReply/InsertPIReplyDetail', data);
  }

  // hdr api

  public GetListByTxnNo(data: IPOST_GetByTxnNo) {

    return this.repo.post('api/BNPIHdr/GetListByTxnNo', data);
  }




}
