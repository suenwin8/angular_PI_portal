import { Component, OnInit, Input, ViewChild, QueryList, Renderer, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormControl, FormGroup } from '@angular/forms';
import { BnPiShipmentType, BN_PI_SHIPMENT_TYPE } from 'src/app/models/bn_pi/bn-pi-shipment';
import { Subject } from 'rxjs';
import { IBnPiShipmentDetail } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BnPiShipmentService } from 'src/app/services/bn-pi/bn-pi-shipment-service.service';
import { IPOST_supplier_account_id } from 'src/app/interfaces/supplier/isupplier';
import { APIResponse } from 'src/app/models/response/apiresponse';
import { SELECT_POST_T } from 'src/app/models/request/select-post-t';

@Component({
  selector: 'app-bn-pi-shipment',
  templateUrl: './bn-pi-shipment.component.html',
  styleUrls: ['./bn-pi-shipment.component.scss'],
  animations: [routerTransition()],
  providers: [
    BnPiShipmentService
  ]
})
export class BnPiShipmentComponent implements AfterViewInit, OnDestroy, OnInit {

  // nicole datatable 20191126
  navigationSubscription;
  @ViewChild(DataTableDirective, { static: false }) datatableElement: DataTableDirective;
  dtElements: QueryList<DataTableDirective>;
  //
  create_choice = BN_PI_SHIPMENT_TYPE;
  selectedChoice: BnPiShipmentType;
  // nicole datatable 20191126
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public listOfShipmentHdr: IBnPiShipmentDetail[];

  private _selectedObj;
  get selectedObj() {
    return this._selectedObj;
  }
  set selectedObj(newObj) {
    this._selectedObj = newObj;
    this.onSelect(newObj);
  }

  constructor(private router: Router, private http: HttpClient
    , private datePipe: DatePipe
    , private renderer: Renderer
    , private shipment_service: BnPiShipmentService
    , @Inject(ActivatedRoute) private _activatedroute: ActivatedRoute
  ) {


  }
  ngOnInit() {
    this.loadDatatable();
  }

  public transformDate(mydate: DatePipe) {
    return this.datePipe.transform(mydate, 'yyyy MMM dd'); // whatever format you need.
  }

  public transformDateTime(mydate: DatePipe) {
    return this.datePipe.transform(mydate, 'yyyy MMM dd HH:mm:ss'); // whatever format you need.
  }
  onSelect(event: any) {
    console.log('onselect time');
    this.selectedChoice = event;
    console.log(this.selectedChoice);
    // console.log(event);
    // this.router.navigateByUrl('bn-pi-shipment/create/', this.selectedChoice.type_name);
  }
  goToShipment = function () {
    const shipment_type = this.myGroup.get('first').value;
    console.log(shipment_type);
    this.router.navigateByUrl('bn-pi-shipment/create/birdnest');
  };

  loadDatatable() {
    // // status mapping
    // this.map.set('C', 'Complete');
    // this.map.set('P', 'Pending for Reply');
    // this.map.set('I', 'In Progress');
    // this.map.set('R', 'Replied');
    // this.map.set('D', 'Delayed');
    // // url para mapping
    // this.map.set('Complete', 'C');
    // this.map.set('Pending', 'P');
    // this.map.set('InProgress', 'I');
    // this.map.set('Replied', 'R');
    // this.map.set('Delayed', 'D');
    // nicole get url para
    // status_para = this.map.get(this._activatedroute.snapshot.params.status);
    // console.log('url status: ' + this.map.get(this._activatedroute.snapshot.params.status))
    this._activatedroute.paramMap.subscribe(params => {

      const postdata: IPOST_supplier_account_id = { supplier_login_account_id: 1 };
      this.Post_getlistofhdr(postdata);
    });
  }

  Post_getlistofhdr(postdata: IPOST_supplier_account_id) {
    // nicole 20191107
    const that = this;
    console.log('jump to post_getlistofhdr');
    console.log(status);
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        console.log('inside ajax call');
        this.shipment_service.SelectALLPIShipment(postdata).subscribe((data: APIResponse<SELECT_POST_T<IBnPiShipmentDetail[]>>) => {
          console.log(data.Response);
          this.listOfShipmentHdr = data.Response.detail;
          console.log(this.listOfShipmentHdr);
          callback({
            recordsTotal: this.listOfShipmentHdr.length,
            recordsFiltered: this.listOfShipmentHdr.length,
            data: this.listOfShipmentHdr
          });
        });
      },
      columns: [{
        title: 'Shipment No',
        data: 'shipment_no'
      },
      {
        title: 'Type',
        data: 'rec_type'
      },
      {
        title: 'Supplier Code',
        data: 'supplier_code'
      },
      {
        title: 'Next Shipment Date',
        render: (data, type, row) => this.transformDate(row.next_shipment_date)
      },
      {
        title: 'Any Others',
        data: 'any_others'
      },
      {
        title: 'Submission Date',
        render: (data, type, row) => this.transformDate(row.submitted_date)
      },
      {
        title: 'Airway Bill No',
        data: 'Airway_Bill_no'
      },
      {
        title: 'Last Update Time',
        render: (data, type, row) => this.transformDateTime(row.last_updated_date)

      }

        , {
        title: 'Action',
        render: (data, type, row) => {
          if (row.status === 'C') {
            return '<button class="btn btn-sm btn-default" view-shipment-id="' + row.shipment_no + '" >View</button>';
          } else {
            // return '<button class="btn btn-sm btn-warning" (click)="goToPage("' + row.txn_no + '")" >Edit</button>';
            const html = '<button class="btn btn-sm btn-warning" view-shipment-id="' + row.shipment_no + '" >Edit</button>';
            return html;
          }
        }
      }
      ]

      ,
      // Use this attribute to enable the responsive extension
      responsive: true
      , order: [[0, 'desc']]
    };

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    // nicole 20191107 rerender datatable
    this.dtTrigger.next();



    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute('view-shipment-id')) {
        // console.log('This is a custom directive!' + event.target.getAttribute('view-shipment-id'));
        this.goToPage(event.target.getAttribute('view-shipment-id'));
      }
    });
  }

  goToPage(txn_no: string) {
    this.router.navigate(['bn-pi-shipment/edit/', txn_no]);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
