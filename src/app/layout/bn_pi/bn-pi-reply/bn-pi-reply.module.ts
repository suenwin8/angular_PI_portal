import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPiReplyComponent } from './bn-pi-reply.component';
import { BnPiReplyRoutingModule } from './bn-pi-reply-routing.module';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// in order to use two-way data binding for form inputs you need to import the FormsModule package in your Angular module.
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
     , FormsModule
     , ReactiveFormsModule
  ],
  declarations: [BnPiReplyComponent]
})
export class BnPiReplyModule { }
