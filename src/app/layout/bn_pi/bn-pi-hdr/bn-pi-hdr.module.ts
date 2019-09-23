import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnPiHdrComponent } from './bn-pi-hdr.component';
import { BnPiHdrRoutingModule } from './bn-pi-hdr-routing.module';
import { BnPiReplyRoutingModule } from '../bn-pi-reply/bn-pi-reply-routing.module';
import { BnPiReplyComponent } from '../bn-pi-reply/bn-pi-reply.component';


@NgModule({
  imports: [CommonModule
    , BnPiHdrRoutingModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
  ],
  declarations: [BnPiHdrComponent
    , BnPiReplyComponent
  ]
})
export class BnPiHdrModule { }
