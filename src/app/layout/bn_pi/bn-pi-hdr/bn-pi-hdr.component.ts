import { Component, OnInit } from '@angular/core';
import {BN_PI_HDR} from '../../../models/bn_pi/bn-pi-hdr';
 // nicole mock
import { BN_PI_HDRS } from '../../../models/mock/bn-pi-hdr';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-bn-pi-hdr',
  templateUrl: './bn-pi-hdr.component.html',
  styleUrls: ['./bn-pi-hdr.component.scss'],
  animations: [routerTransition()]
})
export class BnPiHdrComponent implements OnInit {

  title = 'View PI History';
  // nicole mock
  hdr_list = BN_PI_HDRS;
  selected_HDR: BN_PI_HDR;


  constructor (private router: Router) { }

  ngOnInit() {
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

}
