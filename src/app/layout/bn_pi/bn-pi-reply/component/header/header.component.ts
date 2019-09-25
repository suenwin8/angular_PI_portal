import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BN_PI_HDR } from 'src/app/models/bn_pi/bn-pi-hdr';

@Component({
  selector: 'app-pi-reply-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() passed_HDR: BN_PI_HDR;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
