import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPiReplyComponent } from './bn-pi-reply.component';
import { BnPiReplyRoutingModule } from './bn-pi-reply-routing.module';
import { PageHeaderModule } from './../../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// nicole
// in order to use two-way data binding for form inputs you need to import the FormsModule package in your Angular module.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { BirdnestComponent } from './component/birdnest/birdnest.component';
import { SeritiComponent } from './component/seriti/seriti.component';
import { DatePipe } from '@angular/common';
@NgModule({
  imports: [CommonModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
    , FormsModule
    , ReactiveFormsModule
  ],
  declarations: [BnPiReplyComponent, HeaderComponent, BirdnestComponent, SeritiComponent]
  , providers: [DatePipe]
})
export class BnPiReplyModule { }
