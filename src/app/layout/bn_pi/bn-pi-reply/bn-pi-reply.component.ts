import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BN_PI_HDRS } from 'src/app/models/mock/bn-pi-hdr';
import { BN_PI_HDR } from 'src/app/models/bn_pi/bn-pi-hdr';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from 'url';
@Component({
  selector: 'app-bn-pi-reply',
  templateUrl: './bn-pi-reply.component.html',
  styleUrls: ['./bn-pi-reply.component.scss'],
  animations: [routerTransition()]
})
export class BnPiReplyComponent implements OnInit {
  title = 'Reply PI';
  // get from mock
  hdr_list = BN_PI_HDRS;
  public passed_HDR: BN_PI_HDR;
  submitform: FormGroup;
  // <-rubbish
  // states = [
  //   { name: 'Arizona', abbrev: 'AZ' },
  //   { name: 'California', abbrev: 'CA' },
  //   { name: 'Colorado', abbrev: 'CO' },
  //   { name: 'New York', abbrev: 'NY' },
  //   { name: 'Pennsylvania', abbrev: 'PA' },
  // ];
  // public A = this.states[0];
  // rubbish->



  constructor(private activeRoute: ActivatedRoute
    , private router: Router
    , private formBuilder: FormBuilder) {

    this.submitform = this.formBuilder.group({
      large_beautiful_birdnests_mark: new FormControl()
      , broken_birdnests_mark: new FormControl()
      , mix_price: new FormControl(null, Validators.required)
      , bulu_berat_price: new FormControl()
      , bulu_sedang_price: new FormControl()
      , bulu_ringan_price: new FormControl()
      , market_information: new FormControl()
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
  }
  ngOnInit() {
    this.getReplyDetails();
  }
  getReplyDetails() {
    const txn_no: string = this.activeRoute.snapshot.paramMap.get('txn_no');
    console.log(txn_no);
    this.passed_HDR = this.hdr_list.filter(x => x.txn_no === txn_no)[0];
    console.log(this.passed_HDR);
  }

}
