import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seriti',
  templateUrl: './seriti.component.html',
  styleUrls: ['./seriti.component.scss']
})
export class SeritiComponent implements OnInit {
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
