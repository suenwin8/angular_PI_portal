import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-birdnest',
  templateUrl: './birdnest.component.html',
  styleUrls: ['./birdnest.component.scss']
})
export class BirdnestComponent implements OnInit {
@Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
