import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-bn-pi-reply',
  templateUrl: './bn-pi-reply.component.html',
  styleUrls: ['./bn-pi-reply.component.scss'],
  animations: [routerTransition()]
})
export class BnPiReplyComponent implements OnInit {
  title = 'Reply PI';

  constructor() { }

  ngOnInit() {
  }

}
