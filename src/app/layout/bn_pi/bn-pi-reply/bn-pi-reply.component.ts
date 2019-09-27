import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BN_PI_HDRS } from 'src/app/models/mock/bn-pi-hdr';
import { BN_PI_HDR } from 'src/app/models/bn_pi/bn-pi-hdr';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'url';
import { BnPiReplyService } from 'src/app/services/bn-pi/bn-pi-reply-service.service';
import { IBnPiReplyDetail, IBnPiReply, IPOST_GetByTxnNo } from 'src/app/interfaces/bn-pi/ibn-pi-reply';
import { BnPiReplyLoaderService } from 'src/app/services/bn-pi/bn-pi-reply-loader-service.service';
import { DatePipe } from '@angular/common';
// mock
import { BnPiReplyDetail } from 'src/app/models/mock/bn-pi-reply-detail';
import { RepositoryService } from 'src/app/services/environment/repository.service';
import { ErrorHandlerService } from 'src/app/services/environment/error-handler.service';
import { APIResponse } from 'src/app/models/response/apiresponse';
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
  public replyDetail: IBnPiReplyDetail;
  response: APIResponse<IBnPiReplyDetail>;
  // submitform: FormGroup;
  constructor(private activeRoute: ActivatedRoute
    , private router: Router
    , private formBuilder: FormBuilder
    , private bnpireplyservice: BnPiReplyService
    , private bnpireplyloader: BnPiReplyLoaderService
    , private datePipe: DatePipe
    , private repo: RepositoryService
    , private errorHandler: ErrorHandlerService) {

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

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
  }
  ngOnInit() {
    this.getReplyDetails();
  }
  getReplyDetails() {
    // const txn_no: string = this.activeRoute.snapshot.paramMap.get('txn_no');
    // console.log(txn_no);
    // this.passed_HDR = this.hdr_list.filter(x => x.txn_no === txn_no)[0];
    // console.log(this.passed_HDR);
    // mock
    this.bnpireplyloader.loadReplyForEdit(BnPiReplyDetail);
    this.passed_HDR = BnPiReplyDetail.reply_hdr;
    const replace_word = 'within 2 working days';
    const append_str = '<b>on or before ';
    const expected_reply_date_str = this.datePipe.transform(this.passed_HDR.expected_reply_date, 'yyyy-MMM-dd');
    const whole_str = append_str.concat(expected_reply_date_str + '</b>');
    const newstr = this.passed_HDR.acc_remarks.replace(replace_word, whole_str);
    this.Remark_string = newstr.toString().split('*').join('<br/> *');
    this.passed_HDR.acc_remarks = this.Remark_string.replace('<br/>', '');
     console.log(this.passed_HDR);

    // const postdata: IPOST_GetByTxnNo = { txn_no: '25056', supplier_login_account_id: 1 };

    // this.bnpireplyservice.GetByReplyTxnNoV2(postdata).subscribe(res => {
    //   // this.response = res as APIResponse<IBnPiReplyDetail>;
    //   //Object.assign({}, this.response);
    //   return res.map(MapResponse());
    //   console.log(this.response);

    // },
    //   (error) => {
    //     this.errorHandler.handleError(error);
    //   });




  }

  MapResponse(data: APIResponse<IBnPiReplyDetail>): APIResponse<IBnPiReplyDetail> {
    return Object.assign({}, data );
  }
  async submit(data: IBnPiReply) {

    const reply: IBnPiReply = this.bnpireplyservice.createPIReplyDto(data);

    console.warn('Your order has been submitted', reply);
  }

  public onSubmitV2() {
    // console.warn(JSON.stringify(this.form.value));
    const reply: IBnPiReply = this.bnpireplyservice.createPIReplyDto(this.form.value);
    console.warn('Your order has been submitted', reply);
  }

}
