import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BnPiReplyComponent} from './bn-pi-reply.component';
import {BnPiReplyRoutingModule} from './bn-pi-reply-routing.module';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
  ],
  declarations: [BnPiReplyComponent]
})
export class BnPiReplyModule { }
