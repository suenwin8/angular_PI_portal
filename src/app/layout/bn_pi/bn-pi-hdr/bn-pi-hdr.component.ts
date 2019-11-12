import { Component, OnInit, Renderer, AfterViewInit, Inject, ViewChild, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { BN_PI_HDR } from '../../../models/bn_pi/bn-pi-hdr';
// nicole mock
import { BN_PI_HDRS } from '../../../models/mock/bn-pi-hdr';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../../router.animations';
// nicole 20191105
// import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/models/response/apiresponse';
import { DatePipe } from '@angular/common';
import { IPOST_GetByTxnNo } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { filter } from 'rxjs/operators';
import { BnPiReplyService } from 'src/app/services/bn-pi/bn-pi-reply-service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-bn-pi-hdr',
  templateUrl: './bn-pi-hdr.component.html',
  styleUrls: ['./bn-pi-hdr.component.scss'],
  animations: [routerTransition()]
  , providers: [
    BnPiReplyService
  ]
})
export class BnPiHdrComponent implements AfterViewInit, OnDestroy, OnInit {
  // @ViewChild(DataTableDirective, {static: false})
  navigationSubscription;
  @ViewChild(DataTableDirective, { static: false }) datatableElement: DataTableDirective;
  dtElements: QueryList<DataTableDirective>;
  title = 'View PI History';
  temp_text = '';
  // nicole mock
  hdr_list = BN_PI_HDRS;
  selected_HDR: BN_PI_HDR;

  // nicole datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public listOfbnpihdr: BN_PI_HDR[];
  map = new Map<string, string>();
  status_para = '';



  constructor(private router: Router, private http: HttpClient
    , private datePipe: DatePipe
    , private renderer: Renderer
    , @Inject(ActivatedRoute) private _activatedroute: ActivatedRoute
    , private bnpireplyservice: BnPiReplyService) {

      // this.navigationSubscription = this.router.events.subscribe((e: any) => {
      //   // If it is a NavigationEnd event re-initalise the component
      //   if (e instanceof NavigationEnd) {
      //     this.loadDatatable();
      //   }
      // });
  }

  ngOnInit() {

    this.loadDatatable();
  }

  loadDatatable() {
    // status mapping
    this.map.set('C', 'Complete');
    this.map.set('P', 'Pending for Reply');
    this.map.set('I', 'In Progress');
    this.map.set('R', 'Replied');
    this.map.set('D', 'Delayed');
    // url para mapping
    this.map.set('Complete', 'C');
    this.map.set('Pending', 'P');
    this.map.set('InProgress', 'I');
    this.map.set('Replied', 'R');
    this.map.set('Delayed', 'D');
    // nicole get url para
     // status_para = this.map.get(this._activatedroute.snapshot.params.status);
    // console.log('url status: ' + this.map.get(this._activatedroute.snapshot.params.status))
    this._activatedroute.paramMap.subscribe(params => {
      this.status_para = params.get('status');
      this.temp_text = this.status_para;
      console.log('current status 1: ' + this.status_para);
      const mapped_status = this.map.get(this.status_para);
      console.log('mapped status : ' + mapped_status);
      const postdata: IPOST_GetByTxnNo = { txn_no: '', supplier_login_account_id: 1 };
      this.Post_getlistofhdr(postdata, mapped_status);
    });
  }
  public transformDate(mydate: DatePipe) {
    return this.datePipe.transform(mydate, 'yyyy MMM dd'); // whatever format you need.
  }
  goToPage(txn_no: string) {
    this.router.navigate(['/bn-pi-hdr/bn-pi-reply', txn_no]);
  }

  public onSelect(hdr: BN_PI_HDR): void {
    this.selected_HDR = hdr;
    console.log(hdr);
  }
  public onView(hdr: BN_PI_HDR): void {
    this.selected_HDR = hdr;
    console.log(hdr);
    // const detailsUrl = 'bn-pi-hdr/bn-pi-reply/${txn_no}';
    // this.router.navigate([detailsUrl]);
  }

  ngAfterViewInit(): void {
    // nicole 20191107 rerender datatable
    this.dtTrigger.next();



    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute('view-reply-id')) {
        // console.log('This is a custom directive!' + event.target.getAttribute('view-reply-id'));
        this.goToPage(event.target.getAttribute('view-reply-id'));
      }
    });
  }
  // nicole 20191107
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();

    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    // if (this.navigationSubscription) {
    //   this.navigationSubscription.unsubscribe();
   // }
  }
  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  Post_getlistofhdr(postdata: IPOST_GetByTxnNo, status: string) {
    // nicole 20191107
    const that = this;
    console.log('jump to post_getlistofhdr');
    console.log(status);
    // this.rerender();
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        console.log('inside ajax call');
        this.bnpireplyservice.GetListByTxnNo(postdata).subscribe((data: APIResponse<BN_PI_HDR[]>) => {
          console.log(data.Response);
          this.listOfbnpihdr = data.Response.filter(function (data) {
            if (status === 'C') {
              return data.status === 'C';
            } else {
              return data.status !== 'C';
            }
          });
          console.log(this.listOfbnpihdr);
          callback({
            recordsTotal: this.listOfbnpihdr.length,
            recordsFiltered: this.listOfbnpihdr.length,
            data: this.listOfbnpihdr
          });
        });
      },
      columns: [{
        title: 'txn_no',
        render: (data, type, row) => {
          let badgecolor = '';
          let statustext = '';
          statustext = this.map.get(row.status);
          if (row.status === 'C') {
            badgecolor = 'badge-success';
          } else if (row.status === 'P') {
            badgecolor = 'badge-warning';
          } else if (row.status === 'I') {
            badgecolor = 'badge-secondary';
          } else if (row.status === 'R') {
            badgecolor = 'badge-warning';
          } else if (row.status === 'D') {
            badgecolor = 'badge-danger';
          }
          return row.txn_no + ' <span class="badge badge-pill ' + badgecolor + '">' + statustext + '</span>';
        }
      },
      {
        title: 'supplier_code',
        data: 'supplier_code'
      },
      {
        title: 'issue_date',
        render: (data, type, row) => this.transformDate(row.issue_date)
      }
        , {
        title: 'airway_bill',
        data: 'airway_bill'
      },
      {
        title: 'actual_reply_date',
        render: (data, type, row) => this.transformDate(row.actual_reply_date)
      },
      {
        title: 'is_delayed',
        render: (data, type, row) => {
          let badgecolor = '';
          let statustext = '';
          if (row.is_delayed === true) {
            badgecolor = 'badge-danger';
            statustext = this.map.get('D');
          }
          return '<span class="badge badge-pill ' + badgecolor + '">' + statustext + '</span>';
        }
      }
        , {
        title: 'Action',
        render: (data, type, row) => {
          if (row.status === 'C') {
            return '<button class="btn btn-sm btn-default" view-reply-id="' + row.txn_no + '" >View</button>';
          } else {
            // return '<button class="btn btn-sm btn-warning" (click)="goToPage("' + row.txn_no + '")" >Edit</button>';
            const html = '<button class="btn btn-sm btn-warning" view-reply-id="' + row.txn_no + '" >Edit</button>';
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






















































    // nicole datatable
    // const that = this;
    // this.dtOptions = {
    //   ajax: (dataTablesParameters: any, callback) => {
    //     that.http
    //       .post(
    //         'https://localhost:5001/api/BNPIHdr/GetListByTxnNo', postdata, {}
    //       ).subscribe((data: APIResponse<BN_PI_HDR[]>) => {
    //         // // this.listOfbnpihdr = data;
    //         console.log(data.Response);
    //         //console.log('inside http ' + this.status_para);
    //         //console.log('inside http ' + mapped_status);
    //         // if (this.status_para !== '') {
    //           this.listOfbnpihdr = data.Response.filter(function (data) {
    //             //if (mapped_status === 'C') {
    //               if (status === 'C') {
    //               return data.status === 'C';
    //             } else {
    //               return data.status !== 'C';
    //             }
    //           });
    //         // }

    //         console.log(this.listOfbnpihdr);
    //         // callback({
    //         //   recordsTotal: data.Response.length,
    //         //   recordsFiltered: data.Response.length,
    //         //   data: data.Response
    //         // });
    //         callback({
    //           recordsTotal: this.listOfbnpihdr.length,
    //           recordsFiltered: this.listOfbnpihdr.length,
    //           data: this.listOfbnpihdr
    //         });
    //       });
    //   },
    //   columns: [{
    //     title: 'txn_no',
    //     // data: 'txn_no'
    //     render: (data, type, row) => {
    //       let badgecolor = '';
    //       let statustext = '';
    //       statustext = this.map.get(row.status);
    //       if (row.status === 'C') {
    //         badgecolor = 'badge-success';
    //       } else if (row.status === 'P') {
    //         badgecolor = 'badge-warning';
    //       } else if (row.status === 'I') {
    //         badgecolor = 'badge-secondary';
    //       } else if (row.status === 'R') {
    //         badgecolor = 'badge-warning';
    //       } else if (row.status === 'D') {
    //         badgecolor = 'badge-danger';
    //       }
    //       return row.txn_no + ' <span class="badge badge-pill ' + badgecolor + '">' + statustext + '</span>';
    //     }
    //   },
    //   {
    //     title: 'supplier_code',
    //     data: 'supplier_code'
    //   },
    //   {
    //     title: 'issue_date',
    //     render: (data, type, row) => this.transformDate(row.issue_date)
    //   }
    //     , {
    //     title: 'airway_bill',
    //     data: 'airway_bill'
    //   },
    //   {
    //     title: 'actual_reply_date',
    //     render: (data, type, row) => this.transformDate(row.actual_reply_date)
    //   },
    //   {
    //     title: 'is_delayed',
    //     render: (data, type, row) => {
    //       let badgecolor = '';
    //       let statustext = '';
    //       if (row.is_delayed === true) {
    //         badgecolor = 'badge-danger';
    //         statustext = this.map.get('D');
    //       }
    //       return '<span class="badge badge-pill ' + badgecolor + '">' + statustext + '</span>';
    //     }
    //   }
    //     , {
    //     title: 'Action',
    //     render: (data, type, row) => {
    //       if (row.status === 'C') {
    //         return '<button class="btn btn-sm btn-default" view-reply-id="' + row.txn_no + '" >View</button>';
    //       } else {
    //         // return '<button class="btn btn-sm btn-warning" (click)="goToPage("' + row.txn_no + '")" >Edit</button>';
    //         const html = '<button class="btn btn-sm btn-warning" view-reply-id="' + row.txn_no + '" >Edit</button>';
    //         return html;
    //       }
    //     }
    //   }
    //   ]

    //   ,
    //   // Use this attribute to enable the responsive extension
    //   responsive: true
    //   , order: [[0, 'desc']]
    // };
  }

}
