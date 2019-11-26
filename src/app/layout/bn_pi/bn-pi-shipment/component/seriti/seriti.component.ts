import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipment-seriti',
  templateUrl: './seriti.component.html',
  styleUrls: ['./seriti.component.scss']
})
export class SeritiComponent implements OnInit {
  @Input() group: FormGroup;
  model: any;
  constructor() { }

  ngOnInit() {
  }

}
