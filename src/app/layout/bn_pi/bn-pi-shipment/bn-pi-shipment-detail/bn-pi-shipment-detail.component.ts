import { Component, OnInit, Renderer, Inject } from '@angular/core';
import { BnPiShipmentService } from 'src/app/services/bn-pi/bn-pi-shipment-service.service';
import { FormGroup } from '@angular/forms';
import { BnPiShipmentLoaderService } from 'src/app/services/bn-pi/bn-pi-shipment-loader-service.service';
import { IBnPiShipmentDetail, IPOST_PIShipment, IBnPiShipmentNo } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { post } from 'selenium-webdriver/http';
import { INSERT_POST_T } from 'src/app/models/request/insert-post-t';
import { ErrorHandlerService } from 'src/app/services/environment/error-handler.service';
import { APIResponse } from 'src/app/models/response/apiresponse';
import { UPDATE_POST_T } from 'src/app/models/request/update-post-t';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ISupplier } from 'src/app/interfaces/supplier/isupplier';
import { SELECT_POST_T } from 'src/app/models/request/select-post-t';
import { SupplierService } from 'src/app/services/supplier/supplier-service.service';

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

  data: IBnPiShipmentDetail;
  url_para_create: string;
  url_para_shipmentNo: string;

  supplier_login_id = 1;
  public tpl_supplier_code: ISupplier[];
  public tpl_data: IBnPiShipmentDetail;
  public tpl_shipment_rec_type: string;
  public tpl_errorMessage = '';

  constructor(private shipment_service: BnPiShipmentService
    , private supplier_service: SupplierService
    , private shipmentloader: BnPiShipmentLoaderService
    , private router: Router, private http: HttpClient
    , private datePipe: DatePipe
    , private renderer: Renderer
    , private errorHandler: ErrorHandlerService
    , @Inject(ActivatedRoute) private _activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this._activatedroute.queryParams.subscribe(params => {
    // this.url_para_create = queryParams['shipment_type'];
    this._activatedroute.paramMap.subscribe(params => {
      this.url_para_create = params.get('shipment_type');
      this.url_para_shipmentNo = params.get('shipment_no');
    });

    // console.log(this.data);
    console.log(this.url_para_shipmentNo);
    this.bindSupplierCodeField();
    if (this.url_para_shipmentNo) {
      const postdata: SELECT_POST_T<IBnPiShipmentNo> = {
        supplier_login_account_id: this.supplier_login_id,
        detail: { shipment_no: this.url_para_shipmentNo }
      };
      console.log('edit shipment mode');
      console.log(postdata);
      this.PostToGetShipmentDetail(postdata);
    } else {
      this.tpl_shipment_rec_type = this.url_para_create;
      console.log('create shipment mode');
      console.log(this.tpl_shipment_rec_type);
      this.shipmentloader.loadReplyForEdit(this.data);
    }


  }

  get form(): FormGroup {
    return this.shipment_service.form;
  }
  NgbDatetoDate(dob: Date): NgbDateStruct {
    if (dob) {
      const loIsDate = new Date(dob);
      // console.log(loIsDate);
      const ngbDateStruct = { day: loIsDate.getDate(), month: loIsDate.getMonth() + 1, year: loIsDate.getFullYear() };
      console.log(ngbDateStruct);
      return ngbDateStruct;
    }
  }
  bindSupplierCodeField() {
    const post_data: SELECT_POST_T<ISupplier> = {
      supplier_login_account_id: this.supplier_login_id,
      detail: null
    };

    this.supplier_service.GetCurrentMappingCode(post_data).subscribe((data: APIResponse<SELECT_POST_T<ISupplier[]>>) => {
      if (data.IsSuccess) {
        // console.warn('get binding supplier code', data);
        this.tpl_supplier_code = data.Response.detail;
        console.log(this.tpl_supplier_code);
      } else {
        console.warn('No supplier code found: ', data);
      }
    },
      (error) => {
        console.log(error);
        this.errorHandler.handleError(error);
      });
  }

  PostToGetShipmentDetail(postdata: SELECT_POST_T<IBnPiShipmentNo>) {
    this.shipment_service.SelectPIShipment(postdata).subscribe((data: APIResponse<SELECT_POST_T<IBnPiShipmentDetail>>) => {
      if (data.IsSuccess) {
        this.data = data.Response.detail;
        this.data._next_shipment_date = this.NgbDatetoDate(this.data.next_shipment_date);
        console.log(this.data);
        this.tpl_data = this.data;
        this.tpl_shipment_rec_type = this.data.rec_type;
        this.shipmentloader.loadReplyForEdit(this.data);
      } else {
        console.warn('No Shipment found: ', data);
      }
    },
      (error) => {
        console.log(error);
        this.errorHandler.handleError(error);
      });
  }

  fromNgbDateToDateTime(ngb_dob: NgbDateStruct): Date {
    const _date = ngb_dob.year.toString() + '-'
      + ngb_dob.month.toString() + '-'
      + ngb_dob.day.toString();
    const newDate = new Date(_date);
    return newDate;

  }

  public validation(data: IBnPiShipmentDetail): boolean {
    this.tpl_errorMessage = '';
    if (data.rec_type === 'SERITI') {
      if (data.seriti_BirdsNest_unit === null) {
        this.tpl_errorMessage = this.tpl_errorMessage + 'Missing seriti_birdsNest_unit';

      }
    }



    if (this.tpl_errorMessage === '') {
        return true;
    } else {
        return false;
    }
  }
  public onSubmit() {
    // console.warn(JSON.stringify(this.form.value));

    const reply: IPOST_PIShipment = this.shipment_service.createPIReplyDto(this.form.value);
    if (this.url_para_create) {
      reply.shipment_detail.rec_type = this.url_para_create;
    }

// validation
if (!this.validation(reply.shipment_detail)) {
  alert('error');
return;
}


    const post_data: INSERT_POST_T<IBnPiShipmentDetail> = {
      supplier_login_account_id: this.supplier_login_id,
      detail: reply.shipment_detail
    };
    const _date: NgbDateStruct = reply.shipment_detail._next_shipment_date;
    reply.shipment_detail.next_shipment_date = this.fromNgbDateToDateTime(_date);
    console.log(reply.shipment_detail);



    console.log(post_data);

    if (reply.shipment_detail.shipment_no === undefined || reply.shipment_detail.shipment_no === null) {
      console.log('insert');
      this.shipment_service.InsertPIShipment(post_data).subscribe((data: APIResponse<INSERT_POST_T<IBnPiShipmentDetail>>) => {
        if (data.IsSuccess) {
          console.warn('Your order has been submitted', data);
          const postdata: SELECT_POST_T<IBnPiShipmentNo> = {
            supplier_login_account_id: this.supplier_login_id,
            detail: { shipment_no: data.Response.detail.shipment_no }
          };
          console.log(postdata);
          this.PostToGetShipmentDetail(postdata);


        } else {
          console.warn('Problems: ', data);
        }
      },
        (error) => {
          console.log(error);
          this.errorHandler.handleError(error);
        });
    } else {
      console.log('update');
      this.shipment_service.UpdatePIShipment(post_data).subscribe((data: APIResponse<UPDATE_POST_T<IBnPiShipmentDetail>>) => {
        if (data.IsSuccess) {
          console.warn('Your order has been updated', data);
          const postdata: SELECT_POST_T<IBnPiShipmentNo> = {
            supplier_login_account_id: this.supplier_login_id,
            detail: { shipment_no: data.Response.detail.shipment_no }
          };
          console.log(postdata);
          this.PostToGetShipmentDetail(postdata);
        } else {
          console.warn('Problems: ', data);
        }
      },
        (error) => {
          console.log(error);
          this.errorHandler.handleError(error);
        });
    }


  }

}
