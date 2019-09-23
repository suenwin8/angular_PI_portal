import { Component, OnInit } from '@angular/core';
import {BN_PI_HDR} from '../../../models/bn_pi/bn-pi-hdr';
 // nicole mock
import { BN_PI_HDRS } from '../../../models/mock/bn-pi-hdr';

@Component({
  selector: 'app-bn-pi-hdr',
  templateUrl: './bn-pi-hdr.component.html',
  styleUrls: ['./bn-pi-hdr.component.scss']
})
export class BnPiHdrComponent implements OnInit {

  title = 'View PI History';
  // nicole mock
  hdr_list = BN_PI_HDRS;
  selected_HDR: BN_PI_HDR;


  constructor () { }

  ngOnInit() {
  }

  public onSelect(hdr: BN_PI_HDR): void {
    this.selected_HDR = hdr;
    console.log(hdr);
  }
  public onView(hdr: BN_PI_HDR): void {
    this.selected_HDR = hdr;
    console.log(hdr);
  }

}
