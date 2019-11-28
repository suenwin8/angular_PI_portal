import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BN_PI_HDRS } from 'src/app/models/mock/bn-pi-hdr';
import { BN_PI_HDR } from 'src/app/models/bn_pi/bn-pi-hdr';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'url';
import { BnPiReplyService } from 'src/app/services/bn-pi/bn-pi-reply-service.service';
import { IBnPiReplyDetail, IBnPiReply, IPOST_GetByTxnNo, IBnPiHdr, IPOST_INSERT_PIReplyDetail } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { BnPiReplyLoaderService } from 'src/app/services/bn-pi/bn-pi-reply-loader-service.service';
import { DatePipe } from '@angular/common';
// mock
import { BnPiReplyDetail } from 'src/app/models/mock/bn-pi-reply-detail';
import { RepositoryService } from 'src/app/services/environment/repository.service';
import { ErrorHandlerService } from 'src/app/services/environment/error-handler.service';
import { APIResponse } from 'src/app/models/response/apiresponse';

// nicole 20190927
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BnPiShipmentService } from 'src/app/services/bn-pi/bn-pi-shipment-service.service';
import { BnPiShipmentLoaderService } from 'src/app/services/bn-pi/bn-pi-shipment-loader-service.service';


@Component({
  selector: 'app-bn-pi-reply',
  templateUrl: './bn-pi-reply.component.html',
  styleUrls: ['./bn-pi-reply.component.scss'],
  animations: [routerTransition()]
  , providers: [
    BnPiReplyService
    , BnPiReplyLoaderService
  ]
})
export class BnPiReplyComponent implements OnInit {
  title = 'Reply PI';
  // get from mock
  hdr_list = BN_PI_HDRS;
  public passed_HDR: BN_PI_HDR;
  Remark_string = '';
  public whole_txn_obj: IBnPiReply;
  public submitted_reply_obj: any;
  response: APIResponse<IBnPiHdr>;
  public response_dtl: APIResponse<IBnPiReplyDetail>;
  // hardcode supplier id
  supplier_login_account_id_val = 1 ;


  url_txn_no: string;

  // submitform: FormGroup;
  constructor(private activeRoute: ActivatedRoute
    , private router: Router
    , private formBuilder: FormBuilder
    , private bnpireplyservice: BnPiReplyService
    , private bnpireplyloader: BnPiReplyLoaderService
      , private shipment_service: BnPiShipmentService
    // , private shipment_loader: BnPiShipmentLoaderService
    , private datePipe: DatePipe
    , private repo: RepositoryService
    , private errorHandler: ErrorHandlerService
    , private http: HttpClient) {

    // this.submitform = this.formBuilder.group({
    //   large_beautiful_birdnests_mark: new FormControl()
    //   , broken_birdnests_mark: new FormControl()
    //   , mix_price: new FormControl(null, Validators.required)
    //   , bulu_berat_price: new FormControl()
    //   , bulu_sedang_price: new FormControl()
    //   , bulu_ringan_price: new FormControl()
    //   , market_information: new FormControl()
    // });
  }

  get form(): FormGroup {
    return this.bnpireplyservice.form;
  }

  // nicole 20191127
  // get shipmentform(): FormGroup {
  //   console.log('shipment');
  //   return this.shipment_service.form;
  // }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
  }
  ngOnInit() {


    this.activeRoute.paramMap.subscribe(params => {
      this.url_txn_no = params.get('txn_no');
      console.log('this.url_txn_no : ' + this.url_txn_no);
    });
    const postdata: IPOST_GetByTxnNo = { txn_no: this.url_txn_no, supplier_login_account_id: this.supplier_login_account_id_val };
console.log(postdata);
    // this.bnpireplyservice.GetByHdrTxnNoV2(postdata).subscribe((res: APIResponse<IBnPiHdr>) => {
    //   if (res['IsSuccess']) {
    //     this.response = res;
    //      // console.log(this.response);
    //     // this.whole_txn_obj = { reply_hdr: this.response.Response };
    //     // console.log(this.whole_txn_obj);
    //    // this.bnpireplyloader.loadReplyForEdit(this.whole_txn_obj);
    //     this.passed_HDR = this.whole_txn_obj.reply_hdr;
    //     const replace_word = 'within 2 working days';
    //     const append_str = '<b>on or before ';
    //     const expected_reply_date_str = this.datePipe.transform(this.passed_HDR.expected_reply_date, 'yyyy-MMM-dd');
    //     const whole_str = append_str.concat(expected_reply_date_str + '</b>');
    //     const newstr = this.passed_HDR.acc_remarks.replace(replace_word, whole_str);
    //     this.Remark_string = newstr.toString().split('*').join('<br/> *');
    //     this.passed_HDR.acc_remarks = this.Remark_string.replace('<br/>', '');
    //   }
    // },
    //   (error) => {
    //     console.log('error in get by hdr txn no');
    //     this.errorHandler.handleError(error);
    //     // Navigate to the login page with extras
    //     this.router.navigate(['/bn-pi-hdr']);
    //   });



    this.posttogetReplydetailV2(postdata);


    // this.getReplyHdr(postdata);


  }
  getReplyHdr(postdata: IPOST_GetByTxnNo) {
    // const txn_no: string = this.activeRoute.snapshot.paramMap.get('txn_no');
    // console.log(txn_no);
    // this.passed_HDR = this.hdr_list.filter(x => x.txn_no === txn_no)[0];
    // console.log(this.passed_HDR);
    // mock



    // this.bnpireplyloader.loadReplyForEdit(BnPiReplyDetail);

    // console.log(this.passed_HDR);

    // const postdata: IPOST_GetByTxnNo = { txn_no: this.url_txn_no, supplier_login_account_id: 1 };

    this.http.post('https://localhost:5001/api/BNPIReply/GetByTxnNo', this.generateHeaders()).pipe(

      map(async (res: Response) => {

        const d = JSON.parse(await res.json()) as APIResponse<IBnPiReplyDetail>;
        this.response_dtl = d;
      }
        , tap(_ => console.log(this.response_dtl))
      ));
    console.log(this.response_dtl);
    // this.response = this.bnpireplyservice.GetByHdrTxnNoV3(postdata);
    // console.log(this.response);

    this.bnpireplyservice.GetByHdrTxnNoV2(postdata).subscribe(res => {
      if (res['IsSuccess']) {
        this.response = res as APIResponse<IBnPiHdr>;

      }
      // this.response = res as APIResponse<IBnPiHdr>;
      // console.log(this.response);
      // this.getReplyDetail(postdata);
      // console.log(this.response_dtl.Response);
      // this.whole_txn_obj = { reply_hdr: this.response.Response, reply_detail: this.response_dtl.Response };
      // this.whole_txn_obj = { reply_hdr: this.response.Response };
      // console.log('whole_txn_obj' + this.whole_txn_obj);

    },
      (error) => {
        console.log('error in get by hdr txn no');
        this.errorHandler.handleError(error);
        // Navigate to the login page with extras
        this.router.navigate(['/bn-pi-hdr']);
      });
    console.log(this.response);
    //     this.bnpireplyservice.GetByReplyTxnNoV2(postdata).subscribe(res => {
    //       this.response_dtl = res as APIResponse<IBnPiReplyDetail>;
    //       // console.log(this.response_dtl);
    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         // Navigate to the login page with extras
    //         this.router.navigate(['/bn-pi-hdr']);
    //       });
    // console.log('jump to here');
    //       // const test_whole: IBnPiReply = { reply_hdr: this.response.Response, reply_detail: this.response_dtl.Response };
    //       console.log(this.response.Response);
    //       console.log(this.response_dtl.Response);
    //   this.bnpireplyloader.loadReplyForEdit(this.whole_txn_obj);
    // this.passed_HDR = this.whole_txn_obj.reply_hdr;
    // const replace_word = 'within 2 working days';
    // const append_str = '<b>on or before ';
    // const expected_reply_date_str = this.datePipe.transform(this.passed_HDR.expected_reply_date, 'yyyy-MMM-dd');
    // const whole_str = append_str.concat(expected_reply_date_str + '</b>');
    // const newstr = this.passed_HDR.acc_remarks.replace(replace_word, whole_str);
    // this.Remark_string = newstr.toString().split('*').join('<br/> *');
    // this.passed_HDR.acc_remarks = this.Remark_string.replace('<br/>', '');




  }

  posttogetReplydetail(postdata: IPOST_GetByTxnNo) {
    console.log('jump to posttogetreplydetail');
    this.http.post('https://localhost:5001/api/BNPIReply/GetByTxnNo', this.generateHeaders()).pipe(

      map(async (res: Response) => {
        console.log('jump to posttogetreplydetail 1 ');
        const d = JSON.parse(await res.json()) as APIResponse<IBnPiReplyDetail>;

        this.response_dtl = d;
      }
        , tap(_ => console.log(this.response_dtl))
      ));
    console.log(this.response_dtl);

  }


  posttogetReplydetailV2(postdata: IPOST_GetByTxnNo) {
    console.log('jump to posttogetreplydetail V2');
    // console.log(postdata);
    // this.http.post('https://localhost:5001/api/BNPIReply/GetByTxnNo', postdata, this.generateHeaders()).subscribe
    this.bnpireplyservice.GetByReplyTxnNoV2(postdata).subscribe
      ((data: APIResponse<IBnPiReply>) => {
        // console.log(data);
        // console.log(data.Response.reply_hdr);
        // console.log(data.Response.reply_detail);
        this.passed_HDR = data.Response.reply_hdr;
        const replace_word = 'within 2 working days';
        const append_str = '<b>on or before ';
        const expected_reply_date_str = this.datePipe.transform(this.passed_HDR.expected_reply_date, 'yyyy-MMM-dd');
        const whole_str = append_str.concat(expected_reply_date_str + '</b>');
        const newstr = this.passed_HDR.acc_remarks.replace(replace_word, whole_str);
        this.Remark_string = newstr.toString().split('*').join('<br/> *');
        this.passed_HDR.acc_remarks = this.Remark_string.replace('<br/>', '');

        this.whole_txn_obj = { reply_hdr: data.Response.reply_hdr, reply_detail: data.Response.reply_detail };
        this.bnpireplyloader.loadReplyForEdit(this.whole_txn_obj);

      },
        (error) => {
          console.log('error in get by hdr txn no');
          this.errorHandler.handleError(error);
          // Navigate to the login page with extras
          this.router.navigate(['/bn-pi-hdr']);
        });


  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getReplyDetail(postdata: IPOST_GetByTxnNo) {

    this.bnpireplyservice.GetByReplyTxnNoV2(postdata).subscribe(res => {
      this.response_dtl = res as APIResponse<IBnPiReplyDetail>;

    },
      (error) => {
        this.errorHandler.handleError(error);
        // Navigate to the login page with extras
        this.router.navigate(['/bn-pi-hdr']);
      });
    console.log(this.response_dtl.Response);
  }


  // async submit(data: IBnPiReply) {

  //   const reply: IBnPiReply = this.bnpireplyservice.createPIReplyDto(data);

  //   console.warn('Your order has been submitted', reply);
  // }

  public onSubmitV2() {
    // console.warn(JSON.stringify(this.form.value));
    const reply: IBnPiReply = this.bnpireplyservice.createPIReplyDto(this.form.value);
    const post_detail: IPOST_INSERT_PIReplyDetail = {
      reply_detail: reply.reply_detail,
      supplier_login_account_id: this.supplier_login_account_id_val
    };
    post_detail.reply_detail.txn_no = reply.reply_hdr.txn_no;
    this.bnpireplyservice.InsertPIReplyDetail(post_detail).subscribe(res => {
      this.submitted_reply_obj = res;
    },
    (error) => {
      this.errorHandler.handleError(error);
      // this.errorMessage = this.errorHandler.errorMessage;
    });
    console.warn('Your order has been submitted', reply);
  }

}
