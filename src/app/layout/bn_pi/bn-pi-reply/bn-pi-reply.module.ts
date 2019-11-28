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


// nicole 20191127
  import {ShipmentSeritiComponent} from '../bn-pi-shipment/component/seriti/seriti.component';
 // import {BnPiShipmentDetailComponent} from '../bn-pi-shipment/bn-pi-shipment-detail/bn-pi-shipment-detail.component';
 import {BnPiShipmentModule} from '../bn-pi-shipment/bn-pi-shipment.module';
@NgModule({
  imports: [CommonModule
    , BnPiReplyRoutingModule
    , PageHeaderModule
    , NgbModule
    , FormsModule
    , ReactiveFormsModule
     , BnPiShipmentModule
  ],
  declarations: [
    BnPiReplyComponent,
    HeaderComponent,
    BirdnestComponent,
    SeritiComponent,
     // ShipmentSeritiComponent,
    // BnPiShipmentDetailComponent
  ]
  , providers: [DatePipe]
})
export class BnPiReplyModule { }
