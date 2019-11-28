import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISupplier } from 'src/app/interfaces/supplier/isupplier';

@Component({
  selector: 'app-shipment-seriti',
  templateUrl: './seriti.component.html',
  styleUrls: ['./seriti.component.scss']
})
export class ShipmentSeritiComponent implements OnInit {
  @Input() group: FormGroup;
  model: any;
  @Input() tpl_supplier_code: ISupplier[];
  constructor() { }

  ngOnInit() {
  }

}
