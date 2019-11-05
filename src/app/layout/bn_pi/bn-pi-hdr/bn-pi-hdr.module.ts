import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// nicole 2019-09-25
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnPiHdrComponent } from './bn-pi-hdr.component';
import { BnPiHdrRoutingModule } from './bn-pi-hdr-routing.module';
import { BnPiReplyRoutingModule } from '../bn-pi-reply/bn-pi-reply-routing.module';
import { BnPiReplyComponent } from '../bn-pi-reply/bn-pi-reply.component';


import { HeaderComponent } from '../bn-pi-reply/component/header/header.component';
import { BirdnestComponent } from '../bn-pi-reply/component/birdnest/birdnest.component';
import { SeritiComponent } from '../bn-pi-reply/component/seriti/seriti.component';
import { DatePipe } from '@angular/common';
// nicole 20191105
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  imports: [CommonModule
    , BnPiHdrRoutingModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
    , FormsModule
    , ReactiveFormsModule
    , DataTablesModule
  ],
  declarations: [
    BnPiHdrComponent
    , BnPiReplyComponent
    , HeaderComponent
    , BirdnestComponent
    , SeritiComponent
  ]
  , providers: [DatePipe]
})
export class BnPiHdrModule { }
