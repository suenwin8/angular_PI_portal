import { Component, OnInit, Renderer, Inject } from '@angular/core';
import { BnPiShipmentService } from 'src/app/services/bn-pi/bn-pi-shipment-service.service';
import { FormGroup } from '@angular/forms';
import { BnPiShipmentLoaderService } from 'src/app/services/bn-pi/bn-pi-shipment-loader-service.service';
import { IBnPiShipmentDetail } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bn-pi-shipment-detail',
  templateUrl: './bn-pi-shipment-detail.component.html',
  styleUrls: ['./bn-pi-shipment-detail.component.scss']
  , providers: [
    BnPiShipmentService
    , BnPiShipmentLoaderService
  ]
})
export class BnPiShipmentDetailComponent implements OnInit {

  // shipmentform: FormGroup;
  data: IBnPiShipmentDetail;
  url_para_create: string;

  constructor(private shipment_service: BnPiShipmentService
    , private shipmentloader: BnPiShipmentLoaderService
    , private router: Router, private http: HttpClient
    , private datePipe: DatePipe
    , private renderer: Renderer
    , @Inject(ActivatedRoute) private _activatedroute: ActivatedRoute
) { }

  ngOnInit() {
    this._activatedroute.queryParams.subscribe(queryParams => {
      this.url_para_create = queryParams['shipment_type'];
      console.log('para' + this.url_para_create);
  });
    this.shipmentloader.loadReplyForEdit(this.data);
  }
  get form(): FormGroup {
    return this.shipment_service.form;
  }
  public onSubmit() {
    // console.warn(JSON.stringify(this.form.value));
    const reply: IBnPiShipmentDetail = this.shipment_service.createPIReplyDto(this.form.value);

    console.warn('Your order has been submitted', reply);
  }

}
