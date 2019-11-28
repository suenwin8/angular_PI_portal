import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISupplier } from 'src/app/interfaces/supplier/isupplier';

@Component({
  selector: 'app-shipment-birdnest',
  templateUrl: './birdnest.component.html',
  styleUrls: ['./birdnest.component.scss']
})
export class BirdnestComponent implements OnInit {

  @Input() group: FormGroup;
  model: any;
  @Input() tpl_supplier_code: ISupplier[];
  constructor() { }

  ngOnInit() {
  }

}
