import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISupplier } from 'src/app/interfaces/supplier/isupplier';
import { IBnPiShipmentDetail } from 'src/app/interfaces/bn-pi/ibn-pi-shipment';

@Component({
  selector: 'app-shipment-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() tpl_supplier_code: ISupplier[];
  @Input() tpl_data: IBnPiShipmentDetail;
  constructor() { }

  ngOnInit() {

  }

}
